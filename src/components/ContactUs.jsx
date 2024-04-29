import React from 'react';
import './ContactUs.css'; 


const Contact = () => {
    return (  
        <section className="contact" id="contacts">
            <div className="container">
                <div className="left-section">
                    <div className="rectangle">
                        <span className='up'>start a relationship</span>
                        <span>New Business</span>
                        
                        
                    </div>
                </div>
                <div className="right-section">
                    <h2>Contact Us</h2>
                    <p>We’d love to learn more about your company and how we can help you. Tell us about your project in the form below, and we’ll put you in touch with the right team.</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
