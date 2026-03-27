import { CirclePoundSterling } from 'lucide-react';
import React from 'react';
import dollar from "../../../assets/dollar.png"
import logo from "../../../assets/logo.png"

const Navbar = ({coin}) => {
    return (
        <div className='w-11/12 mx-auto py-2'>
            <div className="navbar bg-base-200 shadow-sm rounded-2xl">
                <div className="flex-1">
                    <img className='w-12 h-12' src={logo} alt="" />
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <ul className="menu menu-horizontal px-3">
                        <li><a>Home</a></li>
                        <li><a>Fixtures</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                    <p className='btn'>
                       <span>{coin} Coins</span>
                        <img src={dollar} alt="" />
                        </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;