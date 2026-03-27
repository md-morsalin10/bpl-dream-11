import { Flag, Star, User } from 'lucide-react';
import React, { useState } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Player = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    // console.log(player);

    const [isSelected, setIsSelected] = useState(false)
    const handleBtn = () => {
        let newCoin = coin - player.Price
        if (newCoin > 0) {
            setCoin(coin - player.Price)
        }
        else {
            toast.warning( `Not Enough Coin to Buy ${player.playerName}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
            return;
        }

        toast.success( `🦄 ${player.playerName} Successfully added Your Team`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setIsSelected(true)

        setSelectedPlayers([...selectedPlayers, player])

    }
    return (
        <div className='border border-neutral-300 rounded-2xl p-5 space-y-2 shadow-2xl'>
            <div className='flex justify-center items-center'>
                <img className='w-83 h-75 rounded-2xl' src={player.playerImage} alt="" />
            </div>
            <h2 className='flex items-center text-xl font-bold gap-1'><FaUser></FaUser>{player.playerName}</h2>
            <div className='flex justify-between items-center'>
                <p className='flex items-center text-[#131313] font-semibold opacity-70'><Flag></Flag> {player.playerCountry}</p>
                <p className='px-4 py-2 bg-gray-200 rounded-lg font-normal'>{player.playerType}</p>
            </div>
            <hr className='text-black opacity-20' />
            <p className='font-bold flex items-center'><FaStar></FaStar> {player.ratting}</p>
            <div className='flex justify-between'>
                <p className='font-semibold'>{player.battingStyle}</p>
                <p className='font-semibold'>{player.bowlingStyle}</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>Price: ${player.Price}</p>
                <button onClick={handleBtn} className='btn' disabled={isSelected ? true : false}>{isSelected ? 'Selected' : 'Choose Player'}</button>
            </div>
        </div>
    );
};

export default Player;