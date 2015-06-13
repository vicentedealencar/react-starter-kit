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
    console.log('render checkout');
    const { products, cart } = this.props;

    console.log('products', products);
    console.log('cart', cart);

    let catalog, payment;

    if (!cart.isClosed) {
      catalog = <Catalog products={products}/>;
    } else {
      payment = <Payment cart={cart}/>;
    }

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
