import "../css/Landingpage.css"

export const Landingpage = () => {

    const Place_arr = [{image:"https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_" , name:"Rajasthan"} ,
    {image:"https://a0.muscache.com/im/pictures/85bff6ba-f4d0-4094-926e-a4fbc21bab4e.jpg?im_" , name:"Hyderabad"},
    {image:"https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_" , name:"Indore"},
    {image:"https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_" , name:"Bangalore"}

]

const footer_d1 = ["Help Centre" , "Safety information" , 'Our COVID-19 Response','Cancellation options','Supporting people with disabilities','Report a neighbourhood concern' ];
const footer_d2 = ['Airbnb.org: disaster relief housing' ,'Support Afghan refugees' ,'Celebrating diversity & belonging','Combating discrimination'];
const footer_d3  = ['Try hosting','AirCover: protection for Hosts','Explore hosting resources','Visit our community forum','How to host responsibly'];
const footer_d4 = ['Newsroom' ,'Learn about new features','Letter from our founders','Careers','Investors','Airbnb Luxe'];

const lastline = "© 2022 Airbnb, Inc.·Privacy·Terms·Sitemap·Company details";
const lastline1 = "English (IN)  ₹ INR"

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
               <img className="rounded-t-2xl pb-4 bg-red-600" src={e.image} alt={e.name}/>
                <h2 className="text-2xl pt-1 pl-2 pb-20 bg-red-600 text-purple-50 rounded-b-2xl mb-10" >{e.name}</h2>
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

    <div className="flex justify-center gap-20 mt-10 pb-10 bg-gray-100">

         <div>
             <h3 className="text-sm font-bold mt-5 mb-5">Support</h3>
           {footer_d1.map((e) => <h4 className="text-xs mt-2 mb-2 opacity-95">{e}</h4>)}

         </div>

         <div>
             <h3 className="text-sm font-bold mt-5 mb-5">Community</h3>
           {footer_d2.map((e) => <h4 className="text-xs mt-2 mb-2 opacity-95">{e}</h4>)}

         </div>

         <div>
             <h3 className="text-sm font-bold mt-5 mb-5">Hosting</h3>
           {footer_d3.map((e) => <h4 className="text-xs mt-2 mb-2 opacity-95">{e}</h4>)}

         </div>

         <div>
             <h3 className="text-sm font-bold mt-5 mb-5">About</h3>
           {footer_d4.map((e) => <h4 className="text-xs mt-2 mb-2 opacity-95">{e}</h4>)}

         </div>

     </div>

     <hr className="w-full  border-gray-300  border-solid" />

     <div className="m-auto bg-gray-100 flex justify-evenly pb-5 text-xs tracking-wide pt-5">
       
       {lastline} 

<div className="flex justify-center">

<svg className="w-4 h-4 ml-6 mr-2" ><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
        
        {lastline1}

</div>
       
<div className="flex gap-2">
            <img className="w-5 h-5" src={'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-128.png'} alt=""/>
      <img className="w-5 h-5" src={'https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-128.png'} alt=""/>
      <img className="w-5 h-5" src={'https://cdn3.iconfinder.com/data/icons/picons-social/57/78-instagram-128.png'} alt=""/>

</div>
    
         
     </div>

    </div>
 )

}