import React from "react";
import ecoImgFirst from "../assets/eco-decor-img-1.jpg"
import ecoImgSecond from "../assets/eco-decor-img-2.jpg"
import ecoImgThird from "../assets/eco-decor-img-3.png"
 
const EcoDecorIdeas = () => {
    return (
        <div className="py-12 px-6 md:px-16  text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-10">
                 Eco Decor Ideas
            </h2>
            <p className="max-w-2xl mx-auto text-green-700 mb-10">
                Discover creative ways to style your living space with nature. From
                cozy corners to modern interiors, see how plants can transform your
                home into a refreshing and vibrant sanctuary.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1440px] mx-auto">
                
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                    <div className="h-56 bg-green-200 flex items-center justify-center text-green-700 font-semibold">
                        <img src={ecoImgFirst} alt="" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-green-800">
                            Minimalist Shelf Setup
                        </h3>
                        <p className="text-green-600 mt-2 text-sm">
                            Add small potted plants to shelves and bookcases for a balanced,
                            natural look.
                        </p>
                    </div>
                </div>

                
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                    <div className="h-56 bg-green-200 flex items-center justify-center text-green-700 font-semibold">
                        <img src={ecoImgSecond} alt="" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-green-800">
                            Hanging Planters
                        </h3>
                        <p className="text-green-600 mt-2 text-sm">
                            Use hanging planters near windows to bring life to vertical
                            spaces while saving room.
                        </p>
                    </div>
                </div>

                
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                    <div className="h-56 bg-green-200 flex items-center justify-center text-green-700 font-semibold">
                        <img src={ecoImgThird} alt="" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-green-800">
                            Tabletop Terrariums
                        </h3>
                        <p className="text-green-600 mt-2 text-sm">
                            Create small glass terrariums to use as elegant centerpieces on
                            your tables.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoDecorIdeas;
