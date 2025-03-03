import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime)=> prevTime + 10);
        }, 10);
    } else if(!running) {
      clearInterval(interval);
    }

    return () =>{
      clearInterval(interval);
    }
  },[running]);

  return (
   <>
      <div className="flex flex-col justify-center space-y-2 rounded-3xl bg-gray-700 p-6 w-75 h-60 ">
        <h2 className="text-2xl font-bold text-white">My stopwatch</h2>
        <div className="border-2 rounded-2xl p-2 m-4 font-mono">
          <span>{("0" + Math.floor((time /60000)%60)).slice(-2)}: </span>
          <span>{("0" + Math.floor((time /1000)%60)).slice(-2)}: </span>
          <span>{("0" + Math.floor((time /10)%100)).slice(-2)} </span>
        </div>
        <div className="flex align-middle justify-around">
          {running ? (<button className="bg-red-600 rounded-3xl px-4 py-1.5 w-2/5" onClick={() => { setRunning(false)}}>Stop</button>):
          ( <button className="bg-green-500 rounded-3xl px-4 py-1.5 w-2/5" onClick={() => { setRunning(true)}}>Start</button>)} 
          <button className="bg-blue-400 rounded-3xl px-4 py-1.5 w-2/5" onClick={() => setTime(0)}>Reset</button>
        </div>
      </div>
   </>
  );
}

export default App;