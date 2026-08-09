import Hero from '../components/Hero'
import About from '../components/About'
import ThingsToDo from '../components/ThingsToDo'
import VisitInfo from '../components/VisitInfo'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ThingsToDo />
      <VisitInfo />
    </div>
  )
}

export default Home