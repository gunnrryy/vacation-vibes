require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', (req, res) => {
  res.send('VacationVibes backend is running!');
});

// Create table if not exists (for demo purposes)
const initDb = async () => {
  try {
    await pool.query(`
            CREATE TABLE IF NOT EXISTS testimonials (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                role VARCHAR(100),
                content TEXT,
                approved BOOLEAN DEFAULT false,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
    await pool.query(`
            CREATE TABLE IF NOT EXISTS visa_inquiries (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                phone VARCHAR(50),
                email VARCHAR(100),
                destination VARCHAR(100),
                travel_date_from VARCHAR(50),
                travel_date_to VARCHAR(50),
                passports TEXT,
                is_urgent BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
    // Ensure columns exist for existing tables
    try {
      await pool.query('ALTER TABLE visa_inquiries ADD COLUMN IF NOT EXISTS is_urgent BOOLEAN DEFAULT FALSE');
      await pool.query('ALTER TABLE visa_inquiries ADD COLUMN IF NOT EXISTS travel_date_from VARCHAR(50)');
      await pool.query('ALTER TABLE visa_inquiries ADD COLUMN IF NOT EXISTS travel_date_to VARCHAR(50)');
      // We leave travel_date for backward compatibility or drop it if desired.
    } catch (e) {
      // Ignore errors
    }
    console.log("Tables ready");
  } catch (err) {
    console.error("Error init DB", err);
  }
};
initDb();

app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Approved Testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM testimonials WHERE approved = true ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST New Testimonial
app.post('/api/testimonials', async (req, res) => {
  const { name, role, content } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO testimonials (name, role, content) VALUES ($1, $2, $3) RETURNING *',
      [name, role, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST Visa Inquiry
// POST Visa Inquiry
app.post('/api/visa-inquiry', async (req, res) => {
  const { name, phone, email, destination, travelDateFrom, travelDateTo, passports, isUrgent, hasUSVisa } = req.body;

  try {
    // 1. Save to Database (Optional - proceed if fails)
    let dbResult = null;
    try {
      const result = await pool.query(
        'INSERT INTO visa_inquiries (name, phone, email, destination, travel_date_from, travel_date_to, passports, is_urgent) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [name, phone, email, destination, travelDateFrom, travelDateTo, passports, isUrgent]
      );
      dbResult = result.rows[0];
    } catch (dbErr) {
      console.error("Database save failed (continuing to email):", dbErr.message);
    }

    // 2. Send Email if credentials exist
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Dynamic Email Content Construction
      let specificDetails = "";
      if (destination === 'United States') {
        specificDetails += `Urgent: ${isUrgent ? 'Yes' : 'No'}\n`;
      }
      if (destination === 'Turkey') {
        specificDetails += `Has US Visa (Turkey): ${hasUSVisa ? 'Yes' : 'No'}\n`;
      }

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'vvacationvibes@gmail.com',
        subject: `Visa Inquiry: ${name} - ${destination}`,
        text: `
New Visa Inquiry Received:

Name: ${name}
Phone: ${phone}
Email: ${email}
Destination: ${destination}
Travel Dates: ${travelDateFrom} to ${travelDateTo}
Number of Applicants: ${passports}
${specificDetails}
Please review and contact the client.
            `
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } catch (emailErr) {
        console.error('Error sending email:', emailErr);
        // Don't fail the request if email fails, just log it
      }
    } else {
      console.log('Email credentials not found, skipping email send.');
    }

    res.status(201).json(dbResult || { message: "Inquiry processed (Email sent)", success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
