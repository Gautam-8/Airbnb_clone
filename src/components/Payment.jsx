import axios from "axios"
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { pp_Loading } from "../reducers/reducer/action";
import loading_gif from "../images/spinning-loading.gif"

export const Payment = () => {

    let {day,_id}=useParams();
    let id = _id.split('');
    id.shift('');
    id=id.join('');
    day = Number(day);
    //console.log(id,day);

    const [temp,setTemp] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.p_Loading);
   

     const paymentData = () => {

        axios.get(`https://airbnb-fw12.herokuapp.com/hotel/${id}`)
        .then((res) => { setTemp(res.data); dispatch(pp_Loading()) })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        paymentData();
    } , [])

       const lastline = "© 2022 Airbnb, Inc.·Privacy·Terms·Sitemap·Company details";
       const lastline1 = "English (IN)  ₹ INR";
       const socialLogo = ['https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-128.png',
                                 'https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-128.png',
                                'https://cdn3.iconfinder.com/data/icons/picons-social/57/78-instagram-128.png']


       const Cancellation = 'Free cancellation before the day of checkout. get a full refund, minus the first night and service fee.'
       const covid = 'Our Extenuating Circumstances policy does not cover travel disruptions caused by COVID-19';

       const [form ,setForm] = useState({});

       const handleChange = (e) => {

        let { value , name } = e.target;
          setForm({
              ...form,
              [name] : value
          });
   
       }

       const handleClick = () => {
        
        console.log(form)

       }

       if(loading === true) {
           return (
               <div>
                   <div className="h-20"></div>
               
            <img className="m-auto" src={loading_gif} alt="loading"/>

               </div>
            
           )
       }

    return (

        <>
    
         <div className="h-20"></div>

         <div className="w-9/12 m-auto flex mt-10">

         <div className="w-6/12">
            <h1 className="text-2xl font-semibold" >Confirm and pay</h1>
            <h3 className="text-lg font-semibold mt-5">Your trip</h3>

            <div>
                <h4 className="text-sm">Stay : {day} { day === 1 ? 'night' : "nights"}</h4>
            </div>
            <hr className="border-1 border-gray-300 mt-10 mb-5" />

            <div className="text-lg font-semibold">Pay with <h4 className="text-sm">CARDS (CREDIT/DEBIT)</h4></div>

            <h4 className="mt-5">Card</h4>

            <input onChange={handleChange} name="cardNumber" type='number' placeholder="Enter Card Number" className="rounded-lg  mt-2 w-8/12 h-10 text-xs border-2 border-gray-300 border-solid text-center"/>

            <div className="flex">
             
             <div>
             <h4 className="mt-5">Expiry</h4>
             <input onChange={handleChange} name='expiry' placeholder="MM/YY" className="rounded-lg mt-2 w-12/12 h-10 text-xs border-2 border-gray-300 border-solid text-center"/>
             </div>
          
             <div className="ml-4">
             <h4 className="mt-5">CVV</h4>
             <input onChange={handleChange} name='cvv' type='number' placeholder="Enter CVV" className="rounded-lg mt-2 w-12/12 h-10 text-xs border-2 border-gray-300 border-solid text-center"/> 
             </div>

            </div> 

            <h4  className="mt-5">Name on Card</h4>

           <input onChange={handleChange} name='name' placeholder="Enter name as on card" className="rounded-lg mt-2 w-8/12 h-10 text-xs border-2 border-gray-300 border-solid text-center"/>

           <hr className="border-1 border-gray-300 mt-10 mb-5" />
       
            <h3 className="text-lg font-semibold">Cancellation policy</h3>

            <p className="text-xs mt-5 text-justify">{Cancellation}</p>
            <p className="text-sm underline font-semibold" >Learn more</p>
            
            <p className="text-xs mt-5 text-justify">{covid}</p>
            <p className="text-sm underline font-semibold" >Learn more</p>

            <hr className="border-1 border-gray-300 mt-10 mb-5" />

         <p className=" text-xs">By selecting the button below, I agree to the Host's House Rules, Airbnb's COVID-19 Safety Requirements and the Guest Refund Policy.</p>
           
           <button onClick={handleClick} className="p-2 px-3 text-sm rounded-md text-center mt-5 bg-red-600 text-white">Confirm and pay</button>

       </div>



       <div className="ml-5 mt-12">

    <div className="border-solid border-gray-300 border rounded-xl  ml-14 w-4/12 fixed">
       <div className="flex w-12/12 p-4">
           
           <img src={temp.image1} className="w-3/12 h-20 rounded" alt=""/>
           <div className="text-xs ml-2">
           <p className="mt-1">{temp.title}</p>
            <div className="mt-4 flex">
                <p className="mr-2 font-semibold" >
                <ion-icon name="star"></ion-icon>
                {temp.ratings}</p> ({temp.reviews})</div>
           </div>
  
       </div>

       <hr className="border-1 border-gray-300 w-11/12 m-auto" />

       <div className="w-12/12 p-4 tracking-wide">
       <h3 className="text-lg font-semibold mb-3">Price details</h3>

       <div className="flex justify-between mt-1">
            <p className="text-xs">{'₹'+ temp.price } x { day + (day === 1 ? "night" : 'nights')}</p> <p className="text-sm">₹ {temp.price * day}</p>
      </div>

       <div className="flex justify-between mt-1"> 
       <p className="text-xs">Service fee</p> <p className="text-sm">₹ {Math.round(temp.price * .12 * day)}</p>
       </div>

       <div className="flex justify-between mt-1"> <p className="text-xs">Occupancy taxes and fees</p>
        <p className="text-sm">₹ {Math.round(temp.price * .1 * day)}</p>
        </div>

       <div className="flex justify-between mt-1"> 
       <p className="text-xs font-semibold">Total (INR)</p> 
       <p className="text-sm font-bold">₹ {Math.round(temp.price * .1 + temp.price * .12 + temp.price * day) }</p>
       </div>

       </div>

       </div>
       </div>

    </div>



<div className="m-auto bg-gray-100 flex justify-evenly pb-5 text-xs tracking-wide pt-5 mt-20">

{lastline} 

<div className="flex justify-center">

<svg className="w-4 h-4 ml-6 mr-2" ><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>

{lastline1}

</div>

<div className="flex gap-2">

{socialLogo.map((e) =><img className="w-5 h-5" key={e} src={e} alt=""/> )}

</div>

</div>

   </>
    
    )
}