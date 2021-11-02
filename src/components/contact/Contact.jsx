import "./contact.scss"
// import { useState } from "react";

export default function Contact() {
    // const [message, setMessage] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setMessage(true);
    // };  
    return (
        <div className="contact" id="contact">
            <div className="left">            
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form name="contact v1"
                      action="post" 
                      data-netlify="true" 
                      onSubmit="submit"
                      data-netlifty-honeypot="bot-field">
                    
                    <input type="hidden" name="form-name" value="contact v1"/>
                    <div hidden>
                        <input name="bot-field" />
                    </div>    
                    <input type="text" name="first-name" placeholder="First Name" />
                    
                    <input type="email" name="email" placeholder="Email" />
                    
                    <textarea name="message" placeholder="Message"></textarea>
                    
                    <button type="submit">Send</button>
                    {/* {message && <span>Thanks, I'll reply ASAP :) </span>} */}
                </form>
            </div>
        </div>
    );
}
