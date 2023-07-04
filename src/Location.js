import React, { useState, useEffect, useRef } from 'react';
import foodImage1 from './pexels-ella-olsson-1640772.jpg';
import foodImage2 from './pexels-alexy-almond-3756523.jpg';
import foodImage3 from './pexels-sebastian-coman-photography-3655916.jpg';
import foodImage4 from './pexels-terje-sollie-299347.jpg';
import './Location.css';
import Signup from './Signup';
import Login from './Login';

function LocationInput({ onSignupClick , onLoginClick}) {
  const [location, setLocation] = useState('');
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('Hungry?');
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [foodImage1, foodImage2, foodImage3, foodImage4];
  const signupRef = useRef();
  const loginRef = useRef();

  useEffect(() => {
    const messageQueue = [
      ' "Hungry?" ',
      ' "Unexpected Guests?"',
      '"Cravings for cakes?"',
      ' "Your Favorite Food delivery Partner"',
      '"Directly to your doorstep"',
      '"Good food within minutes"',
      '"Delivering happiness"',
      '"Straight out of the kitchen to your doorstep"',
      '"The best service to fulfill your expectation"',
      '"Delivering lip-smacking food is our passion"',
      '"We deliver it hot and yummy"',
    ];

    const displayNextMessage = () => {
      setCurrentMessage(messageQueue[messageIndex]);
      setMessageIndex((prevIndex) => (prevIndex + 1) % messageQueue.length);
    };

    const messageIntervalId = setInterval(displayNextMessage, 1500);

    return () => {
      clearInterval(messageIntervalId);
    };
  }, [messageIndex]);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const imageIntervalId = setInterval(changeImage, 3000);

    return () => {
      clearInterval(imageIntervalId);
    };
  }, [images.length]);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Location:', location);
  };

  const handleAutoDetect = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(position.coords);
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=9b298ff42629410aa521aaa2f8e5a524`
            );
            const data = await response.json();
            const address = data.results[0].formatted;
            console.log('Current Address:', address);
            setLocation(address);
          } catch (error) {
            console.error('Geolocation Error:', error);
          }
        },
        (error) => {
          console.error('Geolocation Error:', error);
        }
      );
    }
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseSignupForm = (event) => {
    if (event.target === signupRef.current) {
      setShowSignupForm(false);
    }
  };

  const handleCloseLoginForm = (event) => {
    if (event.target === loginRef.current) {
      setShowLoginForm(false);
    }
  };

  return (
    <div className="location-container">
      {showSignupForm && (
        <div className="signup-overlay" ref={signupRef} onClick={handleCloseSignupForm}>
          <div className="signup-form">
            <button className="close-button" onClick={() => setShowSignupForm(false)}>
              X
            </button>
            <Signup />
          </div>
        </div>
      )}
      {showLoginForm && (
        <div className="login-overlay" ref={loginRef} onClick={handleCloseLoginForm}>
          <div className="login-form">
            <button className="close-button" onClick={() => setShowLoginForm(false)}>
              X
            </button>
            <Login />
          </div>
        </div>
      )}
      <img src={images[currentImageIndex]} alt="Food" className="food-image" />
      <div className="location-form-container">
        <h2 className="location-title">Detect Location</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={location}
            onChange={handleInputChange}
            placeholder="Enter your location"
            className="location-input"
          />
          <button type="submit" className="location-submit">
            Search
          </button>
        </form>
        <p className="auto-detect" onClick={handleAutoDetect}>
          Auto Detect
        </p>
        <div className="quote">
          <p className="morphic-text">{currentMessage}</p>
        </div>
      </div>
      <div className="btn">
        <button onClick={handleSignupClick}>SignUp</button>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default LocationInput;



// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import foodImage1 from './pexels-ella-olsson-1640772.jpg';
// import foodImage2 from './pexels-alexy-almond-3756523.jpg';
// import foodImage3 from './pexels-sebastian-coman-photography-3655916.jpg';
// import foodImage4 from './pexels-terje-sollie-299347.jpg';
// import './Location.css';

// function LocationInput() {
//   const history = useHistory();
//   const [location, setLocation] = useState('');
//   const [currentMessage, setCurrentMessage] = useState('Hungry?');
//   const [messageIndex, setMessageIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [foodImage1, foodImage2, foodImage3, foodImage4];

//   useEffect(() => {
//     const messageQueue = [
//       ' "Hungry?" ',
//       ' "Unexpected Guests?"',
//       '"Cravings for cakes?"',
//       ' "Your Favorite Food delivery Partner"',
//       '"Directly to your doorstep"',
//       '"Good food within minutes"',
//       '"Delivering happiness"',
//       '"Straight out of the kitchen to your doorstep"',
//       '"The best service to fulfill your expectation"',
//       '"Delivering lip-smacking food is our passion"',
//       '"We deliver it hot and yummy"'
//     ];

//     const displayNextMessage = () => {
//       setCurrentMessage(messageQueue[messageIndex]);
//       setMessageIndex((prevIndex) => (prevIndex + 1) % messageQueue.length);
//     };

//     const messageIntervalId = setInterval(displayNextMessage, 2000);

//     return () => {
//       clearInterval(messageIntervalId);
//     };
//   }, [messageIndex]);

//   useEffect(() => {
//     const changeImage = () => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const imageIntervalId = setInterval(changeImage, 4000);

//     return () => {
//       clearInterval(imageIntervalId);
//     };
//   }, [images.length]);

//   const handleInputChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Location:', location);
//   };

//   const handleSignupClick = () => {
//     history.push('/signup');
//   };

//   const handleLoginClick = () => {
//     history.push('/login');
//   };

//   const handleAutoDetect = async () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log(position.coords);
//           try {
//             const response = await fetch(
//               `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`
//             );
//             const data = await response.json();
//             if (data.results && data.results.length > 0) {
//               const address = data.results[0].formatted_address;
//               setLocation(address);
//             } else {
//               console.error('No address found for the given coordinates.');
//             }
//           } catch (error) {
//             console.error('Error fetching address:', error);
//           }
//         },
//         (error) => {
//           console.error('Error getting current location:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   };

//   return (
//     <div className="location-input-container">
//       <form onSubmit={handleSubmit} className="location-input-form">
//         <div className="btn">
//           <button onClick={handleSignupClick}>Signup</button>
//           <button onClick={handleLoginClick}>Login</button>
//         </div>
//         <div className="message-container">
//           <p className="morphic-text morphic-animation">{currentMessage}</p>
//         </div>
//         <p>" Order food from Favorite restaurants near you!! "</p>
//         <label htmlFor="locationInput" className="location-input-label">
//           Enter Location:
//         </label>
//         <input
//           id="locationInput"
//           type="text"
//           value={location}
//           onChange={handleInputChange}
//           placeholder="New York, NY"
//           className="location-input"
//         />
//         <button type="submit" className="location-input-button">
//           Submit
//         </button>
//         <button type="button" onClick={handleAutoDetect} className="location-input-button">
//           AutoDetect
//         </button>
//         <div className="quote">
//           <p>
//             " Everyone loves food. Looking at it. Smelling it. Taking pictures of it. Making it. Eating it. Posting
//             it on Instagram and Pinterest. And of course, talking about it! Food is symbolic of love when words are
//             inadequate, we watch cooking change the cook, just as it transforms the food, we know once people get
//             connected to real food, they never change back. "
//           </p>
//         </div>
//       </form>
//       <img src={images[currentImageIndex]} alt="Food" className="location-input-image" />
//     </div>
//   );
// }

// export default LocationInput;



// // const handleAutoDetect = () => {
// //   if (navigator.geolocation) {
// //     navigator.geolocation.getCurrentPosition(
// //       async (position) => {
// //         const { latitude, longitude } = position.coords;
// //         try {
// //           const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
// //           const response = await fetch(
// //             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
// //           );
// //           const data = await response.json();
// //           if (data.results.length > 0) {
// //             const address = data.results[0].formatted_address;
// //             setLocation(address);
// //           }
// //         } catch (error) {
// //           console.error('Error fetching address:', error);
// //         }
// //       },
// //       (error) => {
// //         console.error('Error getting current location:', error);
// //       }
// //     );
// //   } else {
// //     console.error('Geolocation is not supported by this browser.');
// //   }
// // };
