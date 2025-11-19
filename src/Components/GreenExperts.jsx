import React from "react";
import personOne from "../assets/person-1.webp"
import personTwo from "../assets/person-2.webp"
import personThree from "../assets/person-3.webp"
import personFour from "../assets/person-4.webp"

const GreenExperts = () => {
    return (
        <div className="py-12 px-6 md:px-16 text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-10">
                Meet Our Green Experts
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
                
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
                    <div className="w-32 h-32 mx-auto rounded-full bg-green-200 overflow-hidden mb-4 flex items-center justify-center text-green-700 font-semibold">
                        <img src={personOne} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">Ava Bloom</h3>
                    <p className="text-green-600 mt-2">Indoor Plant Specialist</p>
                </div>

                
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
                    <div className="w-32 h-32 mx-auto rounded-full bg-green-200 overflow-hidden mb-4 flex items-center justify-center text-green-700 font-semibold">
                        <img src={personTwo} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">Leo Fern</h3>
                    <p className="text-green-600 mt-2">Plant Nutrition Expert</p>
                </div>

                
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
                    <div className="w-32 h-32 mx-auto rounded-full bg-green-200 overflow-hidden mb-4 flex items-center justify-center text-green-700 font-semibold">
                        <img src={personThree} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">Maya Leaf</h3>
                    <p className="text-green-600 mt-2">Home Gardening Consultant</p>
                </div>

                
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
                    <div className="w-32 h-32 mx-auto rounded-full bg-green-200 overflow-hidden mb-4 flex items-center justify-center text-green-700 font-semibold">
                        <img src={personFour} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">Ethan Moss</h3>
                    <p className="text-green-600 mt-2">Succulent & Cactus Care Expert</p>
                </div>
            </div>
        </div>
    );
};

export default GreenExperts;
