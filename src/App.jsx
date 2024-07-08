import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  
  const[range,setRange]=useState(8)
  const[number,setNumber]=useState(false)
  const[char,setChar]=useState(false)
  const[password,setPassword]=useState("")
  const passRef=useRef(null)

  const generator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str+="0123456789"
    }
    if(char){
      str+="/?~!@#$%^&*_|"
    }
    for (let index = 1; index <= range; index++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[range,number,char,setPassword])

  const copyPassword=useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    generator()
  },[length,number,char,generator])

  return (
    <>
      <h1 className='text-5xl text-white py-6 font-bold'>Password Generator</h1>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-5 py-5 my-8 bg-gray-500 flex'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full p-3 mx-2'
        placeholder='Password' 
        readOnly
        ref={passRef}/>
        <button 
        className='outline-none py-3 px-6 bg-red-600 text-white border-2 rounded-md hover:bg-green-600 shadow-xl'
        onClick={copyPassword}>Copy</button>
      </div>
      <div>
        <div>
          <input 
          type="range"
          value={range}
          min={8}
          max={100} 
          onChange={(e)=>{setRange(e.target.value)}}/>
          <label>Length : {range}</label>
        </div>
        <div>
          <input 
          type="checkbox"
          id='allowNum'
          onChange={()=>{setNumber(prev=>!prev)}}/>
          <label htmlFor='allowNum'> Include Numbers</label>
        </div>
        <div>
          <input 
          type="checkbox"
          id='allowChar'
          onChange={()=>{setChar(prev=>!prev)}}/>
          <label htmlFor='allowChar'> Include Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
