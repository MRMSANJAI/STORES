import routes from '../routes/sidebarroute';
import { NavLink, Link , useLocation } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarSubmenu from './sidebarsubmenu';
import XMarkIcon  from '@heroicons/react/24/outline/XMarkIcon'
import logo from '../../../src/assets/Black and White Monochrome Tech Logo (1).png'


function LeftSidebar(){
    
    const location = useLocation();

    const close = (e) => {
        document.getElementById('left-sidebar-drawer').click()
    }

    return(
        
        <div className="drawer-side flex flex-row z-30  ">
            <ul className="menu  pt-2 w-64 bg-base-100 min-h-full   text-base-content">
            <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={() => close()}>
            <XMarkIcon className="h-5 inline-block w-5"/>
            </button>
              
                <li className="mb-2 font-semibold text-xl">
                    
                    <Link to={'/'}>Menu</Link> </li>
                {
                    routes.map((route, k) => {
                        return(
                            <li className="" key={k}>
                                {
                                    route.submenu ? 
                                        <SidebarSubmenu {...route}/> : 
                                    (<NavLink
                                        end
                                        to={route.path}
                                        className={({isActive}) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`} >
                                         {route.name}
                                            {
                                                location.pathname === routes.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                aria-hidden="true"></span>) : null
                                            }
                                    </NavLink>)
                                }
                                
                            </li>
                            
                        )
                    })
                }

            </ul>
        </div>
        
    )
}

export default LeftSidebar