import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export default class Catalog {
  static propTypes = {
    products: PropTypes.array
  };

  render() {
    const { products } = this.props;

    const catalogItens = products.map(p => <CatalogItem product={p} key={p.id} />);

    return (
      <div>
        <h2>Catalog</h2>
        {catalogItens}
      </div>
    );
  }
}

class CatalogItem {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  static contextTypes = {
    flux: PropTypes.object
  };

  render() {
    const { product } = this.props;

    return (
      <div onClick={this.addToCart(product)}>
        {product.name}
        {product.price}
        {product.image}
      </div>
    );
  }

  addToCart(product) {
    return () => this.context.flux.getActions('checkout').addToCart(product);
  }
}
