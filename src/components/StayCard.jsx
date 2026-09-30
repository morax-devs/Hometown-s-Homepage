function StayCard({ item, name, price, description, location, image, tripList, addToTrip, removeFromTrip }) {
  const currentItem = item || {
    id: name,
    title: name,
    category: 'Stay',
    image,
    subtitle: `${location} • ${price}`,
    description
  }
  const isAdded = tripList.some(
    (existing) => (existing.id || existing.title || existing.name) === currentItem.id
  )

  return (
    <div className="attraction-column">
      <img src={currentItem.image} alt={currentItem.title} />
      <h3>{currentItem.title}</h3>
      <p className="tag">{currentItem.subtitle}</p>
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

export default StayCard