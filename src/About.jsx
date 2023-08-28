const About = () => {
  return (
   
        
        <section className="about" id="about">
    <div className="img">
        <img src={require("./img/about-img.jpg")} alt=""/>
    </div>
    <div className="content">
        <div className="box">
            <h3>Over <span>Ons...</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Incidunt ab voluptatibus impedit animi, odit mollitia explicabo commodi ducimus molestiae error.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Incidunt ab voluptatibus impedit animi, odit mollitia </p>
            <a href="#" className="btn">lees meer</a>
        </div>
        <div className="icons-container">
            <div className="icons">
                <i className="fas fa-address-card"></i>
                <p>Adreskaart</p>
            </div>
            <div className="icons">
                <i className="fas fa-award"></i>
                <p>award kaart</p>
            </div>
            <div className="icons">
                <i className="fas fa-gift"></i>
                <p>cadeaukaarten</p>
            </div>
        </div>
    </div>
</section>

  
  )
}
export default About