// Import necessary React and Tailwind CSS dependencies
import React from 'react';

// Define the TermsAndConditions component
const TermsAndConditions = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h2>
        <div className="prose prose-lg text-gray-700">
          <p>
            Welcome to our Blood Donation Application. By accessing and using this application, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree with these terms, please do not use our application.
          </p>
          <h3>1. User Registration</h3>
          <p>
            To access certain features of the application, you may be required to register for an account. You agree to provide accurate and current information during the registration process and to update such information to keep it accurate and current.
          </p>
          <h3>2. Donor Responsibilities</h3>
          <p>
            As a donor, you agree to abide by the guidelines provided in the application. This includes providing accurate information, responding to donation requests promptly, and following the specified donation process.
          </p>
          <h3>3. Privacy Policy</h3>
          <p>
            Your use of the Blood Donation Application is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
          </p>
          <h3>4. User Conduct</h3>
          <p>
            You agree not to engage in any activity that disrupts or interferes with the proper functioning of the application. This includes but is not limited to the use of harmful code, unauthorized access, or any other actions that violate applicable laws and regulations.
          </p>
          <h3>5. Changes to Terms</h3>
          <p>
            We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the Blood Donation Application after any such changes constitutes your acceptance of the new terms and conditions.
          </p>
          <h3>6. Contact Information</h3>
          <p>
            If you have any questions about these terms and conditions, please contact us at support@blooddonationapp.com.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
