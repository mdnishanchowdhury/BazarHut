import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer'
import NotificationBar from '../Shared/Navbar/NotificationBar'
import Nav from '../Shared/Navbar/Nav'

function Main() {
  return (
    <div>
        <NotificationBar></NotificationBar>
         <Nav></Nav>
        <Navbar></Navbar>
       
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main