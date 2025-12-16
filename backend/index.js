require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

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
    console.log("Testimonials table ready");
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
