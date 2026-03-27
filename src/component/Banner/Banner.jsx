import React from 'react';
import banner from "../../../assets/bg-shadow.png"
import bannerLogo from "../../../assets/banner-main.png"


const Banner = ({setCoin}) => {
    const handleBannerBtn = () =>{
        setCoin(prevCoin=> prevCoin + 25000)
    }
    return (
        <div className='w-11/12 mx-auto py-4'>

            <div
            className="bg-black rounded-3xl overflow-hidden bg-cover bg-center h-120 flex flex-col items-center justify-center text-center space-y-6"
            style={{ backgroundImage: `url(${banner})` }}>
                <div>
                    <img src={bannerLogo} alt="" />
                </div>
                <h2 className='text-2xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-white opacity-75'>Beyond Boundaries Beyond Limits</p>
                <div className='border-2 border-[#E7FE29] p-2 rounded-xl'>
                    <button onClick={handleBannerBtn} className='btn bg-[#E7FE29] border-none text-black font-bold'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;