import {Link} from "react-router-dom";
import {MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon} from "@heroicons/react/24/outline";

const NavBar = () => {
    return (
        <nav className='bg-blue-500 shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold text-white'>
                    <Link to="/">MULTIPLE-SHOP</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form>
                        <input type="text" placeholder="Search" className='w-full py-2' />
                        <button
                            type="submit"
                            className="absolute right-0 top-0 h-full px-3 bg-blue-700 flex items-center justify-center"
                        >
                            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                        </button>
                    </form>
                </div>
                <div className='flex items-center space-x-4 text-white'>
                    <button className=''>
                        <UserCircleIcon className='w-10 h-10' />
                    </button>
                    <button className=''>Login</button>
                    <button className=''>Register</button>

                    <Link to="/cart" className='flex flex-row border border-white px-2 py-2 rounded-md space-x-2'>
                        <ShoppingCartIcon className='w-6 h-6 text-white'/>
                        Giỏ hàng
                        <p className='bg-white text-black text-center rounded-md'>0</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;