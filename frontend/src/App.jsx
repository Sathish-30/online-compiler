import  Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import CompilerType from "./components/CompilerType.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className="dark:bg-black">
            <Header/>
            <MainContent/>
            <CompilerType/>
            <Footer/>
        </div>
    )
}

export default App;