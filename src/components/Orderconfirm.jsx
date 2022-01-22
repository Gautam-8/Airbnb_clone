import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import { order_Success } from "../reducers/reducer/action";
import loading_gif from "../images/spinning-loading.gif";

export const Order = () => {

    const lastline = "© 2022 Airbnb, Inc.·Privacy·Terms·Sitemap·Company details";
    const lastline1 = "English (IN)  ₹ INR";
    const socialLogo = ['https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-128.png',
  'https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-128.png',
  'https://cdn3.iconfinder.com/data/icons/picons-social/57/78-instagram-128.png']
    let {Oid}=useParams();
    const [thank , setThank] = useState({});

    const dispatch = useDispatch();

    const OrderData = () => {

        setTimeout(() => {

            axios.get(`https://airbnb-fw12.herokuapp.com/hotel/${Oid}`)
            .then((res) => { setThank(res.data); dispatch(order_Success())})
            .catch((err) => console.log(err))

        } , 1000)
      
    }

    useEffect(() => {
       OrderData();
 } , [])

    const navigate = useNavigate();

    const orderLoading = useSelector((state) => state.order);

    if(orderLoading === true) {
        return (
            <div>
                <div className="h-20"></div>
            
         <img className="m-auto" src={loading_gif} alt="loading"/>

            </div>
         
        )
    }

    if(orderLoading === false ){
        setTimeout(() => navigate('/trips') , 5000)
    }

    return(

 <div>
<div className="h-20"></div>


 <div className="flex w-8/12 m-auto mt-7 border border-solid border-gray-400 rounded-2xl p-5">

    <div className="w-7/12 text-justify ml-5">
    <h1 className="text-3xl mt-5 text-red-500 animate-bounce ml-0">Booking Confirmed !</h1>
    <h3 className="mt-2">Host : {thank.host_name}</h3>
    <h3>{thank.city} , {thank.state}</h3>
  

   <button onClick={() => navigate('/trips')} className="p-2 px-3 text-sm rounded-md text-center mt-5 bg-red-600 text-white">Continue</button>
    </div>
 
 <div className="w-6/12">
 <img className="mt-4 rounded-3xl w-6/12 m-auto" src={thank.image1} alt=""/>
 </div>
         
</div>

<img className="w-2/12 m-auto" src={'https://www.icegif.com/wp-content/uploads/icegif-1436.gif'}/>
 <div className="m-auto bg-gray-100 flex justify-evenly pb-10 text-xs tracking-wide pt-5">

{lastline} 

<div className="flex justify-center">

<svg className="w-4 h-4 ml-6 mr-2" ><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>

{lastline1}

</div>

<div className="flex gap-2">

{socialLogo.map((e) =><img className="w-5 h-5" key={e} src={e} alt=""/> )}

</div>

</div>

        </div>
    )
}