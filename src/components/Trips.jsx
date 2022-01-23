import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Trips = () => {

    const navigate = useNavigate();

    const [tripShow , setTripShow] = useState('');

    const gettripData = () => {

        let data = localStorage.getItem('token')
        data = JSON.parse(data);

        axios.get(`https://airbnb-fw12.herokuapp.com/trips/${data}`)
        .then((res) => {
            console.log(res.data)
        setTripShow(res.data);
      
        })
        .catch((err) => console.log(err.message))

       }

       useEffect(() => {
           gettripData();
       } , [])

    return(

        <div>
         
         <div className="h-20"></div>

         <h1 className="text-2xl font-semibold ml-20" > {<i className="mr-10 cursor-pointer" onClick={() => navigate('/')}>{'<'}</i>}Your trips</h1>

         <div className="grid grid-cols-2 w-10/12 m-auto">
             {tripShow ? 
             
             tripShow.map((e) => (
        

                <div className="flex w-10/12 m-auto mt-7 border border-solid border-gray-400 rounded-2xl p-5" key={e._id}>

                <div className="w-7/12 text-justify ml-5">
               
                <h3 className="mt-2 tracking-wide text-sm">Host : {e.host_name}</h3>
                <h3>{e.city} , {e.state}</h3>
                
                <p className="text-xs mt-1 tracking-wide ">
                <ion-icon name="star"></ion-icon>
                    {e.ratings}</p>
                    <button className="p-2 text-xs rounded-md text-center mt-5 bg-red-600 text-white">Cancel Booking</button>
             
                </div>
             
             <div className="w-6/12">
             <img className="rounded-xl w-6/12 m-auto h-20" src={e.image1} alt=""/>
             </div>
                     
            </div>


             ))
             
             
             : null}
         </div>

        </div>
        
    )
}