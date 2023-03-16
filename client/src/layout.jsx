import { Outlet } from "react-router-dom"
import Header from "./Header"

function Layout(){
    return(
        <>
        <div className="my-5 px-8">
        <Header/>
        <Outlet/>
        </div>
        </>
    )
}
export default Layout