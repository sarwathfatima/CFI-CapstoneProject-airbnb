import { Route,Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './component/IndexPage'
import LoginPage from './component/LoginPage'
import Layout from './layout'
import RegisterPage from './component/RegisterPage'
import PlacesPage from './component/PlacesPage'
import PlacePage from './component/PlacePage'
import AccountPage from './component/AccountPage'
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>} /> 
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/account" element={<AccountPage/>}/>
      <Route path='/account/places/new' element={<PlacesPage/>}/>
      <Route path="/place/:id" element={<PlacePage/>}/>
      </Route>
    
    </Routes>
   
  )

  
}

export default App
