import React from 'react';
import "./Search.css";

// inputValue et onInputChange sont référencer dans le parent(ProductList) on les passe donc en props
const Search = ({inputValue, onInputChange}) => {
  return (
    <div className='--form-control'>
        <input type="text" placeholder='Search product' value={inputValue}onChange={onInputChange}/>
    </div>
  )
}

export default Search;