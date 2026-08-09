import RestaurantCard from './RestaurantCard'

const restaurantsData = [
  {
    name: "El Chico",
    cuisine: "Multi-cuisine",
    price: "$$",
    description: "A Prayagraj institution since decades, known for its continental and Indian dishes.",
    image: "/restaurant1.jpg"
  },
  {
    name: "Hot Stuff",
    cuisine: "Fast Food",
    price: "$",
    description: "Popular local spot for quick bites, chaat, and street-food favorites.",
    image: "/restaurant2.jpg"
  },
  {
    name: "Rahi Ilawart",
    cuisine: "North Indian",
    price: "$$",
    description: "Government-run restaurant offering authentic North Indian thalis in a relaxed setting.",
    image: "/restaurant3.jpg"
  }
]

function Restaurants({ tripList, addToTrip }) {
  return (
    <div className="attractions">
      <h2>Where to <span className="underline">Eat</span></h2>
      <p>Local favorites and must-try spots in Prayagraj</p>
      <div className="attraction-menu">
        {restaurantsData.map((item) => (
          <RestaurantCard
            key={item.name}
            name={item.name}
            cuisine={item.cuisine}
            price={item.price}
            description={item.description}
            image={item.image}
            tripList={tripList}
            addToTrip={addToTrip}
          />
        ))}
      </div>
    </div>
  )
}

export default Restaurants