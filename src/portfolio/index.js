import React from "react";
import { data } from "../data";
import { Price } from "./price";
import { ProfitLoss } from "./profitLoss";

export class Portfolio extends React.Component {
  state = {
    numBitcoins: 4
  };
  //use state to manage how component renders and behaves
  handleChange = evt => {
    this.setState({ numBitcoins: evt.target.value });
  };
  //onChange event function updates value automatically controls numBitcoins on Porfolio component
  render() {
    const prices = data.map((datapoint, index) => {
      const price = datapoint.ticker.price;
      const time = datapoint.timestamp;
      const currency = datapoint.ticker.target;
      return (
        <Price
          key={`${index}-${time}`}
          price={price}
          currency={currency}
          time={time}
        />
      );
    });
    return (
      <div>
        <div>
          Bitcoins owned:{" "}
          <input
            type="text"
            value={this.state.numBitcoins}
            onChange={this.handleChange}
            //input components like user interaction must be defined in react
            //value must be linked to numBitcoins variable and function that defines how it will update
          />
        </div>
        <ProfitLoss
          numBitcoins={this.state.numBitcoins}
          //set state value for numBitcoins as the prop to the Porfolio component
          //if Portfolio state ever changes component will update automatically
          price={data[0].ticker.price}
          startingPrice={data[data.length - 1].ticker.price}
          //starting price as last element on the array
        />
        {prices}
      </div>
    );
  }
}
