import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer'
import Menu from '../Page/Dashboard/Menu'

function Dashboard() {
    return (
        <div className='items-center'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12 '>
                <aside className='col-span-2 pt-8'>
                    <Menu></Menu>
                </aside>
                <section className='col-span-10 pl-8 pt-8 '>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default Dashboard