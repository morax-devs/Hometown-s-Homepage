function Hero() {
  function scrollToAttractions(){
    document.getElementById('attractions').scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div className="heading-background" id="welcome">
      <h1>Welcome to Prayagraj</h1>
      <h3>City of Sanctity, History, and Cultural Heritage</h3>
      <button className="btn" onClick={scrollToAttractions}>explore now</button>
    </div>
  )
}

export default Hero