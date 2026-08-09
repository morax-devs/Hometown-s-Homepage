function MyTrip({ tripList }) {
  return (
    <div className="my-trip">
      <h2>My Trip Plan</h2>

      {tripList.length === 0 ? (
        <p>You haven't added anything yet. Browse Attractions and click "Add to trip" to start planning.</p>
      ) : (
        <ul className="trip-list">
          {tripList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MyTrip