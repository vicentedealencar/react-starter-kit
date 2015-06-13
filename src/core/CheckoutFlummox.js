import { Flux } from 'flummox';
import Dispatcher from './Dispatcher';

export default class CheckoutFlummox extends Flux {

  constructor() {
    super();

    this.dispatcher = Dispatcher;

    this.createActions('checkout', require('../actions/CheckoutActions'));
    this.createStore('products', require('../stores/ProductsStore'), this);
    this.createStore('orders', require('../stores/OrdersStore'), this);
  }
}
