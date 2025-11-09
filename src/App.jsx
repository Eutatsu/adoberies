import { useState } from 'react'
import adoberies from './assets/adoberies_ddtec.svg'
import audio from './audio/adoberies.wav'
import './App.css'

function App() {

  return (
    <>
      <div className="inline-flex flex-col items-center gap-4 justify-center">
          <img src={adoberies} width='100%' className="w-48 h-48" alt="Logo Adoberies-DDTeC" />
     
      <h1>Adoberies Audio Experience</h1>
      <audio controls autoplay >
        <source src={audio} type="audio/wav"/>
        Your browser does not support the audio element.
      </audio>
 </div>
    </>
  )
}

export default App
