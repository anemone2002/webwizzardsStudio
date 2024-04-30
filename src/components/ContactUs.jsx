import React from 'react';
import './ContactUs.css'; 
import rightarr from '../assets/images/right-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "19c96cf3-017b-440b-8ca1-c67f9e7c454b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (  
        <div className="contact">            
                <div className="contact-col">
                    <div className="rectangle">
                        <span className='up'>start a relationship</span>
                        <span>New Business</span>                                                
                    </div>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit }>
                        <label>Your name </label>
                        <input type="text" name='name' placeholder='Enter your name' />
                        <label>Phone Number</label>
                        <input type="text" name='phone' placeholder='Enter your mobile phone number' />
                        <label>Write your message here</label>
                        <textarea name='message'  rows='6' placeholder='Enter your message'></textarea>
                        <button type='submit' className='btn dark-btn'>Submit now <img src={rightarr} alt="" /></button>
                       

                    </form>
                    <span>{result}</span>
                </div>
            
        </div>
    );
}

export default Contact;
