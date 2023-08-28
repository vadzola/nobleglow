const Shop = () => {
  return (
    <section className="shop" id="shop">
    <h1 className="heading">ons <span>shop</span></h1>
    <div className="box-container">

        <div className="box">
            <div className="img">
                <img src={require("./img/product-1.jpg")}/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>airbrush mat</h3>
                <div className="price">€40-<span>€200.99</span></div>
                <a href="#" className="btn">toevoegen aan winkelwagen</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
               
             <img src={require("./img/product-2.jpeg")}/>            <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>melkzuur behandeling</h3>
                <div className="price">€40-<span>€200.99</span></div>
                <a href="#" className="btn">toevoegen aan winkelwagen</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
            <img src={require("./img/product-3.jpg")}/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>midnight must</h3>
                <div className="price">€40-<span>€200.99</span></div>
                <a href="#" className="btn">toevoegen aan winkelwagen</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
            <img src={require("./img/product-4.jpg")}/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>foundation voor gezicht en lichaam</h3>
                <div className="price">€40-<span>€200.99</span></div>
                <a href="#" className="btn">toevoegen aan winkelwagen</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
            <img src={require("./img/product-5.jpeg")}/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>eyeliner pakje</h3>
                <div className="price">€40-<span>€200.99</span></div>
                <a href="#" className="btn">toevoegen aan winkelwagen</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
            <img src={require("./img/product-6.jpg")}/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>vocht balsem</h3>
                <div className="price">€40-<span>€200.99</span></div>
                <a href="#" className="btn">toevoegen aan winkelwagen</a>
            </div>
        </div>

    </div>
</section>
  )
}
export default Shop