import StayCard from './StayCard'

const stayData = [
  {
    name: "El Chico",
    price: "$$",
    description: "A Prayagraj institution since decades, known for its continental and Indian dishes.",
    location: "Harwara.",
    image: "/restaurant1.jpg"
  },
  {
    name: "Hot Stuff",
    price: "$",
    description: "Popular local spot for quick bites, chaat, and street-food favorites.",
    location: "Civil Lines.",
    image: "/restaurant2.jpg"
  },
  {
    name: "Rahi Ilawart",
    price: "$$",
    description: "Government-run restaurant offering authentic North Indian thalis in a relaxed setting.",
    location: "Jhalwa",
    image: "/restaurant3.jpg"
  }
]

function Stay({ tripList, addToTrip }) {
  return (
    <div className="attractions">
      <h2>Where to <span className="underline">Stay</span></h2>
      <p>Local favorites and must-try spots in Prayagraj</p>
      <div className="attraction-menu">
        {stayData.map((item) => (
          <StayCard
            key={item.name}
            name={item.name}
            price={item.price}
            description={item.description}
            location={item.location}
            image={item.image}
            tripList={tripList}
            addToTrip={addToTrip}
          />
        ))}
      </div>
    </div>
  )
}

export default Stay