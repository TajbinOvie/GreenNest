import React from 'react';
import Navbar from '../Components/Navbar';
import AllPlants from '../Components/AllPlants';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {

    const { state } = useNavigation();

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                {state == "loading" ? <Loading></Loading> : <Outlet></Outlet> }
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;