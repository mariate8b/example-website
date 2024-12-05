import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <div className="bg-blue-500 text-white p-10 text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg">Learn more about our journey, mission, and values.</p>
            </div>

            {/* Who We Are Section */}
            <div className="p-10">
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-gray-600 leading-loose mb-6">
                    At <strong>BizBoots Lab</strong>, we’re passionate about helping businesses thrive in the digital world. 
                    We specialize in creating software solutions like product landing pages, portfolios, and business websites that aren’t just functional—they’re designed to leave a lasting impression.
                </p>
                <p className="text-gray-600 leading-loose">
                    We understand that every business has its own story and goals. That’s why we take the time to truly 
                    understand your vision, so we can craft solutions that feel like a natural extension of your brand.
                </p>
            </div>

            {/* Why Work with Us Section */}
            <div className="p-10 bg-gray-200">
                <h2 className="text-3xl font-bold mb-6">Why Work with Us?</h2>
                <ul className="list-disc pl-8 text-gray-600">
                    <li className="mb-4">
                        <strong>Solutions Tailored to You:</strong> No cookie-cutter templates here. Every project we take 
                        on is built from the ground up with your goals in mind.
                    </li>
                    <li className="mb-4">
                        <strong>Personalized Support:</strong> We believe in a collaborative approach. Our team works with 
                        you every step of the way, from brainstorming ideas to launch day and beyond.
                    </li>
                    <li className="mb-4">
                        <strong>A Team You Can Trust:</strong> We’re dedicated to delivering results that exceed your expectations.
                    </li>
                </ul>
                <p className="mt-6 text-gray-600">
                    Let’s build something amazing together!
                </p>
            </div>

            {/* Our Mission Section */}
            <div className="p-10">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-loose">
                    To provide innovative and reliable software solutions that meet our clients' unique needs while 
                    building long-lasting relationships based on trust and success.
                </p>
            </div>

            {/* Our Values Section */}
            <div className="p-10 bg-gray-200">
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <ul className="list-disc pl-8 text-gray-600">
                    <li className="mb-2"><strong>Customer-Centric Solutions:</strong> Putting our clients' needs first.</li>
                    <li className="mb-2"><strong>Integrity and Transparency:</strong> Building trust through honesty and accountability.</li>
                    <li className="mb-2"><strong>Innovation and Excellence:</strong> Continuously striving to deliver the best solutions.</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;

