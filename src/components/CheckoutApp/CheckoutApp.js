import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './CheckoutApp.less'; // eslint-disable-line no-unused-vars
import withContext from '../../decorators/withContext'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import FluxComponent from 'flummox/component';
import CheckoutFlummox from '../../core/CheckoutFlummox';
import Checkout from './Checkout';

const flux = new CheckoutFlummox();

@withContext
@withStyles(styles)
class CheckoutApp {
  render() {
    return (
      <FluxComponent flux={flux} connectToStores={{
        products: store => ({
          products: store.getProducts()
        }),
        orders: store => ({
          cart: store.getCart()
        })
      }}>
        <Checkout />
      </FluxComponent>
    );
  }
}

export default CheckoutApp;
