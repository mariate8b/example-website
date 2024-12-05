import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate('/products'); // Navigate to the Products and Services page
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <div className="bg-blue-500 text-white p-10 text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to BizBoots Lab</h1>
                <p className="text-lg">We provide exceptional business solutions to grow your business in today's world.</p>
                <button
                    onClick={handleLearnMore}
                    className="mt-6 bg-white text-blue-500 py-2 px-4 rounded shadow hover:bg-gray-200"
                >
                    Learn More
                </button>
            </div>

            {/* Services Section */}
            <div className="p-10">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 shadow rounded text-center">
                        <h3 className="text-xl font-bold mb-4">Product Landing Page</h3>
                        <p className="text-gray-600">Description of Service One. Explain its benefits to your customers.</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded text-center">
                        <h3 className="text-xl font-bold mb-4">Business Website</h3>
                        <p className="text-gray-600">Description of Service Two. Highlight what makes it unique.</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded text-center">
                        <h3 className="text-xl font-bold mb-4">Professional Website/ Portfolios</h3>
                        <p className="text-gray-600">Description of Service Three. Focus on customer value.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-200 p-10">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 shadow rounded">
                        <p className="italic text-gray-600">"This company exceeded our expectations! Highly recommended."</p>
                        <p className="mt-4 font-bold">- Happy Customer</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded">
                        <p className="italic text-gray-600">"Fantastic service and support throughout."</p>
                        <p className="mt-4 font-bold">- Another Satisfied Client</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
