import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Navbar/>

     <Routes>
     
       <Route path="/" element={  <div >Hi</div>}>
       </Route>
      
     </Routes>
     
    </div>
  );
}

export default App;
