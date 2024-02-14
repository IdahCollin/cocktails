//This component is mounted in App.jsx
import "./header.css";

import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { BiSolidDrink } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="header">
      {/* <Link to="/"><img className="header-logo" src="./src/assets/favicon-martini.png" alt="logo" /></Link> */}
      <nav className="header-nav">
        <ul>
          {/* <li><Link to="/"><BiSolidDrink /></Link></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}
