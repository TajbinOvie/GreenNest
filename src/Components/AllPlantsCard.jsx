import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AllPlantsCard = ({ plant }) => {
    const {plantName, image, category, price, rating, plantId} = plant;
    return (
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100">
      
            <div className="w-full h-56 bg-green-50 flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={plantName}
                    className="h-full object-contain transform hover:scale-105 transition-all duration-300"
                />
            </div>

   
            <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-green-800">
                    {plantName}
                </h3>
                <p className="text-green-600 text-sm mt-1">{category}</p>

          
                <div className="flex items-center justify-between mt-4 text-green-700">
                    <span className="font-bold text-lg">${price}</span>
                    <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        {rating}
                    </span>
                </div>

                <Link to={`/plant-details/${plantId}`}>
                    <button className="mt-5 bg-green-700 text-white px-5 py-2 rounded-full shadow hover:bg-green-800 transition-all duration-300">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AllPlantsCard;
