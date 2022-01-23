import { useEffect } from "react";
import axios from "axios";

export const Trips = () => {

    const gettripData = () => {

        let data = localStorage.getItem('token')
        data = JSON.parse(data);

        axios.get(`https://airbnb-fw12.herokuapp.com/trips/${data}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message))

       }

       useEffect(() => {
           gettripData();
       } , [])

    return(

        <div>

            <div className="h-20"></div>
          <h1>Trips</h1>
            
        </div>
        
    )
}