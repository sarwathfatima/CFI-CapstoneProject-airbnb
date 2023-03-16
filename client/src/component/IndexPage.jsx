import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function IndexPage(){
    const [places,setPlaces]=useState([])
    useEffect(()=>{
        axios.get('/api/admin/places').then(response =>{
            setPlaces(response.data)
        })
    },[])
    return(
      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols lg:grid-cols-4 box-content h-220 w-100 p-10  ">
        {places.length>0 && places.map(place =>(
            <Link to={'/place/'+place._id}>
            <div className="hover:scale-125 bg-[#ffffff] p-2 rounded-2xl">
                <div className="bg-gray-500 mb-2 rounded-2xl flex shadow shadow-gray-700" >
                    {place.photos?.[0] && (
                        <img className="rounded-2xl object-cover aspect-square" src={place.photos?.[0]} alt=""/>
                    )}
                </div>
               <h2 className="font-bold "> {place.title}</h2>
               <h3 className="text-sm truncate text-gray-500 "> {place.address}</h3>
               <div className="mt-1">
               <span className="font-bold"> ₹{place.price}</span> per night
               </div>
            </div>
            </Link>
        ))}
      </div>

    )
}
export default IndexPage