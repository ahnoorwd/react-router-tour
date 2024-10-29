import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div>
             <h2>this is home page</h2>
            <Header></Header>
             <Outlet></Outlet> 
             <Footer></Footer>
            
        </div>
    );
};

export default Home;