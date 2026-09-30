import Attractions from '../components/Attractions'

function AttractionsPage({ tripList, addToTrip, removeFromTrip }) {
  return (
    <div>
      <Attractions tripList={tripList} addToTrip={addToTrip} removeFromTrip={removeFromTrip} />
    </div>
  )
}

export default AttractionsPage