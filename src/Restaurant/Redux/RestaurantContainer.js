import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurantDetails } from './Action';
import "./RestaurantCont.css"

const RestaurantContainer = ({ email }) => {
  const dispatch = useDispatch();
  const { restaurantDetails, loading, error } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(fetchRestaurantDetails(email));
  }, [dispatch, email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {restaurantDetails && (
        <div className='details-container'>
          <h2>{restaurantDetails.restaurantName}</h2>
          <p>Address: {restaurantDetails.address}</p>
          <p>Phone Number: {restaurantDetails.phoneNumber}</p>
          <p>Email: {restaurantDetails.email}</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantContainer;
