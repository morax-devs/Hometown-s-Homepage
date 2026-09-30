import { useState } from 'react'
import StayCard from './StayCard'

const stayData = [
  {
    name: "Hotel Kanha Shyam",
    category: "Luxury (4-Star)",
    price: "₹4,500 / night",
    description: "Premier 4-star luxury hotel in Civil Lines featuring opulent rooms, multi-cuisine dining, and exceptional hospitality.",
    location: "Civil Lines",
    image: "/stays/kanhashyam.jpg"
  },
  {
    name: "The Legend Hotel",
    category: "Boutique",
    price: "₹3,800 / night",
    description: "Chic boutique hotel situated in the city center, offering stylish contemporary suites and easy access to shopping hubs.",
    location: "Civil Lines",
    image: "/stays/legend.jpg"
  },
  {
    name: "Hotel Grand Continental",
    category: "Luxury (4-Star)",
    price: "₹3,200 / night",
    description: "Well-established classic hotel featuring spacious rooms, a swimming pool, and an in-house bakery and restaurant.",
    location: "Civil Lines",
    image: "/stays/grandcontinental.jpg"
  },
  {
    name: "Cennet The Boutique Hotel",
    category: "Boutique",
    price: "₹2,800 / night",
    description: "Modern boutique accommodation with cozy interiors, prompt room service, and convenient proximity to the railway station.",
    location: "Civil Lines",
    image: "/stays/cennet.jpg"
  },
  {
    name: "Kumbh Canvas Luxury Tents",
    category: "Glamping & Tents",
    price: "₹5,000 / night",
    description: "Riverside glamping and luxury tent city experience offering serene views of the Triveni Sangam during seasonal fairs.",
    location: "Arail Ghat",
    image: "/stays/kumbhtents.jpg"
  },
  {
    name: "Hotel Prayag",
    category: "Budget",
    price: "₹1,800 / night",
    description: "Reliable, budget-friendly accommodation with clean rooms and hospitable staff, ideal for pilgrims and transit stays.",
    location: "George Town",
    image: "/stays/hotelprayag.jpg"
  }
]

function Stay({ tripList, addToTrip, removeFromTrip }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'Luxury (4-Star)',
    'Boutique',
    'Glamping & Tents',
    'Budget'
  ]

  const filteredStays = stayData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory
    const query = searchTerm.toLowerCase()
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.price.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  function resetFilters() {
    setSearchTerm('')
    setActiveCategory('All')
  }

  return (
    <div className="attractions">
      <h2>Wher<span className="underline">e to St</span>ay</h2>
      <p>Comfortable stays, boutique hotels, and riverside glamping in Prayagraj</p>

      <div className="catalog-controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search stays by name, location, or price..."
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

      {filteredStays.length === 0 ? (
        <div className="catalog-no-results">
          <p>No accommodations found matching your search.</p>
          <button className="empty-cta-btn" onClick={resetFilters}>Reset Filters</button>
        </div>
      ) : (
        <div className="attraction-menu">
          {filteredStays.map((item) => (
            <StayCard
              key={item.name}
              item={{
                id: item.name,
                title: item.name,
                category: "Stay",
                image: item.image,
                subtitle: `${item.location} • ${item.price}`,
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

export default Stay