
import { Suspense } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import PlayersContainer from './component/PlayersContainer/PlayersContainer'

const playerPromise = fetch('/data.json').then(res=> res.json())


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div className='flex justify-center items-center text-green-600'><span className="loading loading-infinity loading-xl"></span></div>
      }>
        <PlayersContainer playerPromise={playerPromise}></PlayersContainer>
      </Suspense>
    </>
  )
}

export default App
