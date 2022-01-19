
import './App.css';
import { Navbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Landingpage } from './components/Landinpage';
import { City } from './components/City';
function App() {
  return (
    <div className="App">
     <Navbar/>

     <Routes>
     
       <Route path="/" element={<Landingpage />}>
       </Route>
       <Route path="/city/:city" element={<City/>}>
       </Route>
     </Routes>
     
    </div>
  );
}

export default App;
