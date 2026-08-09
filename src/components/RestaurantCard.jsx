function RestaurantCard({ name, cuisine, price, description, image, tripList, addToTrip }) {
  const isAdded = tripList.includes(name)

  return (
    <div className="attraction-column">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="tag">{cuisine} • {price}</p>
      <p>{description}</p>
      <button onClick={() => addToTrip(name)} disabled={isAdded}>
        {isAdded ? "Added ✓" : "Add to trip"}
      </button>
    </div>
  )
}

export default RestaurantCard
