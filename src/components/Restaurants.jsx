import { useState } from 'react'
import RestaurantCard from './RestaurantCard'

const restaurantsData = [
  {
    name: "Chandralok Kachaudi",
    cuisine: "North Indian, Breakfast",
    category: "Street Food & Breakfast",
    price: "₹200 for two",
    location: "Katra",
    description: "A budget-friendly institution known for its kachori-sabzi, sweet curd, and dosa, spread across three lively floors.",
    image: "/restaurants/chandralok.jpg"
  },
  {
    name: "Jaiswal Dosa Corner",
    cuisine: "South Indian",
    category: "Street Food & Breakfast",
    price: "₹400 for two",
    location: "Kydganj",
    description: "A local favorite for heavily stuffed, flavorful dosas — proof that great South Indian food thrives even in a North Indian city.",
    image: "/restaurants/jaiswal.jpg"
  },
  {
    name: "New Loknath Kulfi Bhandar",
    cuisine: "Desserts",
    category: "Cafes & Desserts",
    price: "₹150 for two",
    location: "Loknath",
    description: "An old-school hidden gem serving kulfi-falooda topped with rose syrup and nuts — genuinely underrated and criminally overlooked.",
    image: "/restaurants/loknath.jpg"
  },
  {
    name: "MrDewsis",
    cuisine: "Cafe",
    category: "Cafes & Desserts",
    price: "₹500 for two",
    location: "Civil Lines",
    description: "A relaxed, green-lined cafe on Mahatma Gandhi Marg known for its coffee, shakes, and easygoing hangout vibe.",
    image: "/restaurants/mrdewsis.jpg"
  },
  {
    name: "Old Town Restaurant",
    cuisine: "North Indian",
    category: "North Indian & Mughlai",
    price: "₹450 for two",
    location: "Civil Lines",
    description: "A budget-friendly gem in Civil Lines with cozy low lighting, great for couples and families, known for its butter chicken and paneer dishes.",
    image: "/restaurants/oldtown.jpg"
  },
  {
    name: "Eat On",
    cuisine: "North Indian, Kebabs",
    category: "North Indian & Mughlai",
    price: "₹600 for two",
    location: "Civil Lines",
    description: "An unassuming Civil Lines eatery beloved for its chicken biryani and succulent mutton kebabs.",
    image: "/restaurants/eaton.jpg"
  },
  {
    name: "Sagar Ratna Pure Veg",
    cuisine: "Vegetarian, Multi-cuisine",
    category: "Pure Veg & Multi-Cuisine",
    price: "₹700 for two",
    location: "Civil Lines",
    description: "A 50-year-old vegetarian institution serving Indian, Chinese, and continental dishes in a simple, family-friendly setting.",
    image: "/restaurants/sagarratna.jpg"
  },

  {
    name: "El Chico",
    cuisine: "Multi-cuisine",
    category: "Pure Veg & Multi-Cuisine",
    price: "₹800 for two",
    location: "Civil Lines",
    description: "A Prayagraj classic for decades, loved for its continental and Indian dishes and reliably good family dining experience.",
    image: "/restaurants/elchico.jpg"
  },
  {
    name: "Makkhan's Veg Restaurant",
    cuisine: "Pure Veg, North Indian, Chinese",
    category: "Pure Veg & Multi-Cuisine",
    price: "₹550 for two",
    location: "Civil Lines",
    description: "A top-rated pure vegetarian destination in Civil Lines known for delectable Dal Makhani, paneer specialties, sizzling platters, and inviting modern decor.",
    image: "/restaurants/makkhans.jpg"
  },
  {
    name: "Cloudy Food Restaurant & Cafe",
    cuisine: "Fast Food, Cafe, North Indian",
    category: "Cafes & Desserts",
    price: "₹350 for two",
    location: "Jhalwa",
    description: "A vibrant student favorite in Jhalwa near IIIT Allahabad, offering mouth-watering rolls, burgers, crispy dosas, and pocket-friendly North Indian meals.",
    image: "/restaurants/cloudyfood.jpg"
  }
]

function Restaurants({ tripList, addToTrip, removeFromTrip }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'Street Food & Breakfast',
    'North Indian & Mughlai',
    'Pure Veg & Multi-Cuisine',
    'Cafes & Desserts'
  ]

  const filteredRestaurants = restaurantsData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory
    const query = searchTerm.toLowerCase()
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.cuisine.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  function resetFilters() {
    setSearchTerm('')
    setActiveCategory('All')
  }

  return (
    <div className="attractions">
      <h2>Whe<span className="underline">re to E</span>at</h2>
      <p>Local favorites, culinary institutions, and must-try dining in Prayagraj</p>

      <div className="catalog-controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search food spots, cuisine, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="search-clear" onClick={() => setSearchTerm('')}>✕</button>
          )}
        </div>

        <div className="catalog-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`catalog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="catalog-no-results">
          <p>No dining spots found matching your search.</p>
          <button className="empty-cta-btn" onClick={resetFilters}>Reset Filters</button>
        </div>
      ) : (
        <div className="attraction-menu">
          {filteredRestaurants.map((item) => (
            <RestaurantCard
              key={item.name}
              item={{
                id: item.name,
                title: item.name,
                category: "Restaurant",
                image: item.image,
                subtitle: `${item.location} • ${item.cuisine} • ${item.price}`,
                description: item.description
              }}
              tripList={tripList}
              addToTrip={addToTrip}
              removeFromTrip={removeFromTrip}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Restaurants