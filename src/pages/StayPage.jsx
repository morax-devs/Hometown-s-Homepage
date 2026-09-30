import Stay from '../components/Stay'

function StayPage({ tripList, addToTrip, removeFromTrip }) {
  return (
    <div>
      <Stay tripList={tripList} addToTrip={addToTrip} removeFromTrip={removeFromTrip} />
    </div>
  )
}

export default StayPage