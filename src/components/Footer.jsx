export const Footer = () => {

const footer_d1 = ["Help Centre" , "Safety information" , 'Our COVID-19 Response','Cancellation options','Supporting people with disabilities','Report a neighbourhood concern' ];
const footer_d2 = ['Airbnb.org: disaster relief housing' ,'Support Afghan refugees' ,'Celebrating diversity & belonging','Combating discrimination'];
const footer_d3  = ['Try hosting','AirCover: protection for Hosts','Explore hosting resources','Visit our community forum','How to host responsibly'];
const footer_d4 = ['Newsroom' ,'Learn about new features','Letter from our founders','Careers','Investors','Airbnb Luxe'];

const lastline = "© 2022 Airbnb, Inc.·Privacy·Terms·Sitemap·Company details";
const lastline1 = "English (IN)  ₹ INR";

    return (

<div >
    <div className="h-10"></div>

<div className="flex justify-center gap-20 mt-14 pb-10 bg-gray-100">

<div>
    <h3 className="text-sm font-bold mt-5 mb-5">Support</h3>
  {footer_d1.map((e) => <h4 key={e} className="text-xs mt-2 mb-2 opacity-95">{e}</h4>)}

</div>

<div>
    <h3 className="text-sm font-bold mt-5 mb-5">Community</h3>
  {footer_d2.map((e) => <h4 key={e} className="text-xs mt-2 mb-2 opacity-95">{e}</h4>)}

</div>

<div>
    <h3 className="text-sm font-bold mt-5 mb-5">Hosting</h3>
  {footer_d3.map((e) => <h4 key={e} className="text-xs mt-2 mb-2 opacity-95">{e}</h4>)}

</div>

<div>
    <h3 className="text-sm font-bold mt-5 mb-5">About</h3>
  {footer_d4.map((e) => <h4 key={e} className="text-xs mt-2 mb-2 opacity-95">{e}</h4>)}

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