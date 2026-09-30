function AttractionCard({ item, title, description, image, tripList, addToTrip, removeFromTrip }) {
  const currentItem = item || {
    id: title,
    title,
    description,
    image,
    category: 'Attraction'
  }
  const isAdded = tripList.some(
    (existing) => (existing.id || existing.title || existing.name) === currentItem.id
  )

  return (
    <div className="attraction-column">
      <img src={currentItem.image} alt={currentItem.title} />
      <h3>{currentItem.title}</h3>
      <p>{currentItem.description}</p>
      {isAdded ? (
        <button
          className="btn-trip added"
          onClick={() => removeFromTrip && removeFromTrip(currentItem.id)}
          title="Click to remove from your trip plan"
        >
          ✓ In Trip (Remove)
        </button>
      ) : (
        <button className="btn-trip" onClick={() => addToTrip(currentItem)}>
          + Add to trip
        </button>
      )}
    </div>
  )
}

export default AttractionCard