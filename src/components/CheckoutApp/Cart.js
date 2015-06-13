import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Button } from 'react-bootstrap';

export default class Cart {
  static propTypes = {
    cart: PropTypes.object
  };

  static contextTypes = {
    flux: PropTypes.object
  };

  render() {
    const { cart } = this.props;
    const cartItens = cart.itens.map(i => <CartItem item={i} />);
    const button = cart.isClosed ?
      <Button onClick={this.openCart()}>OPEN</Button> :
      <Button onClick={this.closeCart()}>CLOSE</Button>;

    return (
      <div>
        <h2>Cart</h2>
        {cartItens}
        {cart.total}
        {button}
      </div>
    );
  }

  closeCart() {
    return () => this.context.flux.getActions('checkout').closeCart();
  }

  openCart() {
    return () => this.context.flux.getActions('checkout').openCart();
  }
}

class CartItem {
  static propTypes ={
    item: PropTypes.object
  };

  render() {
    const { item } = this.props;

    console.log('render item', item);

    return (
      <div>
        {item.name}
        {item.quantity}
        {item.value}
      </div>
    );
  }
}
