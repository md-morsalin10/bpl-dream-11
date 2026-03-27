import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const SingleSelectedPlayer = ({ sPlayer, setSelectedPlayers, selectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);

    const handelDltBtn = (sPlayer) => {
        const filterPlayers = selectedPlayers.filter((selectedPlayers) => selectedPlayers.playerName !== sPlayer.playerName);
        setSelectedPlayers(filterPlayers)
        setCoin(coin + sPlayer.Price)

        toast.error(`${sPlayer.playerName} is deleted from your team`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });


    }


    return (
        <div className='flex justify-between items-center border rounded-xl p-3 my-5'>
            <div className='flex justify-center items-center gap-3'>
                <div>
                    <img src={sPlayer.playerImage} className='h-20 w-20 rounded-xl' alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-bold flex items-center gap-1'><FaUser></FaUser> {sPlayer.playerName}</h2>
                    <p className='font-medium'>{sPlayer.playerType}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handelDltBtn(sPlayer)} className='btn text-red-500'><MdDelete></MdDelete></button>
            </div>
        </div>
    );
};

export default SingleSelectedPlayer;