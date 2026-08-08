function AttractionCard({ title, description, image, tripList, addToTrip }) {
  const isAdded = tripList.includes(title)

  return (
    <div className="attraction-column">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => addToTrip(title)} disabled={isAdded}>
        {isAdded ? "Added ✓" : "Add to trip"}
      </button>
    </div>
  )
}

export default AttractionCard