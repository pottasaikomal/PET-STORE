import React from 'react';
import {Link} from "react-router-dom"
import './navbarstyles.css';

function Navigation() {
    return (
        <nav style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{color:"white"}}>WELCOME TO THE PET STORE</div>
            <div>
            <Link to="/">FORM</Link>
            <Link to="/petdata">PETS DATA</Link>
            </div>
        </nav>
    );
}

export default Navigation;
