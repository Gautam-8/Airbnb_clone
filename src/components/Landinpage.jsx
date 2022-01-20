import "../css/Landingpage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Landingpage = () => {

    const Place_arr = [{image:"https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_" , name:"Manali"} ,
    {image:"https://a0.muscache.com/im/pictures/85bff6ba-f4d0-4094-926e-a4fbc21bab4e.jpg?im_" , name:"Hyderabad"},
    {image:"https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_" , name:"Pune"},
    {image:"https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_" , name:"Mumbai"}

]

 return (

    <div>
          <div className="w-full bg-black">
              <div id='bgimg'>
                <div className="text-center mt-96">

                <h1 className="text-4xl text-white mb-4">Not sure where to go? Perfect.</h1>
          <button className="text-violet-800 text-sm text-bold py-3 bg-white px-5 rounded-full mt-1" > I'm flexible</button>

                </div>
               
          </div>
         </div>

       
     <div className="w-10/12 m-auto mt-10">
      <h1 className="text-3xl font-bold" >Inspiration for your next trip</h1>

     <div className="flex w-12/12 m-auto gap-5 mt-5">

         {Place_arr.map((e) => (
            
               <div>
                 <Link to={`/city/${e.name}`}>
                 <img className="rounded-t-2xl pb-4 bg-red-600" src={e.image} alt={e.name}/>
                 <h2 className="text-2xl pt-1 pl-2 pb-20 bg-red-600 text-purple-50 rounded-b-2xl mb-10" >{e.name}</h2>
                 </Link>
               </div>

         ))}
       </div>
     </div>

    <div>
        
    </div>

<div className="w-10/12 m-auto mt-2">

<h1 className="text-3xl font-bold mb-5" >Discover Airbnb Experiences</h1>

     <div className="flex w-12/12 m-auto gap-5">

        <div id='bgimge1'>
           
           <h1 className="text-5xl text-white">Things to do on your trip</h1>

         </div>

         <div id='bgimge2'>
         <h1 className="text-5xl text-white">Things to do from home</h1>

         </div>
 </div>
 </div>

 {/* footer */}

  
    </div>
 )

}