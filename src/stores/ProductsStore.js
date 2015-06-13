import { Store } from 'flummox';

export default class ProductsStore extends Store {
  constructor(flux) { // eslint-disable-line no-unused-vars
    super();

    // const actionIds = flux.getActionIds('checkout');
    // this.register(actionIds.getAll, this.onGetAllRequest, this.onGetAllSuccess, this.onGetAllError);

    this.state = {
      products: [{
        id: 1,
        name: 'coca',
        price: 3,
        image: '../assets/tile.png'
      }, {
        id: 2,
        name: 'mate',
        price: 3,
        image: '../assets/tile.png'
      }, {
        id: 3,
        name: 'leite',
        price: 3,
        image: '../assets/tile.png'
      }, {
        id: 4,
        name: 'agua',
        price: 3,
        image: '../assets/tile.png'
      }]
    };
  }

  getProducts() {
    return this.state.products;
  }
}
