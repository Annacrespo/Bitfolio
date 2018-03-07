import React from "react";

export class ProfitLoss extends React.Component {
  render() {
    const numBitcoins = this.props.numBitcoins;
    const price = this.props.price;
    const startingPrice = this.props.startingPrice;
    const value = numBitcoins * price;
    const PL = numBitcoins * (price - startingPrice);
    return (
      <div>
        <div>Bitcoins owned: {numBitcoins}</div>
        <div>Total value: {value} </div>
        <div>P/L:{PL}</div>
      </div>
    );
  }
}