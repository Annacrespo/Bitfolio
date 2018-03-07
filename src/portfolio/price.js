import React from "react";

export class Price extends React.Component {
  render() {
    return (
      <div>
        ${this.props.price} {this.props.currency} @ {this.props.time} ms{" "}
      </div>
    );
  }
}
