const Header = () => {
    return (
            <header className="sm:px-[80px] md:px-[120px] bg-white shadow flex items-center lg:py-[20px] md:py-[15px] sm:py-[12px] vsm:py-2 vsm:justify-center sm:justify-between md:text-lg vsm:text-sm sm:text-base dark:bg-black dark:text-slate-50">
                <div className="cursor-pointer">
                    <h4 className="font-semibold">Coding - G</h4>
                </div>
                <ol className="vsm:hidden sm:flex md:flex md:text-lg vsm:text-sm sm:text-base">
                    <li className="sm:px-[0.5rem] md:px-[2rem] dark:hover:text-sky-200"><a className="cursor-pointer ">Home</a></li>
                    <li className="sm:px-[0.5rem] md:px-[2rem] dark:hover:text-sky-200"><a className="cursor-pointer ">About</a></li>
                    <li className="sm:px-[0.5rem] md:pl-[2rem] dark:hover:text-sky-200 "><a className="cursor-pointer ">Contact</a></li>
                </ol>
            </header>
    );
}

export default Header;