import React, { Component } from "react";
import Social from '../components/Social'


class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <h4>Hey there,</h4>
        <h1>I'm Prerana Bajracharya</h1>
        <h3>
          <u>Web Developer</u> | <u>Software Engineer</u>
        </h3>
        <br></br>
        <p>
          I am professionally working as a software developer. 
          My interests include Machine Learning and AI. I am also interested in Web development.
        </p>
        <Social />
      </div>
    );
  }
}
export default About;
