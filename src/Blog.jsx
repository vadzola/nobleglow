const Blog = () => {
  return (
    <section className="blogs" id="blogs">
    <h1 className="heading">ons dagelijks <span>blogs</span></h1>
    <div className="box-container">

        <div className="box">
            <div className="img">
             <img src={require("./img/blog-1.jpg")} alt=""/>
            </div>
            <div className="content">
                <div className="date">
                <h3>12</h3>
                <span>jan</span>
            </div>
            <a href="#" className="user"><i className="fas fa-user"></i> door admin</a>
            <a href="#" className="title"> blog titel komt hier...</a>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="#" className="btn">lees meer</a>
        </div>
    </div>

    <div className="box">
        <div className="img">
        <img src={require("./img/blog-2.jpg")} alt=""/>
        </div>
        <div className="content">
            <div className="date">
            <h3>19</h3>
            <span>feb</span>
        </div>
        <a href="#" className="user"><i className="fas fa-user"></i> door admin</a>
        <a href="#" className="title"> blog titel komt hier...</a>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <a href="#" className="btn">lees meer</a>
    </div>
</div>

<div className="box">
    <div className="img">
    <img src={require("./img/blog-3.jpg")} alt=""/>
    </div>
    <div className="content">
        <div className="date">
        <h3>02</h3>
        <span>Aug</span>
    </div>
    <a href="#" className="user"><i className="fas fa-user"></i> door admin</a>
    <a href="#" className="title"> blog titel komt hier...</a>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <a href="#" className="btn">lees meer</a>
</div>
</div>


    </div>
</section>
  )
}
export default Blog