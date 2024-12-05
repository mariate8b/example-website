import React from 'react';

const ProductsAndServices = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-blue-500 text-white p-10 text-center">
                <h1 className="text-4xl font-bold mb-4">Products & Services</h1>
                <p className="text-lg">Explore our range of offerings designed to meet your needs.</p>
            </div>

            <div className="p-10">
                <h2 className="text-3xl font-bold mb-6">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 shadow rounded text-center">
                        <h3 className="text-xl font-bold mb-4">Product One</h3>
                        <p className="text-gray-600">Brief description of the product.</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded text-center">
                        <h3 className="text-xl font-bold mb-4">Product Two</h3>
                        <p className="text-gray-600">Brief description of the product.</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded text-center">
                        <h3 className="text-xl font-bold mb-4">Product Three</h3>
                        <p className="text-gray-600">Brief description of the product.</p>
                    </div>
                </div>
            </div>

            <div className="p-10 bg-gray-200">
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 shadow rounded">
                        <h3 className="text-xl font-bold mb-4">Service One</h3>
                        <p className="text-gray-600">Detailed description of the service.</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded">
                        <h3 className="text-xl font-bold mb-4">Service Two</h3>
                        <p className="text-gray-600">Detailed description of the service.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsAndServices;
