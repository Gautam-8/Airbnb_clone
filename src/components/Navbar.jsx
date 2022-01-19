import airbnb from "../images/airbnbimgg.png"
import burger from "../images/burger.png"

export const Navbar = () => {

      return(

        <div className="fixed w-full bg-white">

        <div className="p-4 flex justify-around border-b-2 border-solid  border-violet-50 z-100">

         <img src={airbnb} className="w-20 h-6 mr-20px"/>
        
         <div className="flex w-7/12 justify-evenly">
           <div className="flex w-4/12 justify-center border-violet-100 border-2 border-solid rounded-full ">

           <input id="search-input" type='text' placeholder="Start your search here" className="rounded-full text-xs text-semibold w-12/12 h-7 mr-1"/>
           <img className="h-6 rounded-full mt-1" src="data:image/png;base64,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"/>
            
           </div>
         
             </div>


       <div className="flex items-center">
    
       <svg className="w-4 h-4"><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>

       <button className="ml-4 border-2 border-solid border-indigo-50 rounded-full px-2 py-1">

<div className="flex items-center">

<img className="w-4 h-4" src={burger} />
  <img className="w-6 rounded-full ml-1"  src={"https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"} />
</div>

</button>
           </div> 


        </div>
        </div>
      )
}