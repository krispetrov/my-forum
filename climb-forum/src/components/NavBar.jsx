import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
export default function NavBar() {

    return (
        
        <nav className='navigation '>
            <div className='navigation-menu flex space-x-5  m-4 text-3xl justify-between px-[50px] items-center'>
                <div className='navigation-logo w-36'>
                    <img src={logo} alt='logo'/>
                </div>
                <NavLink to='/home' className='navigation-link  hover:bg-blue-100 rounded justify-between px-1  '>Home</NavLink>
                <NavLink to='/signin' className='navigation-link hover:bg-blue-100 rounded justify-between px-1'>Sing In</NavLink>
                <NavLink to='/singup' className='navigation-link hover:bg-blue-100 rounded justify-between px-1'>Sing Up</NavLink>
                <NavLink to='/about' className='navigation-link hover:bg-blue-100 rounded justify-between px-1'>About</NavLink>
            </div>
        </nav>
    )
}