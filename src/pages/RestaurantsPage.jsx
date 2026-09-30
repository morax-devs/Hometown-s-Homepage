import Restaurants from '../components/Restaurants'

function RestaurantsPage({ tripList, addToTrip, removeFromTrip }) {
  return (
    <div>
      <Restaurants tripList={tripList} addToTrip={addToTrip} removeFromTrip={removeFromTrip} />
    </div>
  )
}

export default RestaurantsPage