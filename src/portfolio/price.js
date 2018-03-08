import React from "react";

export class Price extends React.Component {
  render() {
    return (
      <div>
        ${this.props.price} {this.props.currency} USD @ {this.props.time} ms{" "}
      </div>
    );
  }
}
