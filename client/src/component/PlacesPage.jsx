import { useState } from "react"
import { Link } from "react-router-dom"
import Perks from "./Perks"
import axios from "axios"

function PlacesPage(){
const [title,setTitle] = useState('');
const [address,setAddress] = useState('');
const [addedPhotos,setAddedPhotos] = useState([]);
const [photoLink,setPhotoLink] = useState('');
const [Description,setDescription] = useState('');
const [perks,setPerks] = useState('');
const [extraInfo,setExtraInfo] = useState('');
const [maxGuests,setMaxGuests] = useState(1);
const [price,setPrice] = useState(100);
async function addPhotoByLink(event){
  event.preventDefault();
  const {data:filename} = await axios.post('http://localhost:5001/api/admin/upload-by-link',{link:photoLink})
  setAddedPhotos(prev=>{
    return [...prev,filename]
  })
  setPhotoLink('')
}
function uploadPhoto(event){
  const files =event.target.files;
  console.log({files})
}
    return(
        <div>
    <nav className="w-full mt-8 flex justify-center gap-10">
        <Link className="bg-gray-400 px-7 py-2 mb-2 text-white rounded-3xl shadow shadow-purple-500 inline-flex gap-1" to={'/account'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>profile</Link>
        <Link className='bg-gray-900 px-6 py-2 mb-1 text-white rounded-3xl shadow shadow-purple-500 inline-flex gap-1' to={'/account/places'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>
 accomodations</Link>      
    </nav>
    <div>
      <form className="justify-center w-3/5 mx-40 pl-16">
        <h2 className="text-2xl font-bold mt-4 ">Title</h2>
        <input type="text" className="shadow shadow-purple-500" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title" />
        <h2 className="text-2xl font-bold mt-4">Address</h2>
        <input type="text" className="shadow shadow-purple-500" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="address"/>
         <h2 className="text-2xl font-bold mt-4">Photos</h2>
         {/* < addedPhotos={addedPhotos} onChange={setAddedPhotos} /> */}
         <div className="flex gap-2">
            <input type="text" value={photoLink} className="shadow shadow-purple-500"
                   onChange={ev => setPhotoLink(ev.target.value)} placeholder={'Add using a link'}/>
            <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl">Add</button>
         </div>

        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {addedPhotos.length > 0 && addedPhotos.map(link=>{
            <div>
             <img className="rounded-2xl" src= {'http://localhost:5001/uploads'+link} alt="" ></img>
            </div>
          })}
            <label className="cursor-pointer flex items-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600 font-semibold flex justify-center gap-2" onChange={uploadPhoto}>
              <input type="file" className="hidden"/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
Upload</label>
        </div >
        <h2 className="text-2xl font-bold mt-4">Description</h2> 
        <textarea value={Description} onChange={ev => setDescription(ev.target.value)} className="w-full border my-1 py-2 px-3 rounded-2xl  shadow shadow-purple-500"/>
       <Perks selected={perks} onChange={setPerks}/>
       <h2 className="text-2xl font-bold mt-4">Extra info</h2>
       <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} className="w-full border my-1 py-2 px-3 rounded-2xl  shadow shadow-purple-500"/>
       <h2 className="text-2xl font-bold mt-4"> Guests </h2>
       <div className="grid gap-2 sm:grid-cols-3">
        <input type="text" value={maxGuests} className=" shadow shadow-purple-500"
                   onChange={ev => setMaxGuests(ev.target.value)} placeholder={'Number of guests'}/>
       </div>
       <h2 className="text-2xl font-bold mt-4">Price </h2>
       <div className="grid gap-2 sm:grid-cols-3">
       <input type="text" value={price} className=" shadow shadow-purple-500"
                   onChange={ev => setPrice(ev.target.value)} placeholder={'Price'}/>
       </div>
      <center>
      <button className="w-4/5 justify-center bg-gray-900 px-6 py-2 mt-4 mb-1 text-white rounded-3xl shadow shadow-purple-500 inline-flex gap-1 ">Save</button>
      </center>
      </form>
   </div>
      </div>
    )}
    
export default PlacesPage;

