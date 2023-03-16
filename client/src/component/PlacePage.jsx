
import { Navigate } from "react-router-dom";
import axios from "axios";
import { differenceInCalendarDays } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function PlacePage(){
    const {id}= useParams();
    const [place,setPlace] = useState()
    const [showAllPhotos,setShowAllPhotos] = useState()
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [numberOfGuests,setNumberOfGuests] = useState(1);
    const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [redirect,setRedirect] = useState('');
    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get(`/api/admin/place/${id}`).then(response =>{
            setPlace(response.data)
        })
    },[id])
    if (!place) return '';

    if(showAllPhotos){
        return(
            <div className="absolute inset-0 bg-white min-h-screen">
                <div className="p-8 grid gap-4">
                    <button onClick={() => setShowAllPhotos(false)} className="fixed flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black">Close Photos</button>
                {place?.photos?.length > 0 && place.photos.map(photo =>(
                    <div>
                        <img src={photo} alt=""></img>
                    </div>
                ) )}
                </div>

               </div>
        )
    }
    let numberOfNights = 0;
    if (checkIn && checkOut) {
      numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }

    async function bookThisPlace() {
        const response = await axios.post('/api/admin/booking', {
          checkIn,checkOut,numberOfGuests,name,phone,
          place:place._id,
          price:numberOfNights * place.price,
        });
        const bookingId = response.data._id;
        setRedirect(`/account/bookings/${bookingId}`);
      }
    
      if (redirect) {
        return <Navigate to={redirect} />
      }
    return(
        <div className="mt-8 p-7 shadow shadow-md shadow-gray-900">
            <h1 className="text-3xl">{place.title}</h1>
            <a className="flex p-1 my-2 block font-semibold underline" target="_blank" href={'https://maps.google.com/?='+ place.address}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
{place.address}</a>
            <div className="relative ">
            <div className="grid gap-1 grid-cols-[2fr_1fr] mt-5 overflow-hidden">
            <div>
                {place.photos?.[0] && (
                    <div>
                        <img  className="aspect-square object-cover overflow-hidden" src={place.photos?.[0]} alt=""/>
                    </div>

                )}
            </div>
            <div className="grid gap-2">
                {place.photos?.[1] && (
                    <img  className="aspect-square object-cover overflow-hidden" src={place.photos?.[1]} alt=""/>


                )}
                <div className="overflow-hidden">
                {place.photos?.[2] && (
                    <img  className="aspect-square object-cover overflow-hidden" src={place.photos?.[2]} alt=""/>


                )}
                </div>
                {/* <button onClick={() => setShowAllPhotos } className="absolute bottom-2 right-12 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">Show more photos</button> */}
            </div>
            </div>
            </div>
           
            <div className="grid grid-cols-[2fr_1fr]">
                
            <div>
            <div className="my-7 px-7">
                <h2 className="font-semibold text-2xl">Description</h2>
                {place.description}
               
            </div >
                    <div className="mt -2 px-7">
                    Number of guests: {place.maxGuests}
                    </div>
                    <h2  className="font-semibold text-2xl px-7 mt-2"> Extra Info :</h2>
                    <div className="mt-2 text-sm px-7">
                        {place.extraInfo}
                    </div>
                </div>
                <div className=" my-10 mr-10 bg-white shadow shadow-black p-4 rounded-2xl">
                  <div className="text-2xl text-center">
                  Price:{place.price}/ per night
                  <div className="border rounded-2xl mt-4">
                    <div className="flex">
                        <div className="py-3 px-4 ">
                            <label>Check in: </label>
                            <input type="date" value={checkIn} onChange={event =>setCheckIn(event.target.value)}/>
                        </div>
                        <div className="py-3 px-4 border-l">
                            <label>Check out: </label>
                            <input type="date" value={checkOut} onChange={event =>setCheckOut(event.target.value)}/>
                        </div>
                    </div>
                    <div className="py-3 px-4 border-t">
                            <label>Number of guests : </label>
                            <input type="number" value={numberOfGuests} onChange={event =>setNumberOfGuests(event.target.value)}/>
                        </div>
                        {numberOfNights > 0 && (
                            <div className="py-3 px-4 border-t">
                            <label>Name : </label>
                            <input type="text" value={name} onChange={event =>setName(event.target.value)}/>
                            <label className="py-3 px-4 border-t">Phone Number : </label>
                            <input type="text" value={phone} onChange={event =>setPhone(event.target.value)}/>
                        </div>
                        )}
                        </div>
                  </div>
                   <center>
                   <button onClick={bookThisPlace} className="w-3/5 justify-center bg-gray-900 px-6 py-2 mt-4 mb-1 text-white rounded-3xl shadow shadow-purple-500 inline-flex gap-1">
                    Book this place
                    {numberOfNights > 0 && (
          <span> ₹{numberOfNights * place.price}</span>
        )}
                    </button>
                   </center>
                </div>
               
      </div>
      </div>
    )}

export default PlacePage