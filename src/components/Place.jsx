import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/Place.css"

export const Place = () => {

    const [data, setData] = useState({});
    let { _id } = useParams();
    let [start, setStart] = useState(0);
    let [end, setEnd] = useState(0);
    let [day, setDay] = useState();
    useEffect(() => {
        getData();
    }, []);
    useEffect(()=>{
if(end && start){
    let date1=start.split("-");
                                    let date2=end.split("-");
                                   let  tempdate3=""+date1[1]+"/"+date1[2]+"/"+date1[0];
                                   console.log(tempdate3);
                                    let dt1=new Date(tempdate3);
                                    tempdate3=""+date2[1]+"/"+date2[2]+"/"+date2[0];
                                    let dt2=new Date(tempdate3);
                                    console.log(tempdate3);
                                    let  dif=Number(dt2.getTime())-Number(dt1.getTime());
                                    let tempdays=(dif)/(1000*3600*24)
                                    setDay(tempdays);
                                    console.log(day)

}
    },[end,start])
    async function getData() {
        let tempData = await fetch(`https://airbnb-fw12.herokuapp.com/hotel/`)
            .then((tempData) => tempData.json())
        let tempData2 = tempData.filter((temp) => {
            return (":" + temp._id) == _id.toString();
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
                <div id="proceed" >
                    <h2> <strong>₹{data.price}</strong> /night</h2>
                    <br />
                    <div style={{ border: "1px solid #969696", borderRadius: "10px" }}>

                        <div className="dates">
                            <p>Check-in</p>

                            <p>Check-out</p>
                        </div>
                        <hr />
                        <div className="dates">

                            <input type="date" onChange={(e) => {
                                setStart(e.target.value)
                               
                            }} />
                            <input type="date" onChange={(e) => {
                                setEnd(e.target.value)
                              
                            }} /></div>
                        <hr />
                        <select name="Guest" id="">Select Guest
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                        </select>
                    </div>
                    <button>{day ? day<0?"Select a valid Date":<Link to={`/payment`} >RESERVE</Link>:("Select Date Range") }</button>
                    <p style={{ color: "#969696" }}>You won't be charged yet</p>
                   {day>0?<div> <div className="prices" >
                        <p>₹{data.price} x {day}nights </p>
                        <p>₹{day*data.price}</p>
                    </div>
                    <div className="prices" >
                        <p>Service fee </p>
                        <p>₹2499</p>
                    </div>
                    <hr />
                    <div className="prices" >
                        <h2><strong>Total before taxes</strong></h2>
                        <h2><strong>₹{2499+(data.price*day)}</strong></h2>
                    </div></div>:""}
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="bedroom">
                <div>
                <h1 style={{ marginLeft: "100px"}}>  <strong>Where you'll sleep</strong>  </h1>
                <br />
                <img src={data.bedroom_image} alt="" />

                <h5 style={{ marginLeft: "100px", marginTop: "10px", textDecoration: "none" }}><strong>Bedroom</strong> </h5>
    
                </div>
                <div className="bedroom-ptag">
                   
                    <div>
                    <h1><strong>What this place offers</strong></h1>
                        <h3><ion-icon name="wifi-outline"></ion-icon> Wifi</h3>
                        <h3><ion-icon name="bonfire-outline"></ion-icon> Dryer</h3>
                        <h3><ion-icon name="flower-outline"></ion-icon> Garden </h3>
                        <h3><ion-icon name="book-outline"></ion-icon> Children’s books </h3>
                        <h3><ion-icon name="logo-no-smoking"></ion-icon> No smoking</h3>
                    </div>
                    <div>
                        <br></br>
                        <h3><ion-icon name="car-outline"></ion-icon> Parking on-street </h3>
                        <h3><ion-icon name="medkit-outline"></ion-icon> First Aid Kit</h3>
                        <h3><ion-icon name="thermometer-outline"></ion-icon> Thermometer</h3>
                        <h3><ion-icon name="shirt-outline"></ion-icon> One T-Shirt</h3>
                        <h3><ion-icon name="notifications-off-circle-outline"></ion-icon> Alarm is Prohabited</h3>
                    </div>
                    </div>        
            </div>
        </div>
        
    </div>)
}

