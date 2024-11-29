
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
const [user, setuser]=useState(false);
const [nom,setNom]=useState();
const onclickButton=()=>{
  setuser(true);
  setNom("Top Niveau");
}

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>{nom}</h2>
      <button onClick={onclickButton}>click me</button>
      {user ? <h1>{nom}</h1> : <></>}
<Counter/>
    </div>
  );
}

export default App;
