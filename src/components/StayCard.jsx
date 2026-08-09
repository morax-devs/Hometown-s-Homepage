function StayCard({name, price, description, location, image, tripList, addToTrip}){
    const isAdded = tripList.includes(name)

  return (
    <div className="attraction-column">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="tag">{location} • {price}</p>
      <p>{description}</p>
      <button onClick={() => addToTrip(name)} disabled={isAdded}>
        {isAdded ? "Added ✓" : "Add to trip"}
      </button>
    </div>
  )
}

export default StayCard