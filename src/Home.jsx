
import image from './img/home-bg-1.jpg'
import image2 from './img/home-bg-2.jpg'
import image3 from './img/home-bg-3.jpg'




const Home = () => {





    var index = 0

    const next = () => {
        var slides = (document.querySelectorAll('#home .slide'));
       
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');

    }

    const prev = () => {
        var slides = (document.querySelectorAll('#home .slide'));
        
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');

    }










    return (
        <>
            <section className="home" id="home" >

                <div className="slide active" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}

                >
                    <div className="content">
                        <span>voor altijd <br /> schoonheid</span>
                        <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                            sed do eiusmod tempor farhan ut labore et dolore magna aliqua.<br />
                            Lorem, ipsum dolor </h3>
                        <a href="#" className="btn">lees meer</a>
                    </div>
                </div>

                <div className="slide" style={{ backgroundImage: `url(${image2})`, backgroundSize: "cover", backgroundPosition: "center" }} >
                    <div className="content">
                        <span>voor altijd<br /> schoonheid</span>
                        <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                            sed do eiusmod tempor farhan ut labore et dolore magna aliqua.<br />
                            Lorem, ipsum dolor </h3>
                        <a href="#" className="btn">lees meer</a>
                    </div>
                </div>

                <div className="slide" style={{ backgroundImage: `url(${image3})`, backgroundSize: "cover", backgroundPosition: "center" }} >
                    <div className="content">
                        <span>voor altijd <br /> schoonheid</span>
                        <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                            sed do eiusmod tempor farhan ut labore et dolore magna aliqua.<br />
                            Lorem, ipsum dolor </h3>
                        <a href="#" className="btn">lees meer</a>
                    </div>
                </div>

                <div onClick={next} id="next-slide" className="fas fa-angle-right"></div>
                <div onClick={prev} id="prev-slide" className="fas fa-angle-left"></div>

            </section>
        </>
    )
}

export default Home
