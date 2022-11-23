import React from 'react';

function Product({ match }) {
  return <div className='product'>{match.params.productId}</div>;
}

export default Product;
