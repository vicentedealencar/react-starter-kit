import { Store } from 'flummox';
import { Map, List } from 'immutable';

const emptyCart = Map({
  itens: Map(),
  total: 0,
  isClosed: false
});

export default class OrdersStore extends Store {
  constructor(flux) {
    super();

    const actionIds = flux.getActionIds('checkout');
    this.register(actionIds.addToCart, this.onAddToCart);
    this.register(actionIds.closeCart, this.onCloseCart);
    this.register(actionIds.openCart, this.onOpenCart);
    this.register(actionIds.confirmPayment, this.onConfirmPayment);

    this.state = {
      cart: emptyCart,
      orders: List()
    };
  }

  onAddToCart(product) {
    const quantityAdded = 1;
    const exists = this.state.cart.get('itens').has(product.id);

    let cart;
    if (exists) {
      cart = this.state.cart.update('itens', itens => itens.update(product.id, p => p.update('quantity', q => q + quantityAdded)));
    } else {
      const item = Map({
        productId: product.id,
        name: product.name,
        quantity: quantityAdded,
        value: product.price * quantityAdded
      });

      cart = this.state.cart.update('itens', itens => itens.set(product.id, item));
    }

    this.setState({
      cart: cart.update('total', total => total + product.price)
    });
  }

  onCloseCart() {
    this.setState({
      cart: this.state.cart.set('isClosed', true)
    });
  }

  onOpenCart() {
    this.setState({
      cart: this.state.cart.set('isClosed', false)
    });
  }

  onConfirmPayment() {
    const order = this.state.cart.update('itens', itensMap => itensMap.toList());

    this.setState({
      orders: this.state.orders.push(order),
      cart: emptyCart
    });
  }

  getCart() {
    return this.state.cart.update('itens', itensMap => itensMap.toList()).toJS();
  }
}
