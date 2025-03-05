import {useState, useEffect} from 'react';
import './index.css';

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
    <div>
    </div>
      <div className="h-[500px] w-full flex justify-center items-center">
      <div className="flex flex-col justify-center space-y-2 rounded-3xl bg-gray-700 p-6 w-75 h-60 ">
        <h2 className="text-2xl font-bold text-white text-center">My stopwatch</h2>
        <div className="border-2 rounded-2xl p-2 m-4 font-mono text-center">
          <span>{("0" + Math.floor((time /60000)%60)).slice(-2)}: </span>
          <span>{("0" + Math.floor((time /1000)%60)).slice(-2)}: </span>
          <span>{("0" + Math.floor((time /10)%100)).slice(-2)} </span>
        </div>
        <div className="flex align-middle justify-around">
          {running ? (<button className="bg-red-600 btn-styles" onClick={() => { setRunning(false)}}>Stop</button>):
          ( <button className="bg-green-500 btn-styles" onClick={() => { setRunning(true)}}>Start</button>)} 
          <button className="bg-blue-500 btn-styles" onClick={() => setTime(0)}>Reset</button>
        </div>
      </div>
      </div>
   </>
  );
}

export default App;