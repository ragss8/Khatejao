// import React, { useState, useEffect } from 'react';
// import { Provider, useDispatch } from 'react-redux';
// import MenuCont from '../MenuRedux/MenuCont';
// import store from './Store';
// import { fetchMenuItems } from '../MenuRedux/MenuAction';

// const MenuInfo = () => {
//   const [restaurant_id, setRestaurant_id] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const storedRestaurant_id = localStorage.getItem('restaurant_id');
//     if (storedRestaurant_id) {
//       setRestaurant_id(storedRestaurant_id);
//       dispatch(fetchMenuItems(storedRestaurant_id)); 
//     }
//   }, [dispatch]);

//   const handleIdChange = (event) => {
//     const newId = event.target.value;
//     setRestaurant_id(newId);
//     localStorage.setItem('restaurant_id', newId);
//     dispatch(fetchMenuItems(newId));
//   };

//   return (
//     <Provider store={store}>
//       <div className="app-container">
//         <form>
//           <label className="restaurant-label">
//             Enter Restaurant ID:
//             <input
//               className="restaurant-input"
//               type="text"
//               value={restaurant_id}
//               onChange={handleIdChange}
//               required
//             />
//           </label>
//         </form>
//         <MenuCont restaurant_id={restaurant_id} />
//       </div>
//     </Provider>
//   );
// };

// export default MenuInfo;
