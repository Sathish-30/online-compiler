const Header = () => {
    return (
        <>
            <header className="bg-white shadow flex items-center lg:py-[20px] md:py-[15px] sm:py-[12px] vsm:py-2 sm:justify-center vsm:justify-center md:justify-between md:text-lg vsm:text-sm sm:text-base dark:bg-black dark:text-slate-50">
                <div className="md:pl-[100px] cursor-pointer">
                    <h4 className="font-semibold">Coding - G</h4>
                </div>
                <ol className="md:pr-[100px] vsm:hidden sm:hidden md:flex md:text-lg vsm:text-sm sm:text-base">
                    <li className="px-[2rem]"><a className="cursor-pointer hover:text-black hover:font-semibold dark:hover:text-sky-200">Home</a></li>
                    <li className="px-[2rem]"><a className="cursor-pointer hover:text-black hover:font-semibold dark:hover:text-sky-200">About</a></li>
                    <li className="pl-[2rem]"><a className="cursor-pointer hover:text-black hover:font-semibold dark:hover:text-sky-200">Contact</a></li>
                </ol>
            </header>
        </>
    );
}

export default Header;