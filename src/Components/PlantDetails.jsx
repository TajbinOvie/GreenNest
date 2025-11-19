import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import Loading from "../Pages/Loading";

const PlantDetails = () => {
    const { plantId } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        fetch("/PlantData.json")
            .then((res) => res.json())
            .then((data) => {
                const foundPlant = data.find((item) => item.plantId === parseInt(plantId));
                setPlant(foundPlant);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading data:", err);
                setLoading(false);
            });
    }, [plantId]);

    
    const handleBookConsultation = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();

        if (!name || !email) {
            toast.error("Please fill out all fields!");
            return;
        }

        toast.success(`Consultation booked successfully for ${name}!`);
        form.reset();
    };

    if (loading) {
        return (
            <Loading></Loading>
        );
    }

   

    return (
        <div className="min-h-screen  py-10 px-5">
            <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-green-200">
                {/* Plant Info Section */}
                <div className="flex flex-col md:flex-row">
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className="w-full md:w-1/2 h-96 object-cover"
                    />
                    <div className="p-6 md:w-1/2 space-y-4">
                        <h2 className="text-3xl font-bold text-green-800">
                            {plant.plantName}
                        </h2>
                        <p className="text-green-700">{plant.description}</p>
                        <div className="flex flex-wrap gap-4 text-green-600 font-medium">
                            <p>💰 Price: ${plant.price}</p>
                            <p>⭐ Rating: {plant.rating}</p>
                            <p>📦 Stock: {plant.availableStock}</p>
                            <p>🌱 Care: {plant.careLevel}</p>
                        </div>
                        <p className="text-sm text-green-500">
                            Provided by: <span className="font-semibold">{plant.providerName}</span>
                        </p>
                    </div>
                </div>

                {/* Booking Form */}
                <div className="border-t border-green-200 p-6">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                        Book Consultation now
                    </h3>
                    <form
                        onSubmit={handleBookConsultation}
                        className="space-y-4 max-w-md"
                    >
                        <div>
                            <label className="block text-green-700 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-green-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
