import axios from "axios"
import { useEffect } from 'react'

export const Payment = () => {

// const paymentData = () => {

//         let id = '61e7f961b308ed322fe640df';

//         axios.get(`https://airbnb-fw12.herokuapp.com/hotel/${id}`)
//         .then((res) => console.log(res.data));
//     }

//     useEffect(() => {
//         paymentData();
//     } , [])
const lastline = "© 2022 Airbnb, Inc.·Privacy·Terms·Sitemap·Company details";
const lastline1 = "English (IN)  ₹ INR";
const socialLogo = ['https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-128.png',
'https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-128.png',
'https://cdn3.iconfinder.com/data/icons/picons-social/57/78-instagram-128.png']

const temp = {
    "_id": "61e7f961b308ed322fe640df",
    "id": 4,
    "title": "Comfortable ensuite room in Penthouse, Bandra West",
    "image1": "https://a0.muscache.com/im/pictures/d3a335e3-7814-4ed6-96d7-34efd06c72f0.jpg?im_w=960",
    "image2": "https://a0.muscache.com/im/pictures/60841228-912f-4efa-9242-45a4b9741b24.jpg?im_w=720",
    "image3": "https://a0.muscache.com/im/pictures/36cddef9-d829-48f4-bc3a-baa8309015e2.jpg?im_w=1200",
    "image4": "https://a0.muscache.com/im/pictures/16a98b96-32d9-4e1b-b271-1f5b9395e133.jpg?im_w=1200",
    "image5": "https://a0.muscache.com/im/pictures/d5526394-7ceb-4f0c-9948-6fd34fa71a46.jpg?im_w=720",
    "bathroom_image": "https://a0.muscache.com/im/pictures/0b02f4a5-e35e-411b-978e-73812a08dad1.jpg?im_w=720",
    "bedroom_image": "https://a0.muscache.com/im/pictures/09c83867-c364-41fb-be65-17a5c830d84a.jpg?im_w=720",
    "host_name": "Aftab & Nazia",
    "ratings": 4.88,
    "reviews": "165 reviews",
    "location": "West Mumbai, Maharashtra, India",
    "city": "Mumbai",
    "state": "Maharashtra",
    "price": 2530,
    "discounted_price": 2339,
    "about": "Decorated with simple white interior and furniture. Clean and neat room. Small but comfortable bath area with all the basics in place. Big window and open view of outside. Sufficient sunlight and well lit at night. Basic provision for tea coffee available. Clean Towels provided. Fresh sheets and bedding done. You will enjoy your stay here with nice local breakfast of poha by host staying next door.",
    "guest_size": 3,
    "bedroom_size": 1,
    "bed_size": 1,
    "bathroom_size": 1
}

const Cancellation = 'Free cancellation before the day of checkout. get a full refund, minus the first night and service fee.'
const covid = 'Our Extenuating Circumstances policy does not cover travel disruptions caused by COVID-19';

    return (

        <>
         <div className="h-20"></div>

         <div className="w-9/12 m-auto flex mt-10">

         <div className="w-6/12">
            <h1 className="text-2xl font-semibold" >Confirm and pay</h1>
            <h3 className="text-lg font-semibold mt-5">Your trip</h3>

            <div>
                <h4 className="text-sm">Dates</h4>
            </div>
            <hr className="border-1 border-gray-300 mt-10 mb-5" />

            <h3 className="text-lg font-semibold">Pay with <h4 className="text-sm">CARDS (CREDIT/DEBIT)</h4></h3>

            <h4 className="mt-5">Card</h4>

            <input placeholder="Enter Card Number" className="mt-2 w-8/12 h-10 text-xs border-2 border-gray-300 border-solid text-center"/>

            <div className="flex">
             
             <div>
             <h4 className="mt-5">Expiry</h4>
             <input placeholder="MM/YY" className="mt-2 w-12/12 h-10 text-xs border-2 border-gray-300 border-solid text-center"/>
             </div>
          
             <div className="ml-4">
             <h4 className="mt-5">CVV</h4>
             <input placeholder="Enter CVV" className="mt-2 w-12/12 h-10 text-xs border-2 border-gray-300 border-solid text-center"/> 
             </div>

            </div> 

            <h4 className="mt-5">Name on Card</h4>

           <input placeholder="Enter name as on card" className="mt-2 w-8/12 h-10 text-xs border-2 border-gray-300 border-solid text-center"/>

           <hr className="border-1 border-gray-300 mt-10 mb-5" />
       
            <h3 className="text-lg font-semibold">Cancellation policy</h3>

            <p className="text-xs mt-5 text-justify">{Cancellation}</p>
            <p className="text-sm underline font-semibold" >Learn more</p>
            
            <p className="text-xs mt-5 text-justify">{covid}</p>
            <p className="text-sm underline font-semibold" >Learn more</p>

            <hr className="border-1 border-gray-300 mt-10 mb-5" />

         <p className=" text-xs">By selecting the button below, I agree to the Host's House Rules, Airbnb's COVID-19 Safety Requirements and the Guest Refund Policy.</p>
           
           <button className="p-2 px-3 text-sm rounded-md text-center mt-5 bg-red-600 text-white">Confirm and pay</button>

       </div>



       <div className="ml-5 mt-12">

    <div className="border-solid border-gray-300 border rounded-xl  ml-14 w-4/12 fixed">
       <div className="flex w-12/12 p-4">
           
           <img src={temp.image1} className="w-3/12 h-20 rounded" alt=""/>
           <div className="text-xs ml-2">
           <p className="mt-1">{temp.title}</p>
            <p className="mt-4 flex"><p className="mr-2 font-semibold" >{temp.ratings}</p> ({temp.reviews})</p>
           </div>
  
       </div>

       <hr className="border-1 border-gray-300 w-11/12 m-auto" />

       <div className="w-12/12 p-4">
       <h3 className="text-lg font-semibold mb-3">Price details</h3>

       <h4 className="flex justify-between mt-1">
            <p className="text-xs">Discounted price</p> <p className="text-sm">₹ {temp.price}</p>
      </h4>

       <h4 className="flex justify-between mt-1"> 
       <p className="text-xs">Service fee</p> <p className="text-sm">₹ {Math.round(temp.price * .12)}</p>
       </h4>

       <h4 className="flex justify-between mt-1"> <p className="text-xs">Occupancy taxes and fees</p>
        <p className="text-sm">₹ {Math.round(temp.price * .1)}</p>
        </h4>

       <h4 className="flex justify-between mt-1"> 
       <p className="text-xs font-semibold">Total (INR)</p> 
       <p className="text-sm font-bold">₹ {Math.round(temp.price * .1 + temp.price * .12 + temp.price) }</p>
       </h4>

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