import React, { useState } from "react";
import AllPlantsCard from "./AllPlantsCard";
import Loading from "../Pages/Loading";

const AllPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

  
    if (plants.length === 0) {
        fetch("/PlantData.json")
            .then((res) => res.json())
            .then((data) => {
                setPlants(data)
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading plants:", err)
                setLoading(false);
            });
    }

    if (loading) {
        return (
            <Loading></Loading>
        );
    }

    return (
        <div className="py-12 px-6 md:px-16">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
                Here are all our plants
            </h2>
            <p className="text-green-700 text-center max-w-2xl mx-auto mb-10">
                Choose which plants you want to decorate your lovely house with 
            </p>


         
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-[1440px] mx-auto">
                {plants.map((plant) => (
                    <AllPlantsCard key={plant.plantId} plant={plant} />
                ))}
            </div>

        </div>
    );
};

export default AllPlants;
