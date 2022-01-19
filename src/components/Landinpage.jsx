import Navbar from "../css/Navbar.css"

export const Landingpage = () => {

    const limg = 'https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_w=1200';
    const Place_arr = [{image:"https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_" , name:"Rajasthan"} ,
    {image:"https://a0.muscache.com/im/pictures/85bff6ba-f4d0-4094-926e-a4fbc21bab4e.jpg?im_" , name:"Hyderabad"},
    {image:"https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_" , name:"Indore"},
    {image:"https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_" , name:"Bangalore"}

]

 return (

    <div>
         
         <div style={{width:"100%" ,backgroundColor:"black"}}>

         <div id='bgimg'>

             <button className="text-violet-800 text-sm text-bold py-3 bg-white px-5 rounded-full" > I'm flexible</button>
   
             </div>

         </div>

       
     <div className="w-10/12 m-auto mt-10">

     <h1 className="text-3xl font-bold" >Inspiration for your next trip</h1>

     <div className="flex w-12/12 m-auto gap-5 mt-5">

         {Place_arr.map((e) => (

               <div >
               <img className="rounded-t-2xl pb-4 bg-red-600" src={e.image} />
                <h2 className="text-2xl pt-1 pl-2 pb-20 bg-red-600 text-purple-50 rounded-b-2xl mb-10" >{e.name}</h2>
                </div>

         ))}

    
      </div>
     </div>

    </div>
 )

}