const Category = () => {
  return (
    <>
    <section className="category">
    <div className="box-container">

        <a href="#" className="box">
            <img src={require("./img/category-1.png")}/>
            <h3>huidverzorging</h3>
        </a>

        <a href="#" className="box">
        <img src={require("./img/category-2.png")}/>
            <h3>lipen</h3>
        </a>

        <a href="#" className="box">
        <img src={require("./img/category-3.png")}/>
            <h3>haar</h3>
        </a>

        <a href="#" className="box">
        <img src={require("./img/category-4.png")}/>
            <h3>ogen</h3>
        </a>

        <a href="#" className="box">
        <img src={require("./img/category-5.png")}/>
            <h3>makeup</h3>
        </a>

        <a href="#" className="box">
        <img src={require("./img/category-6.png")}/>
            <h3>geur</h3>
        </a>

    </div>
</section>
    </>
  )
}
export default Category