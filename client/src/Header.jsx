import { Link } from "react-router-dom"

function Header(){
    return(
        <div class= "md:max-xl:flex">
        <header className=' flex justify-between'>
          <Link to={'/'} href="" className='flex items-center ml-14 gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
      <span className='font-bold text-3xl font-size-5xl '>Guesthub</span>
          </Link>
          <div className=' flex-center  ml-80 mr-70 flex gap-2 border border-gray-300 rounded-full py-3 px-12 shadow-md shadow-purple-500 '>
  <div>AnyWhere</div>
  <div className='border border-l border-purple-300'></div>
  <div>Any Week</div>
  <div className='border border-l border-purple-300'></div>
  <div>Add Guest </div>
  <button className='bg-black text-white p-0 rounded-full'>
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  </button></div>
  <div className="ml-80 mt-3 ">
         <Link to={'/account/places/new'} className=" border border-gray-300 rounded-full py-3  px-4 shadow shadow-blue-500">Become a host</Link>
         </div>
         
          <Link to={'/login'} className='flex items-center mr-6 gap-2 border border-gray-300 rounded-full py-2 px-4 shadow shadow-blue-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <div className='bg-gray-900  text-white rounded-full border border-gray-500 '>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative">
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
      </svg>
      </div>
          </Link>
        
       
        </header>
       </div>

    )
}

export default Header