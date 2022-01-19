
import './App.css';
import { Navbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Landingpage } from './components/Landinpage';
function App() {
  return (
    <div className="App">
     <Navbar/>

     <Routes>
     
       <Route path="/" element={<Landingpage />}>
       </Route>
      
     </Routes>
     
    </div>
  );
}

export default App;
