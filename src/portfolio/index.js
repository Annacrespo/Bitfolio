import React from "react";
import { data } from "../data";
import { Price } from "./price";
import { ProfitLoss } from "./profitLoss";

export class Portfolio extends React.Component {
  state = {
    numBitcoins: 4
  };

  render() {
    const prices = data.map((datapoint, index) => {
      const price = datapoint.ticker.price;
      const time = datapoint.ticker.time;
      return <Price key={`${index}-${time}`} price={price} time={time} />;
    });
    return (
      <div>
        <ProfitLoss
          numBitcoins={this.state.numBitcoins}
          price={data[data.length - 1].ticker.price}
          startingPrice={data[0].ticker.price}
        />
        {prices}
      </div>
    );
  }
}
