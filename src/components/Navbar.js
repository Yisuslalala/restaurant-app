import Logo from "../assets/pizzaLogo.png";
import { Link } from  "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import React, {useState} from 'react';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
      <div className='leftSide' id ={openLinks ? "open" : "close"}>
        <img src={Logo} alt= "Logo"/>
        <div className="hiddenLinks">
          <Link to="/">  Inicio </Link>
          <Link to="/menu">  Menú </Link>
          <Link to="/about">  Acerca de </Link>
          <Link to="/contact">  Contacto </Link>  
        </div>
      </div>
      <div className='rightSide'>
          <Link to="/">  Inicio </Link>
          <Link to="/menu">  Menú </Link>
          <Link to="/about">  Acerca de </Link>
          <Link to="/contact">  Contacto </Link> 
        <button>
          <ReorderIcon onClick={toggleNavbar}/>
        </button>
      </div>
    </div>
  )
}

export default Navbar