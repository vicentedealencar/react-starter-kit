import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Button } from 'react-bootstrap';

export default class Payment {
  static propTypes = {
    cart: PropTypes.object
  };

  static contextTypes = {
    flux: PropTypes.object
  };

  render() {
    const { cart } = this.props;

    return (
      <div>
        <h2>Payment</h2>
        {cart.total}
        <Button onClick={this.confirmPayment()} bsStyle="primary">CONFIRM</Button>
      </div>
    );
  }

  confirmPayment() {
    return () => this.context.flux.getActions('checkout').confirmPayment();
  }
}
