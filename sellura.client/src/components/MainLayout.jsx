import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function MainLayout() {
    return (
        <div className="dashboard-container  p-4">
            <Navbar />
            <div className='content-container'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
