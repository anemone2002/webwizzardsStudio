import Footer from "../components/Footer";
import Header from "../components/Header";
import Hello from "../components/Hello";
import Services from "../components/Services";
import Review from "../components/Review";


import "../App.css";

function HomePage() {
    return ( 
        <>
         <div className="app-container">
            <Header/>
            <Hello/>
            <Services/>
            <Review/>
         




            <Footer/>
        

         </div>
        
        </>
     );
}

export default HomePage;