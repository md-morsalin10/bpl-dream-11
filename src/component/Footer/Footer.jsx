import React from 'react';
import logoFooter from "../../../assets/logo-footer.png"

const Footer = () => {
    return (
        <footer className='relative bg-[#06091A] text-white h-140 flex justify-center items-center'>
            <div className="absolute -top-40 left-0 right-0 w-10/12 mx-auto">
                <div className="border border-white/20 p-4 rounded-3xl backdrop-blur-md">
                    <div className="bg-white rounded-3xl py-16 text-black text-center shadow-lg"
                        style={{
                            backgroundImage: "linear-gradient(to right, #ffffff, #f0f8ff, #ffffff)"
                        }}>
                        <h2 className='text-3xl font-bold'>Subscribe to our Newsletter</h2>
                        <p className='text-[#131313] opacity-80'>Get the latest updates and news right in your inbox!</p>
                        <div className="flex justify-center gap-3 mt-8 px-4">
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-sm" />
                            <button className="btn bg-linear-to-r from-yellow-400 to-pink-400 border-none font-bold">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-10/12 mx-auto mt-16'>
                    <div className='flex justify-center items-center'>
                        <img src={logoFooter} alt="" />
                    </div>
                    <div className='grid grid-cols-3 gap-10 space-y-4 pt-8'>
                        <div className='space-y-3'>
                            <h2 className='text-xl font-bold'>About Us</h2>
                            <p className='text-[#FFFFFF] opacity-60'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-xl font-bold'>Quick Links</h2>
                            <ul className='text-[#FFFFFF] opacity-60 space-y-2'>
                                <li><a href="">Home</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='font-bold text-xl'>Subscribe</h2>
                            <p className='text-[#FFFFFF] opacity-60'>Subscribe to our newsletter for the latest updates.</p>

                            <div className="flex justify-center gap-3 mt-8">
                                <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-sm" />
                                <button className="btn bg-linear-to-r from-yellow-400 to-pink-400 border-none font-bold">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;