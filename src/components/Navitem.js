import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navitem extends Component {
  render() {
    return (
      <li id={this.props.item}>
        {/* <Link> tag is the component imported above from the “react-router-dom” as I mentioned they act just like Anchor tag in HTML, in there we have an attribute called “href” to define the URL, in here for the Link tag we have “to” attribute, it’s not an attribute it is a prop of Link component.  */}
        <Link to={this.props.tolink} onClick={this.props.activec.bind(this, this.props.item)}>
          {this.props.item}
        </Link>
      </li>
    );
  }
}

export default Navitem;
