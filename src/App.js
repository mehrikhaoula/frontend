
import './App.css';

import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <>
<main>
  <Outlet/>
</main>
<Footer/>
</>
  );
}

export default App;
