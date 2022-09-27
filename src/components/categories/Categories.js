import React from 'react';
import "./Categories.css";


//premiere lettre en majuscule 
const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

//filtrage des categories
const Categories = ({categories, filterItems}) => {
  return (
    <div className="--flex-center">
      {categories.map((category, index) => {
        return(
          <button type="button" className="btn --btn --btn-secondary" key={index} 
          onClick={() => filterItems(category)}>
        {capitalize(category)}
      </button>
        )
      })}      
    </div>
  )
}

export default Categories;