import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()

  return (
    <div className="heading-background" id="welcome">
      <h1>Welcome to Prayagraj</h1>
      <h3>City of Sanctity, History, and Cultural Heritage</h3>
      <div className="hero-btn-group">
        <button className="btn btn-ai-hero" onClick={() => navigate('/planner')}>✨ Plan Trip with AI</button>
        <button className="btn" onClick={() => navigate('/attractions')}>Explore Attractions</button>
      </div>
    </div>
  )
}

export default Hero