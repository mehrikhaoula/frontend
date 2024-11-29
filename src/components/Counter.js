import React, { useEffect, useState } from 'react'

function Counter () {
    const [count,SetCount]=useState(0);
useEffect(()=>{
    document.title =`count:${count}`;
    }, [count]);

  return (
    <div style={{textAlign:"center"}}>
        <h1>Counter</h1>
        <p>current count :{count}</p>
        <button onClick={()=>SetCount(count+1)}>Increment</button>
        <button onClick={()=>SetCount(count-1)}>decrement</button>

    </div>

  );
}

export default Counter