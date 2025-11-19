import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PlantOfTheWeek = () => {
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        fetch("/PlantData.json")
            .then((res) => res.json())
            .then((data) => {
                
                const specificPlant = data.find(p => p.plantName === "Fiddle Leaf Fig"); // replace with your desired plant
                setPlant(specificPlant);
            })
            .catch((err) => console.error("Failed to fetch plant data:", err));
    }, []);

    if (!plant) return null; 
    return (
        <div className="bg-green-50 p-6 rounded-xl shadow-md text-center my-10">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Plant of the Week</h2>
            <img
                src={plant.image}
                alt={plant.plantName}
                className="mx-auto w-48 h-48 rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{plant.plantName}</h3>
            <p className="text-green-700 mt-2">{plant.description}</p>
            <p className="text-green-600 mt-1 font-medium">Category: {plant.category}</p>
            <Link to={`/plant-details/${plant.plantId}`}><button className="mt-4 px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
                View Details
            </button></Link>
        </div>
    );
};

export default PlantOfTheWeek;

