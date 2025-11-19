import React, { Suspense, lazy } from 'react';
import Loading from './Loading';
const HeroSlider = lazy(() => import('../Components/HeroSlider'));
const TopRatedSection = lazy(() => import('../Components/TopRatedSection'));
const PlantOfTheWeek = lazy(() => import('../Components/PlantOfTheWeek'));
const PlantCareTipsSection = lazy(() => import('../Components/PlantCareTipsSection'));
const GreenExperts = lazy(() => import('../Components/GreenExperts'));
const EcoDecorIdeas = lazy(() => import('../Components/EcoDecorIdeas'));



const Homepage = () => {
    return (
        <Suspense fallback={<Loading></Loading>} >
            <div>
                <title>GreenNest-Home</title>
                <HeroSlider></HeroSlider>
                <TopRatedSection></TopRatedSection>
                <PlantOfTheWeek></PlantOfTheWeek>
                <PlantCareTipsSection></PlantCareTipsSection>
                <GreenExperts></GreenExperts>
                <EcoDecorIdeas></EcoDecorIdeas>
            </div>
        </Suspense>




    );
};

export default Homepage;