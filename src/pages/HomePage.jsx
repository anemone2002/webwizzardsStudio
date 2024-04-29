// import Footer from "../components/Footer";
import Header from "../components/Header";
import Hello from "../components/Hello";
import Services from "../components/Services";
import Title from "../components/Title";
import Portfolio from "../components/Portfolio"
import Review from "../components/Review";
// import ContactUs from'../components/ContactUs';


import "../App.css";

function HomePage() {
    return ( 
        <>
        
            <Header/>
            <Hello/>
            
            <div className="container">
            <Title subTitle='Services ' title='What We Offer'/>
            <Services/>
            <Title subTitle='Portfolio ' title='Recent Works'/>
            <Portfolio/>
            <Title subTitle='Testimonials ' title='What Client Says'/>
            <Review/>
            
            </div>
            {/* <ContactUs/> */}
            
            {/* 
           
            
            
         




            <Footer/> */}
        

        
        
        </>
     );
}

export default HomePage;