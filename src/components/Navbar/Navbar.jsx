import React from 'react';
import logo from '/src/assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {

    return (
        <div className='bg-white flex justify-between items-center max-width h-[78px] py-4 border-b-[1px] border-[#E9E9E9]'>
            <div className='flex justify-between items-center w-28'>
                <img className='w-10' src={logo} alt="logo" />
                <p className='font-bold bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] bg-clip-text text-transparent'>HERO.IO</p>
            </div>
            <div>
                <ul className='font-medium text-[#000000e6] flex gap-8'>
                    <li>Home</li>
                    <li>Apps</li>
                    <li>Installation</li>
                </ul>
            </div>
            <div>
                <button className='btn primary-gradient text-base font-semibold text-white gap-2.5 rounded-sm'><FaGithub size="20px"/>Contribute</button>
            </div>
        </div>
    );
};

export default Navbar;