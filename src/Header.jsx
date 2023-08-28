import { useEffect } from 'react'



const Header = () => {
 useEffect(() => {
  var menu = document.querySelector('#menu-btn'); var navbar = document.querySelector('.header .navbar'); menu.onclick = function () { menu.classList.toggle('fa-times'); navbar.classList.toggle('active'); }; window.onscroll = function () { menu.classList.remove('fa-times'); navbar.classList.remove('active'); };
 }, [])

  return (
    <section id="header" className="header">
      
<a href="#" className="logo"><i className="fas fa-female"></i> nobleglow</a>
<nav className="navbar">
    <a href="#home">home</a> 
    <a href="#gallery">gallerie</a> 
    <a href="#message">bericht</a>
    <a href="#blogs">blogs</a> 
</nav>

<div class="icons">
    <div id="menu-btn" className="fas fa-bars"></div>
    <a href="#" className="fas fa-heart"></a>
    <a href="#" className="fas fa-shopping-cart"></a>
</div>
</section>
  )
}
export default Header