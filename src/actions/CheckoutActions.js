import { Actions } from 'flummox';

export default class CheckoutActions extends Actions {

  addToCart(product) {
    return product;
  }

  closeCart() {
    return true;
  }

  openCart() {
    return true;
  }

  confirmPayment() {
    return true;
  }
}
