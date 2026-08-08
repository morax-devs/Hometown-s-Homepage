function AttractionCard({ title, description, image }) {
  return (
    <div className="attraction-column">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default AttractionCard