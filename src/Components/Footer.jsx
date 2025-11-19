import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-10 overflow-hidden">
                <div className="footer sm:footer-horizontal w-full flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                    
                    <aside className="flex flex-col items-start text-left">
                        <img src={logo} alt="Logo" className="w-100 h-50 mb-2" />
                        <p className="max-w-xs text-sm">
                            <span className="font-bold text-lg">GreenNest</span> — is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.
                        </p>
                    </aside>

                    <nav className="flex flex-col items-start text-left">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>

                    <nav className="flex flex-col items-start text-left">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                    <nav className="flex flex-col items-start text-left">
                        <h6 className="footer-title">Social Media</h6>
                        <a href="#" className="link link-hover flex items-center gap-2">
                            <Facebook size={18} /> Facebook
                        </a>
                        <a href="#" className="link link-hover flex items-center gap-2">
                            <Twitter size={18} /> Twitter
                        </a>
                        <a href="#" className="link link-hover flex items-center gap-2">
                            <Instagram size={18} /> Instagram
                        </a>
                        <a href="#" className="link link-hover flex items-center gap-2">
                            <Github size={18} /> GitHub
                        </a>
                    </nav>

                </div>
            </div>

           
            <div className="border-t border-base-300 text-center py-4 text-sm px-6 sm:px-10">
                <p>© {new Date().getFullYear()} GreenNest. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

