import React from "react";
import Swal from 'sweetalert2'


const AddCoffe = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);

        // send data to the server side
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) { // Corrected key name
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Add New Coffee</h1>
                <p className="text-gray-600 text-center mb-8">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter coffee name"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                        </div>
                        {/* Chef Input */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Chef</label>
                            <input
                                type="text"
                                name="chef"
                                placeholder="Enter coffee chef"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                        </div>
                        {/* Supplier Input */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Supplier</label>
                            <input
                                name="supplier"
                                type="text"
                                placeholder="Enter coffee supplier"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                        </div>
                        {/* Taste Input */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Taste</label>
                            <input
                                name="taste"
                                type="text"
                                placeholder="Enter coffee taste"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                        </div>
                        {/* Category Input */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Category</label>
                            <input
                                name="category"
                                type="text"
                                placeholder="Enter coffee category"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                        </div>
                        {/* Details Input */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Details</label>
                            <input
                                name="details"
                                type="text"
                                placeholder="Enter coffee details"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                        </div>
                        {/* Photo Input */}
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-semibold mb-2">Photo</label>
                            <input
                                name="photo"
                                type="text"
                                placeholder="Enter photo URL"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors w-full"
                    >
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffe;
