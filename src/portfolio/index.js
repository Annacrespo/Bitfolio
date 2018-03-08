import React from "react";
import { data } from "../data";
import { Price } from "./price";
import { ProfitLoss } from "./profitLoss";
import LineChart from "react-linechart";
import "../../node_modules/react-linechart/dist/styles.css";

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
    const priceLine = {
      color: "blue",
      points: []
    };
    //new var priceLine created to add data to it in the existing map function on Portfolio
    const priceData = [];
    const prices = data.map((datapoint, index) => {
      const price = datapoint.ticker.price;
      const time = datapoint.timestamp;
      priceLine.points.push = {
        x: time,
        y: price
      };
      return <Price price={price} time={time} />;
    });
    priceData.push(priceLine);
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
        <LineChart width={500} height={400} data={priceData} />
      </div>
    );
  }
}
