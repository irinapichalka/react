import React from 'react';
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

class ShoppingCart extends React.Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };
  render() {
    const count = this.state.cartItems.length;
    console.log(this.props.userData.firstName);
    console.log(this.state.cartItems);

    return (
      <div className='column'>
        <CartTitle userName={this.props.userData.firstName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
