import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-3'>
          <div className='flex flex-wrap gap-3 justify-center shadow-lg rounded-3xl px-3 py-2 bg-white'><button className='outline-none px-4 py-1 rounded-full text-black shadow-lg  ' style={{backgroundColor:'red'}} onClick={()=>setColor("red")}>red</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'green'}} onClick={()=>setColor("green")}>green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'yellow'}} onClick={()=>setColor("yellow")}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'blue'}} onClick={()=>setColor("blue")}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'grey'}} onClick={()=>setColor("grey")}>grey</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'olive'}} onClick={()=>setColor("olive")}>olive</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'purple'}} onClick={()=>setColor("purple")}>purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'pink'}} onClick={()=>setColor("pink")}>pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'maroon'}} onClick={()=>setColor("maroon")}>maroon</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'cyan'}} onClick={()=>setColor("cyan")}>cyan</button>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default App
