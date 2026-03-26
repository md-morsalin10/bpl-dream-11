import React, { use } from 'react';
import Player from './Player';

const PlayersContainer = ({ playerPromise }) => {
    const playersData = use(playerPromise)
    // console.log(playersData);

    return (
        <div className='p-5 w-11/12 mx-auto'> 
            <h1>Available Players {playersData.length}</h1>
            <div className='grid grid-cols-3 gap-5 p-5'>
                {
                    playersData.map(player => <Player player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default PlayersContainer;