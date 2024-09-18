import React, { useState } from 'react';
import { BsList, BsLungsFill } from 'react-icons/bs';
import MyImg from '../../assets/My.jpg'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navData = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'NPM Packages', link: '' },
        { id: 3, name: 'VSCode Extensions', link: '' },
        { id: 4, name: 'Web Based Application', link: '' },
        { id: 5, name: 'Blogs', link: '' },
        { id: 6, name: 'Android Apps', link: '' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='h-auto py-4 px-6 bg-white shadow-md text-[#536DFE]'>
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-lg font-bold flex">
                        <img src={MyImg} alt="" className='h-8 rounded-full w-auto'/>
                        <span className='pl-2 pt-1 font-bold'>Jehan Weerasuriya</span>
                    </h1>
                </div>

                <div className="md:hidden mt-3">
                    <button onClick={toggleMobileMenu}>
                        <BsList size={24} />
                    </button>
                </div>

                <div className="hidden md:flex space-x-6">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block duration-500 hover:underline font-semibold">
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? 'translate-y-14' : '-translate-y-full'
                } md:hidden`}
            >
                <div className="py-4">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block py-2 px-4 border-b border-gray-200">
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;