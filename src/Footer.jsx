const Footer = () => {
  return (
    <section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>snelle links</h3>
            <a className="link" href="#home"> <i className="fas fa-angle-right"></i> home</a>
            <a className="link" href="#about"> <i className="fas fa-angle-right"></i> over ons</a>
            <a className="link" href="#shop"> <i className="fas fa-angle-right"></i> shop</a>
            <a className="link" href="#gallery"> <i className="fas fa-angle-right"></i> gallerie</a>
            <a className="link" href="#message"> <i className="fas fa-angle-right"></i> bericht</a>
            <a className="link" href="#blogs"> <i className="fas fa-angle-right"></i> blogs</a>
        </div>

        <div className="box">
            <h3>extra links</h3>
            <a className="link" href="#"> <i className="fas fa-angle-right"></i> mij favoriten </a>
            <a className="link" href="#"> <i className="fas fa-angle-right"></i> mij bestelling </a>
            <a className="link" href="#"> <i className="fas fa-angle-right"></i> mij wensenlist </a>
            <a className="link" href="#"> <i className="fas fa-angle-right"></i>privé beleid</a>
            <a className="link" href="#"> <i className="fas fa-angle-right"></i> Gebruiksvoorwaarden </a>
        </div>

        <div className="box">
            <h3>contact informatie</h3>
            <a className="link" href="#"> <i className="fas fa-phone"></i> +31-456-7890 </a>
            <a className="link" href="#"> <i className="fas fa-phone"></i> +31-222-3333 </a>
            <a className="link" href="#"> <i className="fas fa-envelope"></i> gezamenlijkondernemen@gmail.com </a>
            <a className="link" href="#"> <i className="fas fa-map"></i> hoorn, nederland - 1628DB </a>
            <div className="share">
                <a href="https://facebook.com/marco.borkovic" className="fab fa-facebook-f" target="_blank"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action="">
                <input type="email" name="" placeholder="enter your email" id="" className="email"/>
                <input type="submit" value="subscribe" className="btn"/>
            </form>
        </div> 

    </div>

    <div className="credit"> gemaakt door <span>miro-developing</span> || alle rechten voorbehouden! </div>

</section>
  )
}
export default Footer