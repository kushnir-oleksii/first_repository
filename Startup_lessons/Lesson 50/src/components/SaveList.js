import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);
  const dispatch = useDispatch();

  const clearData = () => {
    dispatch({ type: 'clearData' });
    localStorage.removeItem('coffee');
    localStorage.removeItem('sugar');
  };

  const saveData = () => {
    localStorage.setItem('coffee', coffee.toString());
    localStorage.setItem('sugar', sugar.toString());
  };

  const Logout = () => {
    dispatch({ type: 'logout' });
    // dispatch({ type: 'clearData' });
    // localStorage.clear();
  };

  return (
    <div className='save'>
      {!isLoggedIn && <p>You must be logged in to save the list.</p>}
      {isLoggedIn && (
        <div className='save'>
          <button onClick={saveData}>Save</button>
          <button onClick={clearData}>Clear</button>
          <button onClick={Logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default SaveList;
