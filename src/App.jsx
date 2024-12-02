import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

const App = () => {
  const coffees = useLoaderData();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Coffee Collection: {coffees.length}
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {coffees.map((coffee) => (
          <div
            key={coffee.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
          >
            {/* Coffee Image */}
            <img
              src={coffee.photo}
              alt={coffee.name}
              className="w-20 h-20 object-cover rounded"
            />
            {/* Coffee Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">
                Name: {coffee.name}
              </h2>
              <p className="text-sm text-gray-600">Chef: {coffee.chef}</p>
              <p className="text-sm text-gray-600">Price: {coffee.price} Taka</p>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                🟡
              </button>
              <button className="p-2 bg-gray-300 text-white rounded hover:bg-gray-400">
                ✏️
              </button>
              <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default App;
