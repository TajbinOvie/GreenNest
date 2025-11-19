import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Pages/Loading';

const AuthLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header >
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

export default AuthLayout;