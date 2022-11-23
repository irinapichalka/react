import React from 'react';

function Product({ match }) {
  return (
    <div className='product'>{`Product is a ${match.params.productId}`}</div>
  );
}

export default Product;
