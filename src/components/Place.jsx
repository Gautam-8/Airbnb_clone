import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/Place.css"

export const  Place=()=>{
    const [data,setData]=useState({});
    let {_id}=useParams();
    console.log(_id);
    let [start,setStart]=useState(0);
    let [end,setEnd]=useState(0);
    let [price,setPrice]=useState(0);
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
                setPrice(data.price);

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
        <h5>{data.guest_size} guests {data.bedroom_size} bedroom {data.bed_size} bed size with private bathroom</h5>
        <br />
        <hr />
     <br />
            
           
        <div id="middle-data">
            <div>
            <div className="instruction">
                <h1>  <ion-icon name="shield-checkmark"></ion-icon> <strong>Enhanced Clean</strong> </h1>
                <p>This host has committed to Airbnb's 5-step enhanced cleaning process.</p>
            </div>
             <br />
            <div className="instruction">
                <h1>  <ion-icon name="checkmark-done-circle"></ion-icon> <strong>Self Check-in</strong> </h1>
                <p>You can check in with the doorperson.</p>
            </div>
            <br />
            <div className="instruction">
                <h1><ion-icon name="calendar"></ion-icon>  <strong>Free cancellation 2 days before starting date</strong> </h1>
            </div>
            <br />
            <hr />
            <br />
            <div className="instruction">
                <p>
                Our hostel in {data.city} is the town's coolest backpacker hostel where you can chill in our pool, watch the sunset from our cafe & gang up with others to explore {data.city}.
                </p>
                <br />
                <p>  A Standard Private Room with amenities like bedside lamps, lockers, 24 hours reception, Hot water facility, common hangout areas to chill with in-house travelers, Free wifi, cafe, and common television area to relax after a long day. For the ones traveling solo or group.
                </p>
                <br />
                <p><strong>Time Space</strong>
                <br />
                <br />
                The chilled vibes oozing from the city resonates perfectly with Our hostel in {data.city}- the only hostel in India with a swimming pool! Located close to the lake around which Pushkar is built, Our hostel manages to stay away from the hustle and offers a peaceful and relaxing stay.
                </p>
                </div>
                <br />
            
                </div>
                <div >
               <input type="date" />
               <input type="date" />
                </div>
                </div>
                <br />
                <hr />
                <br />
                <div className="instruction">
                <h1 style={{marginLeft:"100px"}}>  <strong>Where you'll sleep</strong>  </h1>
                <br />
                <img src={data.bedroom_image} alt="" />
             
                <h5 style={{marginLeft:"100px", marginTop:"10px", textDecoration :"none"}}><strong>Bedroom</strong> </h5>
            </div>
              
        </div>   
        <br />        
        <br />        
        <br />        
    </div>)
}