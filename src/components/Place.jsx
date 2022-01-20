import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/Place.css"

export const  Place=()=>{
    const [data,setData]=useState({});
    let {_id}=useParams();
    console.log(_id);
    
    useEffect(()=>{
        getData();
    },[]);
    async function  getData() {
         let tempData=await fetch(`https://airbnb-fw12.herokuapp.com/hotel/`)
               .then((tempData)=>tempData.json())
               let tempData2= tempData.filter((temp)=>{
                   return (":"+temp._id)==_id.toString();
               })
                setData(tempData2[0]);
                console.log(tempData2[0])

            }
    return (<div  >
        <div id="city">
        <br />
        <br />
        <br />
        {<h1> <strong>Standard Private room | {data.city} |</strong> </h1>}
        {<h5>Standard Private room | {data.city} | </h5>}
        <div id="five-images">
            <div >    <img src={data.image1} alt="" /></div>
            <div >
            <img src={data.image4} alt="" />
            <img src={data.image5} alt="" />
            <img src={data.image2} alt="" />
            <img src={data.image3} alt="" />
         
            </div>
        </div>
        {<h1> <strong>Private room hosted by| {data.host_name} |</strong> </h1>}
       <br />
        <hr />
     
        </div>           
    </div>)
}