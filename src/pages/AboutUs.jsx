// Import necessary React and Tailwind CSS dependencies
import React from 'react';

// Define the AboutUs component
const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Welcome to our Blood Donation Application, where we connect donors with those in need of blood,
          fostering a seamless and efficient donation process. Our platform is built with the MERN stack
          (MongoDB, Express.js, React, Node.js) to ensure a robust and user-friendly experience.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Our mission is to make blood donation easy and accessible. We provide a platform for donors to
          register, view donation requests, and respond to them. Additionally, our application supports
          volunteer management, content management, and role-based access control to ensure a secure and
          organized donation process.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Whether you are a donor, volunteer, or administrator, our dashboard offers a personalized
          experience tailored to your role. We believe in the power of community and the impact blood
          donation can have on saving lives.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Thank you for joining us in this noble cause. Together, we can make a difference and contribute
          to a healthier and safer world.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;