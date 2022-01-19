import airbnb from "../images/airbnbimgg.png"
import burger from "../images/burger.png"
import searchicon from "../images/searchiconredbg.png"
import signinicon from "../images/signinicon.png"

export const Navbar = () => {

      return(

        <div className="fixed w-full bg-white">

        <div className="p-4 flex justify-around border-b-2 border-solid  border-violet-50 z-100">

         <img src={airbnb} className="w-20 h-6 mr-20px"/>
        
         <div className="flex w-7/12 justify-evenly">
           <div className="flex w-4/12 justify-center border-violet-100 border-2 border-solid rounded-full ">

           <input id="search-input" type='text' placeholder="Start your search here" className="rounded-full text-xs text-semibold w-12/12 h-7 mr-1"/>
           <img className="h-6 rounded-full mt-1" src={searchicon}/>
            
           </div>
         
             </div>


       <div className="flex items-center">
    
       <svg className="w-4 h-4">
         <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
         </svg>

       <button className="ml-4 border-2 border-solid border-indigo-50 rounded-full px-2 py-1">

<div className="flex items-center">

<img className="w-4 h-4" src={burger} />
  <img className="w-6 rounded-full ml-1"  src={signinicon} />
</div>

</button>
           </div> 


        </div>
        </div>
      )
}