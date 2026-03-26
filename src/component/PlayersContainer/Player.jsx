import { Flag, Star, User } from 'lucide-react';
import React from 'react';

const Player = ({ player }) => {
    console.log(player);

    return (
        <div className='border rounded-2xl p-3 space-y-3'>
            <div className='flex justify-center items-center'>
                <img className='w-88 h-75 rounded-2xl' src={player.playerImage} alt="" />
            </div>
            <h2 className='flex items-center text-xl font-bold gap-1'><User></User>{player.playerName}</h2>
            <div className='flex justify-between items-center'>
                <p className='flex items-center text-[#131313] font-semibold opacity-70'><Flag></Flag> {player.playerCountry}</p>
                <p className='px-4 py-2 bg-gray-200 rounded-lg font-normal'>{player.playerType}</p>
            </div>
              <hr className='text-black opacity-20' />
            <p className='font-bold flex items-center'>Ratting:  {player.ratting}</p>
            <div className='flex justify-between'>
                <p>{player.battingStyle}</p>
                <p>{player.bowlingStyle}</p>
            </div>
            <div className='flex justify-between'>
                <p>{player.Price}</p>
                <button className='btn'>Select</button>
            </div>
        </div>
    );
};

export default Player;