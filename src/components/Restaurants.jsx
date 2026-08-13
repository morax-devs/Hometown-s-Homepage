import RestaurantCard from './RestaurantCard'

const restaurantsData = [
  {
    name: "Chandralok Kachaudi",
    cuisine: "North Indian, Breakfast",
    price: "₹200 for two",
    location: "Katra",
    description: "A budget-friendly institution known for its kachori-sabzi, sweet curd, and dosa, spread across three lively floors.",
    image: "/restaurant1.jpg"
  },
  {
    name: "Jaiswal Dosa Corner",
    cuisine: "South Indian",
    price: "₹400 for two",
    location: "Kydganj",
    description: "A local favorite for heavily stuffed, flavorful dosas — proof that great South Indian food thrives even in a North Indian city.",
    image: "/restaurant2.jpg"
  },
  {
    name: "New Loknath Kulfi Bhandar",
    cuisine: "Desserts",
    price: "₹150 for two",
    location: "Loknath",
    description: "An old-school hidden gem serving kulfi-falooda topped with rose syrup and nuts — genuinely underrated and criminally overlooked.",
    image: "/restaurant3.jpg"
  },
  {
    name: "MrDewsis",
    cuisine: "Cafe",
    price: "₹500 for two",
    location: "Civil Lines",
    description: "A relaxed, green-lined cafe on Mahatma Gandhi Marg known for its coffee, shakes, and easygoing hangout vibe.",
    image: "/restaurant4.jpg"
  },
  {
    name: "Old Town Restaurant",
    cuisine: "North Indian",
    price: "₹450 for two",
    location: "Civil Lines",
    description: "A budget-friendly gem in Civil Lines with cozy low lighting, great for couples and families, known for its butter chicken and paneer dishes.",
    image: "/restaurant5.jpg"
  },
  {
    name: "Eat On",
    cuisine: "North Indian, Kebabs",
    price: "₹600 for two",
    location: "Civil Lines",
    description: "An unassuming Civil Lines eatery beloved for its chicken biryani and succulent mutton kebabs.",
    image: "/restaurant6.jpg"
  },
  {
    name: "Sagar Ratna Pure Veg",
    cuisine: "Vegetarian, Multi-cuisine",
    price: "₹700 for two",
    location: "Civil Lines",
    description: "A 50-year-old vegetarian institution serving Indian, Chinese, and continental dishes in a simple, family-friendly setting.",
    image: "/restaurant7.jpg"
  },
  {
    name: "El Chico",
    cuisine: "Multi-cuisine",
    price: "₹800 for two",
    location: "Civil Lines",
    description: "A Prayagraj classic for decades, loved for its continental and Indian dishes and reliably good family dining experience.",
    image: "/restaurant8.jpg"
  }
]

function Restaurants({ tripList, addToTrip }) {
  return (
    <div className="attractions">
      <h2>Whe<span className="underline">re to E</span>at</h2>
      <p>Local favorites and must-try spots in Prayagraj</p>
      <div className="attraction-menu">
        {restaurantsData.map((item) => (
          <RestaurantCard
            key={item.name}
            name={item.name}
            cuisine={item.cuisine}
            price={item.price}
            location={item.location}
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