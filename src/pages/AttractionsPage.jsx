import Attractions from '../components/Attractions'

function AttractionsPage({ tripList, addToTrip }) {
  return (
    <div>
      <Attractions tripList={tripList} addToTrip={addToTrip} />
    </div>
  )
}

export default AttractionsPage