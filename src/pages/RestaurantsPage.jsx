import Restaurants from '../components/Restaurants'

function RestaurantsPage({ tripList, addToTrip }) {
  return (
    <div>
      <Restaurants tripList={tripList} addToTrip={addToTrip} />
    </div>
  )
}

export default RestaurantsPage