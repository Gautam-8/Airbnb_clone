import './App.css';
import { Navbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Landingpage } from './components/Landinpage';
import { City } from './components/City';
import { Place } from './components/Place';
import { Login } from './components/Login';
import { Payment } from './components/Payment';
import { Order } from './components/Orderconfirm';
import { Trips } from './components/Trips';
import {SignUp} from "./components/SignUp";
import {PrivateRoute} from './components/PrivateRoute'
 

function App() {

  return (

    <div className="App">

     <Navbar/>

     <Routes>
       
       <Route path="/Airbnb_clone" element={<Landingpage />}>
       </Route>
       <Route path="/city/:city" element={<City/>}>
       </Route>
       <Route path="/id/:_id" element={<Place/>}>
       </Route>
       <Route path="/payment/:_id/:day" element={<PrivateRoute> <Payment/></PrivateRoute> }>
       </Route>
       <Route path="/order/:Oid" element={<PrivateRoute><Order/></PrivateRoute>}>
       </Route>
       <Route path="/trips" element={<PrivateRoute><Trips/></PrivateRoute>}>
       </Route>
       <Route path="/login" element={<Login/>}>
       </Route>
       <Route path="/signup" element={<SignUp/>}>
       </Route>

     </Routes>


    </div>
  );
}

export default App;
