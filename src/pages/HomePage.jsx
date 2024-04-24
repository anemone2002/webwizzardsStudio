import Footer from "../components/Footer";
import Header from "../components/Header";
import Hello from "../components/Hello";
import Services from "../components/Services";
import "../App.css";

function HomePage() {
    return ( 
        <>
         <div className="app-container">
            <Header/>
            <Hello/>
            <Services/>




            <Footer/>
        

         </div>
        
        </>
     );
}

export default HomePage;