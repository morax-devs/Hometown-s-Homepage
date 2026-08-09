import Stay from '../components/Stay'

function StayPage({ tripList, addToTrip }) {
  return (
    <div>
      <Stay tripList={tripList} addToTrip={addToTrip} />
    </div>
  )
}

export default StayPage