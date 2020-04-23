import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, rating }) {
return (
  <div>
    <h1>I like { name }</h1>
    <h4>{rating}/5.0</h4>
  </div>
  );
}

const foodILike = [
  {
    id:1,
    name:"saba",
    rating: 5
  },
  {
    id:2,
    name:"katsudon",
    rating: 4.8
  },
  {
    id:3,
    name:"pizza",
    rating:4.7
  }
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} rating={dish.rating}/>)}
      
    </div>
  );
}

export default App;
