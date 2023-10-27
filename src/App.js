import { useState } from "react"
import { Buttons } from './Buttons';
import { Pool } from "./Pool";

export function App() {

  const [count, setCount] = useState(0);

  const plus = ()=>{

    const start_time = Date.now(); 

    const interval = setInterval(()=>{

        setCount(prev=> prev+1);
        if( Date.now() - start_time > 10000 ) clearInterval(interval);

    }, 1000);

  }

  const minus = ()=>{
    const start_time = Date.now(); 

    const interval = setInterval(()=>{

        setCount(prev=> prev-1);
        if( Date.now() - start_time > 10000 ) clearInterval(interval);

    }, 1000);
  }

  return (
    <div>
      <Buttons plus={plus} minus={minus} />
      <Pool count={count} />
    </div>
  )
}
