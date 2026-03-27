import React, { use, useState } from 'react';
import Player from './Player';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const PlayersContainer = ({ playerPromise,setCoin,coin }) => {
    const playersData = use(playerPromise)
    // console.log(playersData);
    const [selected, setSelected] = useState("available")
    const [selectedPlayers, setSelectedPlayers]= useState([])

    return (
        <div className='p-5 w-11/12 mx-auto'> 
            <div className='flex justify-between items-center'>
                <div>
                    {selected==='available' ? <h1 className='text-xl font-bold'>Available Players</h1> : <h1 className='text-xl font-bold'>Selected Players({selectedPlayers.length} /{playersData.length})</h1>}
                </div>
                <div>
                    <button onClick={()=> setSelected("available")} className={`${selected==='available' ? 'btn-accent': ''} mr-2 btn`}>Available</button>
                    
                    <button onClick={()=> setSelected("selected")} className={`${selected==='selected' ? 'btn-accent': ''} mr-2 btn`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>
            { selected === 'available' ?  <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                {playersData.map((player, ind) => <Player key={ind} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin} player={player}></Player>)}
            </div> : <div><SelectedPlayers coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers></div>}
        </div>
    );
};

export default PlayersContainer;