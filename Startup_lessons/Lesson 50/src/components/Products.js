import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Products = () => {
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedCoffee = localStorage.getItem('coffee');
    const savedSugar = localStorage.getItem('sugar');
    if (savedCoffee) {
      dispatch({ type: 'setCoffee', value: Number(savedCoffee) });
    }
    if (savedSugar) {
      dispatch({ type: 'setSugar', value: Number(savedSugar) });
    }
  }, [dispatch]);

  const incrementCoffee = () => {
    dispatch({ type: 'incrementCoffee' });
  };

  const decrementCoffee = () => {
    dispatch({ type: 'decrementCoffee' });
  };

  const increaseCoffee = () => {
    dispatch({ type: 'increaseCoffee', number: 10 });
  };

  const incrementSugar = () => {
    dispatch({ type: 'incrementSugar' });
  };

  const decrementSugar = () => {
    dispatch({ type: 'decrementSugar' });
  };

  const increaseSugar = () => {
    dispatch({ type: 'increaseSugar', number: 10 });
  };

  return (
    <>
      <div className='product'>
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={incrementCoffee}>+</button>
        <button onClick={decrementCoffee}>-</button>
        {isLoggedIn && <button onClick={increaseCoffee}>+10</button>}
      </div>
      <div className='product'>
        <span>{`Sugar: ${sugar}`}</span>
        <button onClick={incrementSugar}>+</button>
        <button onClick={decrementSugar}>-</button>
        {isLoggedIn && <button onClick={increaseSugar}>+10</button>}
      </div>
      
    </>
  );
};

export default Products;
