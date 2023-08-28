const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
    <h1 className="heading">ons <span>gallerie</span></h1>
    <div className="box-container">

        <div className="box">
            <img src={require("./img/gallery-img-1.jpeg")}/>
            <div className="content">
                <h3>gezicht</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#" className="btn">lees meer</a>
            </div>
        </div>

        <div className="box">
        <img src={require("./img/gallery-img-2.jpeg")}/>
            <div className="content">
                <h3>ogen</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#" className="btn">lees meer</a>
            </div>
        </div>

        <div className="box">
        <img src={require("./img/gallery-img-3.jpeg")}/>
            <div className="content">
                <h3>lippen</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#" className="btn">lees meer</a>
            </div>
        </div>

        <div className="box">
        <img src={require("./img/gallery-img-4.jpeg")}/>
            <div className="content">
                <h3>haren</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#" className="btn">lees meer</a>
            </div>
        </div>

        <div className="box">
        <img src={require("./img/gallery-img-5.jpeg")}/>
            <div className="content">
                <h3>make up</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#" className="btn">lees meer</a>
            </div>
        </div>

        <div className="box">
        <img src={require("./img/gallery-img-6.jpeg")}/>
            <div className="content">
                <h3>huidverzorging</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#" className="btn">lees meer</a>
            </div>
        </div>

    </div>
</section>

  )
}
export default Gallery