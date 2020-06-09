import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
// import backpic from "../img/diamond.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        {/* <div id ="diamond">
        <img src={backpic} className="backpic"></img>
        </div> */}
        <div className="typinghome" id="typing">
          <ReactTypingEffect
            className="typingeffect"
            text={["I am Prerana Bajracharya.", "I am a web developer"]}
            speed={100}
            eraseDelay={700}
          />
          <div id="socialhome">
            <Social />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
