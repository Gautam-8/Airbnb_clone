import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/City.css"
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
    return (<div id="city">
             <div id="places">
                
             {data.map((ele)=>{
            console.log(ele);

           return  <div className="single-place">
                  {/* {_id,title,bedroom_image,ratings,reviews,price}  */}
                  <h3><strong>{ele.city}</strong></h3>
                  <img src={ele.bedroom_image} alt=""  />
                <ion-icon name="star"></ion-icon>
                <span>{ele.ratings} ({ele.reviews})</span>
                <h5><Link to={`/id/:${ele._id}`} >{ele.title}</Link></h5>
                <h3><strong>₹{ele.price}</strong> /night </h3>
            </div> 
                })
        }
           
           {data.map((ele)=>{
            console.log(ele);

           return  <div className="single-place">
                  {/* {_id,title,bedroom_image,ratings,reviews,price}  */}
                  <h3><strong>{ele.city}</strong></h3>
                  <img src={ele.bedroom_image} alt=""  />
                <ion-icon name="star"></ion-icon>
                <span>{ele.ratings} ({ele.reviews})</span>
                <h5><Link to={`/id/:${ele._id}`} >{ele.title}</Link></h5>
                <h3><strong>₹{ele.price}</strong> /night </h3>
            </div> 
                })
        }
           
           {data.map((ele)=>{
            console.log(ele);

           return  <div className="single-place">
                  {/* {_id,title,bedroom_image,ratings,reviews,price}  */}
                  <h3><strong>{ele.city}</strong></h3>
                  <img src={ele.bedroom_image} alt=""  />
                <ion-icon name="star"></ion-icon>
                <span>{ele.ratings} ({ele.reviews})</span>
                <h5><Link to={`/id/:${ele._id}`} >{ele.title}</Link></h5>
                <h3><strong>₹{ele.price}</strong> /night </h3>
            </div> 
                })
        }
          
         
        </div>
           
    </div>)
}