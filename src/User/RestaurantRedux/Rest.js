import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../RestaurantRedux/Action';
import { useHistory } from 'react-router-dom'; 
import '../RestaurantRedux/Rest.css';

const App = () => {
  const dispatch = useDispatch();
  const { restaurants, loading, error } = useSelector((state) => state.restaurant);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRestaurantClick = (restaurantName) => {
    history.push(`/menu?restaurant=${restaurantName}`);
  };

  return (
    <div className="rest-container">
      <ul className='list'>
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.restaurantName}
            className='rest-li'
            onClick={() => handleRestaurantClick(restaurant.restaurantName)}
          >
            <strong>{restaurant.restaurantName}</strong>
            <div className="restaurant-details">
              <div>{restaurant.address}</div>
              <div>Cuisine Type: {restaurant.cuisineType}</div> 
              <div>Delivery Time: {restaurant.deliveryTime}</div> 
              <div>Average Rating: {restaurant.averageRating}</div> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
