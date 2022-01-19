import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const  City=()=>{
    const [data,setData]=useState([]);
    let {city}=useParams();
    useEffect(()=>{
        getData();
    },[])
    async function  getData() {
         let tempData=await fetch(`https://airbnb-fw12.herokuapp.com/hotel/`)
               .then((tempData)=>tempData.json())
               let tempData2= tempData.filter((element)=>{
                   for(let i=0;i<city.length;i++){
                     if(city[i]!=element.city[i]) return false;
                   }
                     return true;
                 })
                setData(tempData2);
                console.log(tempData2)
    console.log(city);
            }
    return (<div>
        {
           
        }
    </div>)
}