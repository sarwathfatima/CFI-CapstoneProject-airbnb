import { Link } from "react-router-dom"
function AccountPage(){
return(
    <>
    <div>
    <div className="w-full mt-8 flex justify-center gap-10">
        <Link className="bg-gray-400 px-7 py-2 mb-2 text-white rounded-3xl shadow shadow-purple-500 inline-flex gap-1" to={'/account'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>profile</Link>
 
 <Link className="bg-gray-900 text-white mb-1 py-2 px-6 rounded-full shadow shadow-purple-500 inline-flex gap-1" to={'/account/places/new'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>
 Add new places</Link>
            
    </div>
  
      </div>
    </>
)
}
export default AccountPage