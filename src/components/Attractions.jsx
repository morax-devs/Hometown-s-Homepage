import AttractionCard from './AttractionCard'

const attractionsData = [
  {
    title: "Triveni Sangam",
    description: "The sacred confluence of three rivers - Ganga, Yamuna, and the mythical Saraswati. A major pilgrimage site and spiritual hub.",
    image: "/sangam.webp"
  },
  {
    title: "Allahabad Fort",
    description: "A magnificent 16th-century Mughal fort built by Emperor Akbar, featuring stunning architecture and the Akshay Vat tree.",
    image: "/fort.jpg"
  },
  {
    title: "Kumbh Mela",
    description: "The world's largest religious gathering, held every 12 years. Experience the vibrant culture and spiritual energy.",
    image: "/kumbh.webp"
  },
  {
    title: "Anand Bhavan",
    description: "Historic ancestral home of the Nehru family, now a museum showcasing India's freedom struggle.",
    image: "/bhavan.jpg"
  },
  {
    title: "Khurso Bagh",
    description: "A beautiful Mughal garden containing the tombs of Prince Khusrau and his family, showcasing Indo-Persian architecture.",
    image: "/bagh.jpg"
  },
  {
    title: "Ganges Ghats",
    description: "Experience the spiritual rituals, evening aarti ceremonies, and the serene beauty along the sacred riverbanks.",
    image: "/ghat.JPG"
  }
]

function Attractions() {
  return (
    <div className="attractions">
      <h2>Top A<span className="underline">ttrac</span>tions</h2>
      <p>Discover the must-visit places in Prayagraj</p>
      <div className="attraction-menu">
        {attractionsData.map((item) => (
          <AttractionCard
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Attractions