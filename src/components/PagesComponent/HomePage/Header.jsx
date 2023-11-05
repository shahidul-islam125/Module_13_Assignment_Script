import React from 'react';
import { useRef } from 'react';

const Header = () => {
    let header = useRef()
    let content = useRef()

    const change = () => {
        header.current.innerText = "This is Updated Header Section."
        content.current.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis placeat id odit, nihil ipsum deleniti, beatae sequi consectetur dolorem inventore unde. Incidunt.Rem maxime provident optio nostrum. Voluptates nisi ex vel voluptatum possimus, soluta nemo incidunt id doloremque illo animi alias quam amet saepe."
    }
    return (
        <div>
            <h1 ref={header}>This is Header section</h1>
            <p ref={content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime provident optio nostrum. Voluptates nisi ex vel voluptatum possimus, soluta nemo incidunt id doloremque illo animi alias quam amet saepe.</p>
            <button onClick={change}>Click</button>
            <hr/>
        </div>
    );
};

export default Header;