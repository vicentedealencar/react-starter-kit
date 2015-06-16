import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Catalog from './Catalog';
import Cart from './Cart';
import Payment from './Payment';

export default class CheckoutApp {
  static propTypes = {
    products: PropTypes.array,
    cart: PropTypes.object
  };

  render() {
    const { products, cart } = this.props;

    let catalog = !cart.isClosed ? <Catalog products={products}/> : null;
    let payment = cart.isClosed ? <Payment cart={cart}/> : null;

    return (
      <div>
        <h1>Checkout</h1>
        {catalog}
        <Cart cart={cart}/>
        {payment}
      </div>
    );
  }
}
