import { NavLink, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

const Layout = () => {
    return (
        // Changed w-screen to w-full and overflow-x-none to overflow-x-hidden
        <div className="h-screen w-full overflow-x-hidden flex flex-col">
            <Navigation />
            <div className="flex-1 min-h-0">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout