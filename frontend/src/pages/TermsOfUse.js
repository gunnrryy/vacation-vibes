import React from 'react';

export default function TermsOfUse() {
  return (
    <main className="min-h-screen w-full" style={{ backgroundColor: '#0E1420' }}>
      <div className="flex flex-col items-center text-white py-16 px-4 w-full">
        <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#fbbf24] mb-8 text-center">Terms of Use</h1>
        <section className="space-y-6 text-gray-200">
          <h2 className="text-2xl font-bold text-[#fbbf24] mb-2">General Terms of Use</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2">Terms of Payment</h3>
          <p>
            Customers can choose to make payment for their Bookings of Flights, Accommodation, Car Rentals, Visa assistance, Passport assistance, Excursion booking services by mode of Bank Transfers via IMPS / NEFT / RTGS, Bank cheque leaf, UPI, Credit Card / Debit Cards using Payment gateway(s).
          </p>
          <p>
            In the event of cancellation, the refund will be credited back to the same account from where the payment was made. For example, if you used a credit card for making the payment for any of the service(s), Vacation Vibes LLP will make an appropriate charge reversal on the same credit card.
          </p>
          <p>
            Any such refunds shall be processed within 21 working days of cancellation.
          </p>
          <p>
            In some special cases, a charge reversal may not be possible. For example, deactivation or expiry of the credit card used during booking. In such a case, other modes of payment may be used. Understandably, the refund process time taken for special cases may take more time than usual.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Fee Payment</h3>
          <p>
            Vacation Vibes LLP reserves the right to charge transaction fee based on certain completed transactions using the services. Vacation Vibes LLP further reserves the right to alter any and all fee from time to time, without notice.
          </p>
          <p>
            The Customer shall be completely responsible for all charges, fee, duties, taxes, and assessments arising out of the use of the services.
          </p>
          <ul className="list-disc ml-6">
            <li>Domestic Flight Booking : INR 300 + GST (@18%)</li>
            <li>International Flight Booking : INR 1000 + GST (@18%)</li>
            <li>Hotel / Accommodation Booking : INR 1000 + GST (@18%)</li>
            <li>Transfer Booking : INR 1000 + GST (@18%)</li>
            <li>Forex assistance : INR 0 (nil)</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2">Modifications & Refunds</h3>
          <ul className="list-disc ml-6">
            <li>Any amendment or modification requests made by you post booking may be at the sole discretion of Vacation Vibes LLP and/or the service provider.</li>
            <li>Such amendment or modification requests may incur an additional cost which shall be communicated to you before implementing the amendment or modification request.</li>
            <li>Vacation Vibes LLP, in certain scenario may not accept amendment requests if the service (e.g.: check-in or travel date) is within 24 Hours.</li>
            <li>In some cases, the refunds shall be done by the service provider directly to you and Vacation Vibes LLP shall not be responsible for ensuring any refunds whatsoever.</li>
            <li>Your bank may debit its own separate charges from refunds made to your credit card or bank account.</li>
            <li>In case the client wishes to modify his or her travel dates, we request you to kindly reach out to us 15 days prior to the journey date via e-mail/SMS if the booking supports Rescheduling.</li>
            <li>Postponing & preponing may attract additional charges.</li>
            <li>Few service providers (Hotels, Transporter etc.) may apply to date change charges even after meeting the above requirement. In such cases postpone/prepone charges will be deducted from the advance amount deposited.</li>
            <li>In all prepone or postpone scenarios, the services and the costing will be subject to the availability.</li>
            <li>We do not accept any changes in the plan within 15 days of the travel date. However, in rare cases like adverse climatic conditions or strikes, the package can be postponed which will be intimated to you beforehand.</li>
            <li>Our service charges start from as low as INR 5,000 for assisting with curating a tailor-made itinerary that suits your travel preferences.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2">Legal Jurisdiction</h3>
          <p>
            These Terms are governed by and shall be construed in accordance with the laws of the Republic of India and any dispute shall exclusively be subject to the jurisdiction of the appropriate Courts situated at Mumbai, India.
          </p>
        </section>
        </div>
      </div>
    </main>
  );
}
