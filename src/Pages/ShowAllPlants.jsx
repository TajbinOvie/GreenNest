import React from 'react';
import AllPlants from '../Components/AllPlants';
import { useNavigation } from 'react-router';
import Loading from './Loading';

const ShowAllPlants = () => {
    const { state } = useNavigation()
    return (
        <div>
            <title>GreenNest-All plant</title>
           {state == "loading" ? <Loading></Loading> : <AllPlants></AllPlants> } 
        </div>
    );
};

export default ShowAllPlants;