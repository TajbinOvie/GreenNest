import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import PlantDetails from '../Components/PlantDetails';

const PlantDetailsPage = () => {
    return (
        <div>
            <title>GreenNest-Plant Details</title>
            <Navbar></Navbar>
                <PlantDetails></PlantDetails> 
            <Footer></Footer>
        </div>
    );
};

export default PlantDetailsPage;