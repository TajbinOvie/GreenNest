'use client';
import React, { useEffect, useState } from "react";
import TopRatedCard from "./TopRatedCard";
import { Link } from "react-router";
import Loading from "../Pages/Loading";

const TopRatedSection = () => {
  const [topPlants, setTopPlants] = useState([]);

  useEffect(() => {
    fetch("/PlantData.json")
      .then(res => res.json())
      .then(plants => {
        const topRated = plants
          .filter(p => p.rating >= 4.7)
          .slice(0, 3);
        setTopPlants(topRated);
      })
      .catch(err => console.error("Failed to fetch top rated plants:", err));
  }, []);

  // if (topPlants.length === 0) return <Loading></Loading>;

  return (
    <div className="py-12 px-6 md:px-16 ">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
        Top Rated Indoor Plants
      </h2>

     
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-[1440px] mx-auto">
        {topPlants.map((plant) => (
          <TopRatedCard key={plant.plantId} plant={plant} />
        ))}
      </div>

      
      <div className="flex justify-center mt-12">
        <Link to="/plants">
          <button className="bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300">
            View All Plants
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRatedSection;


