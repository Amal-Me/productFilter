import React from 'react';
import "./Product.css";

//on passe les datas en props
const Product = ({title, img, price}) => {
  return (
    <div className='product --card'>
      {/* on place les props dynamiquement */}
        <img src={img} alt="product" />
        <div className='--bg-primary --center-all --p'>
          <h3 className='--text-light'>{title}</h3>
          <div className='--flex-between --width-100'>
            <p className='--text-light'>{price}</p>
            <button className='--btn --btn-danger'>
              Add to cart
            </button>
          </div>
        </div>
    </div>
  )
}

export default Product;