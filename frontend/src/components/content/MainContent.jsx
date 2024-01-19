const MainContent = () => {
    const compilerImage = "/compiler.png";
    return (
            <main className="mt-4 dark:mt-0 flex vsm:gap-[15px] vsm:flex-col-reverse vsm:items-center sm:gap-[25px] vsm:py-[30px] vsm:px-[40px] sm:py-[60px] sm:px-[80px] md:p-[100px] bg-white dark:bg-black dark:text-slate-50">
                <section className="vsm:max-w-[200px] md:max-w-screen-md sm:max-w-screen-sm">
                    <img src={compilerImage} alt="compiler image"/>
                </section>
                <section className=" vsm:pt-[15px] sm:pt-[20px] md:pt-[30px] lg:pt-[40px]"  >
                    <h1 className="vsm:text-sm sm:font-semibold vsm:font-semibold sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[3rem] dark:text-slate-50">Practice with our Online Compilers</h1>
                    <p className="vsm:text-[11px] sm:text-lg vsm:pt-[8px] sm:pt-[10px] md:pt-[20px] lg:pt-[30px] sm:text-md md:text-lg lg:text-[1rem] xl:text-[1.5rem]">We believe coding should be accessible to all. So we made our own compilers for web and mobile. And it's free!</p>
                </section>
            </main>
    )
}
export default MainContent;