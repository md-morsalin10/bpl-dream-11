import React from 'react';
import SingleSelectedPlayer from './SingleSelectedPlayer';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    console.log(selectedPlayers);
    
    return (
        <div>
            {selectedPlayers.length===0 ? <div className='flex justify-center items-center flex-col space-y-4 p-6 h-100'>
                <h2 className='text-2xl font-bold opacity-60'>No Player Selected Yet</h2>
                <p className='text-xl'>Go Available tap and Select Players</p>
            </div> : selectedPlayers.map(sPlayer=> <SingleSelectedPlayer coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} sPlayer={sPlayer}></SingleSelectedPlayer>)}
        </div>
    );
};

export default SelectedPlayers;