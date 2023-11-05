import React from 'react';

const SendMessage = () => {
    return (
        <div>
            <h2>Send Message</h2>
            <input type='text' placeholder='Your name'/>
            <input type='email' placeholder='Email'/>
            <button type='submit'>Submit</button>
            <hr/>
            
        </div>
    );
};

export default SendMessage;