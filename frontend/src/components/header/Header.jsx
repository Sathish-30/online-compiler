import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
            <header className="sm:fixed top-0 w-full sm:px-[80px] md:px-[120px] bg-white shadow flex items-center py-[1%] vsm:justify-center sm:justify-between md:text-lg vsm:text-sm sm:text-base dark:bg-black dark:text-slate-50">
                <div className="cursor-pointer">
                    <h4 className="font-semibold"><NavLink to="/">Coding - G</NavLink></h4>
                </div>
                <ol className="vsm:hidden sm:flex md:flex md:text-lg vsm:text-sm sm:text-base">
                    <li>
                        <NavLink to="/" className={({isActive}) => `sm:px-[0.5rem] md:px-[2rem]  ${isActive ? "dark:text-sky-200 text-[#EBD9B4] " : "text-black"} dark:text-white dark:hover:text-sky-200`}>Home</NavLink>
                    </li>
                    <li>                    
                        <NavLink to="about" className={({isActive}) =>`sm:px-[0.5rem] md:px-[2rem] ${isActive ? "dark:text-sky-200 text-[#EBD9B4] " : "text-black"}dark:text-white dark:hover:text-sky-200`}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="login" className={({isActive}) =>`sm:px-[0.5rem] md:pl-[2rem] ${isActive ? "dark:text-sky-200 text-[#EBD9B4]" : "text-black"}dark:text-white dark:hover:text-sky-200`}>Login</NavLink>
                    </li>
                </ol>
            </header>
    );
}

export default Header;