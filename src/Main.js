import React, { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './Main.css';
import axios from 'axios';

const Sidebar = () => {
  const [showCuisineList, setShowCuisineList] = useState(false);
  const [showDietaryList, setShowDietaryList] = useState(false);
  const [showDeliveryTimeList, setShowDeliveryTimeList] = useState(false);
  const [showRatingsList, setShowRatingsList] = useState(false);
  const [showLocationList, setShowLocationList] = useState(false);
  const [specificArea, setSpecificArea] = useState('');

  const handleToggleCuisineList = () => {
    setShowCuisineList(!showCuisineList);
  };

  const handleToggleDietaryList = () => {
    setShowDietaryList(!showDietaryList);
  };

  const handleToggleDeliveryTimeList = () => {
    setShowDeliveryTimeList(!showDeliveryTimeList);
  };

  const handleToggleRatingsList = () => {
    setShowRatingsList(!showRatingsList);
  };

  const handleToggleLocationList = () => {
    setShowLocationList(!showLocationList);
  };
  
  const handleSpecificAreaChange = (event) => {
    setSpecificArea(event.target.value);
  };

  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <div>
        <button className="filter-button" onClick={handleToggleCuisineList}>Cuisine Type</button>
        {showCuisineList && (
          <ul>
            <li><input type="checkbox" /> Chinese</li>
            <li><input type="checkbox" />  Italian</li>
            <li><input type="checkbox" /> Mexican</li>
            <li><input type="checkbox" /> Indian</li>
          </ul>
        )}
      </div>

      <div>
        <button  className="filter-button" onClick={handleToggleDietaryList}>Dietary Preferences</button>
        {showDietaryList && (
          <ul>
            <li><input type="checkbox" /> Vegetarian</li>
            <li><input type="checkbox" /> Vegan</li>
            <li><input type="checkbox" /> Gluten-Free</li>
            <li><input type="checkbox" /> Dairy-Free</li>
          </ul>
        )}
      </div>

      <div>
        <button className="filter-button" onClick={handleToggleDeliveryTimeList}>Delivery Time</button>
        {showDeliveryTimeList && (
          <ul>
            <li><input type="checkbox" /> Fast Delivery</li>
            <li><input type="checkbox" /> Within 30 Minutes</li>
          </ul>
        )}
      </div>

      <div>
        <button  className="filter-button" onClick={handleToggleRatingsList}>Ratings and Reviews</button>
        {showRatingsList && (
          <ul>
            <li><input type="checkbox" /> 4 Stars and Above</li>
            <li><input type="checkbox" /> 3 Stars and Above</li>
            <li><input type="checkbox" /> 2 Stars and Above</li>
          </ul>
        )}
      </div>

      <div>
        <button className="filter-button" onClick={handleToggleLocationList}>Location</button>
        {showLocationList && (
          <ul>
            <li><input type="checkbox" /> Nearby</li>
            <li>Specific Area:
            <input
          type="text"
          value={specificArea}
          onChange={handleSpecificAreaChange}
          placeholder="Enter specific area"
        />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
 }

const Header = () => {
  return (
    <div className="header">
      <h1 className="main-heading"> <b>KHATEJAO</b></h1>
      <p className="slogan">- It’s good, it’s greasy, it’s fattening but what the hay I am all for it.</p>
    </div>
  );
};

const NavigationBar = ({ handleLogout }) => {
  // const [sessionToken, setSessionToken] = useState('');

  // const handleLogoutClick = () => {
  //   handleLogout(sessionToken);
  //   setSessionToken('');
  // };

  // const handleSessionTokenChange = (event) => {
  //   setSessionToken(event.target.value);
  // };
  return (
    <div className="navigation-bar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Order Food</li>
        <li className="nav-item">Cart</li>
        <li className="nav-item">Delivery Partner</li>
      </ul>
      <div className="logout">
        {/* <input type="text" defaultValue={sessionToken} onChange={handleSessionTokenChange} style={{ display: 'none' }} /> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

const Main = () => {
  const location = useLocation();
  const sessionToken = location.state?.sessionToken;
  const handleLogout = () => {
    axios
      .post('http://localhost:8000/logout', { session_token: sessionToken })
      .then((response) => {
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Logout failed:', error);
        if (error.response) {
          console.log('Response data:', error.response.data);
        }
      });      
  };
  

  return (
    <div>
      <Header />
      <NavigationBar handleLogout={handleLogout} />
      <Sidebar />
    </div>
  );
};

export default Main;
