const Services = () => {
  return (
    <section className="services">

    <div className="box">
        <img src={require("./img/icon-1.png") }alt=""/>
        <h3>Gratis bezorging</h3>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>

    <div className="box">
    <img src={require("./img/icon-2.png") }alt=""/>
        <h3>veilige betalingen</h3>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>

    <div className="box">
    <img src={require("./img/icon-3.png") }alt=""/>
        <h3>24/7 ondersteuning</h3>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>

</section>
  )
}
export default Services