// Import necessary React and Tailwind CSS dependencies
import React from 'react';

// Sample data for frequently asked questions
const faqData = [
  {
    question: 'How can I register as a donor?',
    answer: 'To register as a donor, go to the registration page and fill in the required information, including your email, name, blood group, district, upazila, and password.',
  },
  {
    question: 'Can I edit my donation request?',
    answer: 'Yes, you can edit your donation request. Navigate to your Donor Dashboard, find the donation request you want to edit, and click the "Edit" button. Make the necessary changes and click "Update Donation Request."',
  },
  {
    question: 'What is the donation status "In Progress"?',
    answer: 'The status "In Progress" indicates that your blood donation request is currently in progress. You will see options to mark it as "Done" or "Canceled" when the donation process is ongoing.',
  },
  {
    question: 'How do I search for donors?',
    answer: 'Visit the Search page and use the search form to filter donors based on blood group, district, upazila, and email. Click the "Search" button to view the list of donors matching your criteria.',
  },
  {
    question: 'Can I donate money?',
    answer: 'Yes, you can contribute to our organization by visiting the Funding page. From there, you can provide financial support to help us continue our mission of facilitating blood donation activities.',
  },
  // Add more FAQ items as needed
];

// Define the FAQ component
const FAQ = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid gap-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded p-6 bg-white shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
