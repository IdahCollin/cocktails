// The Footer.jsx component is mounted in App.jsx

import "./footer.css";
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

export const Footer = () => {
    return (
        <div className="footer">
            {/* <p>Crafted by Idah Collin</p>
            <nav className="footer-nav">
                <ul>
                    <li><Link to="/"><CiHome /></Link></li>
                    <li><Link to="/about"><CiCircleInfo /></Link></li>
                </ul>
            </nav> */}
            <img className="ice-footer" src="/ice.png" alt="Footer of ice"></img>
        </div>
    )
}