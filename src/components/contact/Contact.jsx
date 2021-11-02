import "./contact.scss"
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };  
    return (
        <div className="contact" id="contact">
            <div className="left">            
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form name="contact v1" action="post" data-netlify="true" onSubmit="submit">
                    
                    <input type="hidden" name="form-name" value="contact v1"/>
                    
                    
                    <input type="text" name="first-name" placeholder="First Name" />
                    
                    <input type="email" name="email" placeholder="Email" />
                    
                    <textarea name="message" placeholder="Message"></textarea>
                    
                    <div className="field">
                        <div data-netlify-recaptcha="true"></div>
                    </div>
                    <button type="submit">Send</button>
                    {/* {message && <span>Thanks, I'll reply ASAP :) </span>} */}
                </form>
            </div>
        </div>
    );
}
