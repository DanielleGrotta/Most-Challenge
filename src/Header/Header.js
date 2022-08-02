import React from 'react'
import './header.css'

export default function Header() {
  
  let name = localStorage.getItem("user");
  if(name === null){
    name = "";

  }
  // var nameClear = name.replace(/\"/g, "");


  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  return (
    <>
      <header className="header" >
        <div className="search">
          <input type="text" placeholder="Buscar cliente..." />
          <button className="searchBtn"><img className="Lupa"src="https://cdn2.iconfinder.com/data/icons/science-and-technology-6-5/48/260-128.png" alt=""/></button>
        </div>
        <div className="user">
          <div className="btns">
            <a href="./Sobre" className="profileBtn"><img className="Profile" src="https://cdn1.iconfinder.com/data/icons/neutro-essential/32/user-128.png" alt="" /></a>
          </div>
          <div>
            <button  onClick ={logout} className="outBtn"><img className="Out" src="https://cdn1.iconfinder.com/data/icons/neutro-interface/32/power-2-128.png" alt=""/></button>
          </div>
        </div>
      </header>

<nav className="nav__cont">
<img src="https://icon-library.com/images/three-bars-icon/three-bars-icon-6.jpg" alt="" className="logo" />
  <ul className="nav">
    <div className="nav__items ">
      <img className="img-home-icon" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/home-circle-blue-128.png" alt="" />
      <a href="#">Home</a>
    </div>
    
    <div className="nav__items ">
      <img className="img-home-icon" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/group-circle-blue-128.png" alt="" />
      <a href="/Clientes">Clientes</a>
    </div>
      
    <div className="nav__items ">
    <img className="img-home-icon" src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/store-circle-blue-128.png" alt="" />
      <a href="/Empresas">Empresas</a>
    </div>
      
    <div className="nav__items ">
    <img className="img-home-icon" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/Info-circle-blue-128.png" alt="" />
      <a href="#">Contato</a>
    </div>
        
  </ul>
</nav>
    </>
    
  )
}
