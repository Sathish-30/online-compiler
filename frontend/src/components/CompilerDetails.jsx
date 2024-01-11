const CompilerDetails = () => {
    return (
        <div className="vsm:px-[10%] sm:px-[10%] md:px-[10%] lg:px-[13%] mt-[3%] dark:bg-black dark:text-slate-50 text-lg">
            <h4 className="vsm:text-sm dark:bg-black sm:font-semibold vsm:font-semibold sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.5rem] xl:pt-[30px] dark:text-slate-50 ">Online Compiler</h4>
            <p className="pt-[3%]">An Online compiler is a tool that allows you to compile source code and run it in several different programming languages online.</p>
            <p className="pt-[3%]">An online compiler is needed for program execution. It converts the text-based source code into an executable representation known as object code. If a compiler is designed to run manually on every system, it will take up more space on the machine. It will also need correct configuration if not loaded with the default options. Most apps and their related interfaces are designed to work online in today's world. Therefore, an online compiler is created.</p>
            <p className="pt-[3%]">The main task of an online compiler is to make it easier for any user to build and run programs (which may be written in any language). Moreover, these programs are executed without downloading any IDE (Integrated Development Environment) or compiler. There is no requirement for a development kit on the client machine.</p>
            <p className="pt-[3%]">Using different online compilers at a single interface allows a programmer to compile and remove all errors and efficiently store the bugs' output.</p>
            <p className="pt-[3%]">Coding - G is the perfect example of an online compiler.</p>
            <h4 className="vsm:text-sm dark:bg-black sm:font-semibold vsm:font-semibold sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.5rem] pt-[5%] dark:text-slate-50 ">Working of online compiler</h4>
            <p className="pt-[3%]">An online compiler converts computer code written in one programming language (the source language) into another which usually involves converting source code from a high-level programming language to a lower-level language and producing executable code.</p>
            <p className="pt-[3%]">On a server, online compilers are hosted and are accessible to clients via web pages. These online compilers use web pages to receive code and programming language as input. Based on the programming language, the server chooses the suitable compiler, which it then uses to compile the supplied code. The compilation results must be parsed by the server before being published to the client that requested the compilation.</p>
            <p className="pt-[3%]">The code undergoes the following procedure in an online compiler:</p>
            <ol className="pl-[3%]">
                <li className="py-[0.6%] pt-[3%] list-disc">Code is written on the code editor on the website.</li>
                <li className="py-[0.6%]  list-disc">It is then sent from the webpage to the server.</li>
                <li className="py-[0.6%]  list-disc">The content is saved by the server as a file.</li>
                <li className="py-[0.6%]  list-disc">The file is processed as though it were a local source file.</li>
                <li className="py-[0.6%] list-disc">The result is computed and returned to the website.</li>
            </ol>
        </div>
    );
}

export default CompilerDetails;