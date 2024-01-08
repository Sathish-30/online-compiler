const Header = () => {
    return (
        <>
            <header className="flex items-center lg:pt-[20px] md:pt-[15px] sm:pt-[12px] sm:justify-center md:justify-between">
                <div className="ml-[100px]">
                    <h4 className="font-semibold">Coding - G</h4>
                </div>
                <ol className="mr-[100px] sm:hidden md:flex ">
                    <li className="mx-[2rem]">Home</li>
                    <li className="mx-[2rem]">About</li>
                    <li className="mx-[2rem]">Contact</li>
                </ol>
            </header>
        </>
    );
}

export default Header;