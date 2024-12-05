import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-blue-500 text-white p-10 text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg">Get to know more about our journey and values.</p>
            </div>

            <div className="p-10">
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-gray-600 leading-loose">
                    [Your Company Name] was founded with the vision to deliver exceptional solutions 
                    that empower businesses and individuals. Our team is passionate, dedicated, and committed to excellence.
                </p>
            </div>

            <div className="p-10 bg-gray-200">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-loose">
                    To provide innovative and reliable products and services that meet our clients' unique needs while building long-lasting relationships based on trust and success.
                </p>
            </div>

            <div className="p-10">
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <ul className="list-disc pl-8 text-gray-600">
                    <li className="mb-2">Customer-Centric Solutions</li>
                    <li className="mb-2">Integrity and Transparency</li>
                    <li className="mb-2">Innovation and Excellence</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
