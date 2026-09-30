import { useState } from 'react'
import AttractionCard from './AttractionCard'

const attractionsData = [
  {
    title: "Triveni Sangam",
    category: "Spiritual",
    description: "The sacred confluence of three rivers - Ganga, Yamuna, and the mythical Saraswati. A major pilgrimage site and spiritual hub.",
    image: "/sangam.webp"
  },
  {
    title: "Allahabad Fort",
    category: "Historical",
    description: "A magnificent 16th-century Mughal fort built by Emperor Akbar, featuring stunning architecture and the Akshay Vat tree.",
    image: "/fort.jpg"
  },
  {
    title: "Kumbh Mela",
    category: "Cultural",
    description: "The world's largest religious gathering, held every 12 years. Experience the vibrant culture and spiritual energy.",
    image: "/kumbh.webp"
  },
  {
    title: "Anand Bhavan",
    category: "Historical",
    description: "Historic ancestral home of the Nehru family, now a museum showcasing India's freedom struggle.",
    image: "/bhavan.jpg"
  },
  {
    title: "Khurso Bagh",
    category: "Historical",
    description: "A beautiful Mughal garden containing the tombs of Prince Khusrau and his family, showcasing Indo-Persian architecture.",
    image: "/bagh.jpg"
  },
  {
    title: "Ganges Ghats",
    category: "Spiritual",
    description: "Experience the spiritual rituals, evening aarti ceremonies, and the serene beauty along the sacred riverbanks.",
    image: "/ghat.JPG"
  },
  {
    title: "Bade Hanuman Ji Temple",
    category: "Spiritual",
    description: "Unique and revered temple near Sangam housing the famous underground reclining idol of Lord Hanuman, submerged during river floods.",
    image: "/attractions/badehanuman.jpg"
  },
  {
    title: "Alopi Devi Mandir",
    category: "Spiritual",
    description: "One of the holy 51 Shaktipeeths where devotees worship a sanctified wooden carriage (doli) rather than a stone idol.",
    image: "/attractions/alopidevi.jpg"
  },
  {
    title: "Chandra Shekhar Azad Park",
    category: "Historical",
    description: "Also known as Company Bagh or Alfred Park, the city's largest colonial-era park where legendary freedom fighter Azad made his final stand.",
    image: "/attractions/companybagh.jpg"
  },
  {
    title: "All Saints Cathedral",
    category: "Historical",
    description: "Majestic 19th-century Gothic Anglican cathedral known locally as Patthar Girja, featuring towering arches and vibrant stained-glass.",
    image: "/attractions/cathedral.jpg"
  },
  {
    title: "Allahabad Museum",
    category: "Cultural",
    description: "Located within Alfred Park, showcasing ancient stone sculptures, bronze artifacts, miniature paintings, and Azad's Colt pistol.",
    image: "/attractions/museum.jpg"
  },
  {
    title: "Fun Gaon Water & Amusement Park",
    category: "Fun & Entertainment",
    description: "The city's biggest water park on Kaushambi Road, famous for its wave pool, thrill tube slides, rain dance floor, and family lawns.",
    image: "/attractions/fungaon.jpg"
  },
  {
    title: "Funplex Gaming Zone",
    category: "Fun & Entertainment",
    description: "Premier modern indoor arcade and entertainment center in WP Arena Mall featuring VR games, bowling, arcade challenges, and racing simulators.",
    image: "/attractions/funplex.jpg"
  },
  {
    title: "Jawahar Planetarium",
    category: "Fun & Entertainment",
    description: "Iconic space dome and astronomy center beside Anand Bhavan offering fascinating celestial shows and interactive science exhibits.",
    image: "/attractions/planetarium.jpg"
  },
  {
    title: "PVR Cinemas (Vinayak City Centre)",
    category: "Fun & Entertainment",
    description: "Prayagraj's premier multiplex movie theater in Civil Lines offering state-of-the-art audiovisual screens, luxury seating, and a lively food court.",
    image: "/attractions/pvrcinemas.jpg"
  }
]

function Attractions({ tripList, addToTrip, removeFromTrip }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Spiritual', 'Historical', 'Cultural', 'Fun & Entertainment']

  const filteredAttractions = attractionsData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  function resetFilters() {
    setSearchTerm('')
    setActiveCategory('All')
  }

  return (
    <div className="attractions" id="attractions">
      <h2>Top A<span className="underline">ttrac</span>tions</h2>
      <p>Discover the must-visit places and sacred landmarks in Prayagraj</p>

      <div className="catalog-controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search attractions by name or keyword..."
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

      {filteredAttractions.length === 0 ? (
        <div className="catalog-no-results">
          <p>No attractions found matching your search.</p>
          <button className="empty-cta-btn" onClick={resetFilters}>Reset Filters</button>
        </div>
      ) : (
        <div className="attraction-menu">
          {filteredAttractions.map((item) => (
            <AttractionCard
              key={item.title}
              item={{
                id: item.title,
                title: item.title,
                category: "Attraction",
                image: item.image,
                subtitle: item.category,
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

export default Attractions