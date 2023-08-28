const Message = () => {
  return (
    <section className="message" id="message">
    <form action="">
        <h3>neem  <span>contact
            op</span></h3>
        <input type="text" placeholder="Voledige naam" className="box"/>
        <input type="email" placeholder="Email" className="box"/>
        <input type="number" placeholder="Telefoon" className="box"/>
        <textarea placeholder="Bericht" className="box" cols="30" rows="10"></textarea>
        <input type="submit" value="stuur bericht" className="btn"/>
    </form>
</section>
  )
}
export default Message