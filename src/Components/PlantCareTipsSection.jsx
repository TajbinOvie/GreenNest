import React from "react";
import { FaTint, FaSun, FaLeaf } from "react-icons/fa";

const PlantCareTipsSection = () => {
    return (
        <div className="py-16 px-6 md:px-16">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
                Plant Care Tips
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-[1440px] mx-auto">

                
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                    <div className="flex flex-col items-center text-center">
                        <FaTint className="text-blue-500 text-3xl mb-3" />
                        <h3 className="text-xl font-semibold text-green-800 mb-2">
                            Watering Tips
                        </h3>
                        <p className="text-green-700 text-sm leading-relaxed">
                            Keep the soil slightly moist — water when the top inch feels dry. Avoid overwatering to prevent root rot.
                        </p>
                    </div>
                </div>

                
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                    <div className="flex flex-col items-center text-center">
                        <FaSun className="text-yellow-500 text-3xl mb-3" />
                        <h3 className="text-xl font-semibold text-green-800 mb-2">
                            Sunlight Guidance
                        </h3>
                        <p className="text-green-700 text-sm leading-relaxed">
                            Place your plants near bright, indirect light. Avoid harsh sunlight that can scorch delicate leaves.
                        </p>
                    </div>
                </div>

                
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
                    <div className="flex flex-col items-center text-center">
                        <FaLeaf className="text-green-500 text-3xl mb-3" />
                        <h3 className="text-xl font-semibold text-green-800 mb-2">
                            Fertilizing Advice
                        </h3>
                        <p className="text-green-700 text-sm leading-relaxed">
                            Feed with a balanced liquid fertilizer every 4–6 weeks during the growing season for best results.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlantCareTipsSection;
