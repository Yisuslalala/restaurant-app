import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
        <div 
          className='headerContainer' 
          style= {{ backgroundImage: `url(${BannerImage})` }}
        >
          <h1>Pedro Pizzería</h1>
          <p>Deliciosas Pizzas que Crean Sonrisas: Tu Lugar de Sabor Inigualable</p> 
          <Link to={"/menu"}>
            <button>Ordenar</button>
          </Link>
        </div>
    </div>
  )
}

export default Home