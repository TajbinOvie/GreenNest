'use client';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import sliderBG from "../assets/eco-decor-img-1.jpg";
import Loading from "../Pages/Loading";

const HeroSlider = () => {
  const [featuredPlants, setFeaturedPlants] = useState([]);

  useEffect(() => {
    fetch("/PlantData.json")
      .then(res => res.json())
      .then(plants => setFeaturedPlants(plants.slice(0, 3)))
      .catch(err => console.error("Failed to fetch plants:", err));
  }, []);

  // if (featuredPlants.length === 0) return <Loading></Loading>;

  return (
    <div
      className="w-full h-[80vh] relative overflow-hidden"
      style={{
        backgroundImage: `url(${sliderBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {featuredPlants.map((plant) => (
          <SwiperSlide key={plant.plantId}>
            <div className="relative flex flex-col md:flex-row items-center justify-center h-[80vh] px-6 md:px-20">
              
              <div className="absolute inset-0 backdrop-blur-[5px] z-0"></div>

              
              <div className="flex-1 flex justify-center z-10">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-[280px] md:w-[400px] object-contain drop-shadow-2xl"
                />
              </div>

             
              <div className="flex-1 text-center md:text-left space-y-4 z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm">
                  {plant.plantName}
                </h2>
                <p className="text-lg text-white italic max-w-md mx-auto md:mx-0">
                  {plant.description}
                </p>
                <p className="text-white font-semibold">
                  Care Level: {plant.careLevel} | Rating: ⭐ {plant.rating}
                </p>
                <Link to={`/plant-details/${plant.plantId}`}>
                  <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-800 transition-all duration-300">
                    View Details – ${plant.price}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;


