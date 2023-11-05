import React from 'react';
import MenuItem from '../components/MenuItem';
import SendMessage from '../components/PagesComponent/ContactPage/SendMessage';
import ContactInfo from '../components/PagesComponent/ContactPage/ContactInfo';
import WhatsApp from '../components/PagesComponent/ContactPage/WhatsApp';
import Linkdin from '../components/PagesComponent/ContactPage/Linkdin';
const Contact = () => {
    return (
        <div>
            <MenuItem/>
            <SendMessage/>
            <ContactInfo/>
            <WhatsApp/>
            <Linkdin/>
        </div>
    );
};

export default Contact;