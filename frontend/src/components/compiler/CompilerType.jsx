import compilerData from "../../data/data.js";
import CompilerDetails from "./CompilerDetails.jsx";
const CompilerType = () => {
    return (
        <div className="border-none sm:px-[20px] md:px-[50px] lg:px-[80px] xl:px-[100px] dark:bg-black">
            <div className=" vsm:px-[10%] sm:px-[10%] md:px-[10%] lg:px-[13%]">
                <h2 className="vsm:text-sm dark:bg-black sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] xl:pt-[30px] dark:text-slate-50 ">Online Compiler </h2>
                <p className="vsm:text-[13px] dark:bg-black dark:text-slate-50 sm:text-md md:text-lg lg:text-[1rem] xl:text-[1.5rem]">Choose one of the language to run code online</p>
            </div>
            <section className="vsm:flex vsm:flex-col-reverse vsm:gap-[20px] grid grid-cols-2 grid-rows-4 items-center vsm:py-[20px] sm:py-[60px] md:py-[60px] bg-white dark:bg-black">
                {compilerData.map((compiler) => {
                    return (
                        <div onClick={()=> console.log("Clicked")} key={compiler.id} className="flex flex-col w-full bg-white dark:bg-black justify-center items-center sm:py-[15px] md:py-[25px]">
                            <div className="vsm:w-1/3 sm:w-[60%] md:w-[60%] lg:w-[45%] flex flex-col gap-2.5 items-center border rounded-md md:p-[15px] shadow hover:shadow-md dark:shadow-slate-50 dark:hover:shadow-md cursor-pointer">
                                <h4 className="vsm:text-sm text-lg dark:text-slate-100">{compiler.name}</h4>
                                <a className="vsm:text-[11px] text-sm font-medium text-indigo-400 dark:text-indigo-300 hover:text-indigo-500 cursor-pointer ">Start Coding {compiler.lang} {"->"}</a>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default CompilerType;