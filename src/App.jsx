
import './App.css';
import { Navbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Landingpage } from './components/Landinpage';
import { City } from './components/City';
import { Place } from './components/Place';
function App() {
  return (
    <div className="App">
     <Navbar/>

     <Routes>
     
       <Route path="/" element={<Landingpage />}>
       </Route>
       <Route path="/city/:city" element={<City/>}>
       </Route>
       <Route path="/id/:_id" element={<Place/>}>
       </Route>
     </Routes>
     
    </div>
  );
}

export default App;
