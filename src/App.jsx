
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import PlayersContainer from './component/PlayersContainer/PlayersContainer'


const playerPromise = fetch('/data.json').then(res=> res.json())


function App() {

  const [coin, setCoin] = useState(1000)
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner setCoin={setCoin} coin={coin}></Banner>
      <Suspense fallback={<div className='flex justify-center items-center text-green-600'><span className="loading loading-infinity loading-xl"></span></div>
      }>
        <PlayersContainer coin={coin} setCoin={setCoin} playerPromise={playerPromise}></PlayersContainer>
      </Suspense>
    </>
  )
}

export default App
