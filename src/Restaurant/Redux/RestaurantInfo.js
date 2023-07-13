import React from 'react';
import { Provider } from 'react-redux';
import RestaurantContainer from './RestaurantContainer';
import store from './Store';
import { fetchRestaurantDetails } from './Action';
import "./RestaurantCont.css";
import { useState, useEffect } from 'react';


const RestaurantInfo = () => {
    const [email, setEmail] = useState('');
  
    useEffect(() => {
      const storedEmail = localStorage.getItem('restaurantEmail');
      if (storedEmail) {
        setEmail(storedEmail);
        store.dispatch(fetchRestaurantDetails(storedEmail));
      }
    }, []);
  
    const handleEmailChange = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      localStorage.setItem('restaurantEmail', newEmail);
      store.dispatch(fetchRestaurantDetails(newEmail));
    };
  
    return (
        <Provider store={store}>
          <div className="app-container">
            <h1 className="app-title">Restaurant Details</h1>
            <form>
              <label className="email-label">
                Enter email for info:
                <input className="email-input" type="email" value={email} onChange={handleEmailChange} required />
              </label>
            </form>
            <RestaurantContainer />
          </div>
        </Provider>
      );
  };

  export default RestaurantInfo;