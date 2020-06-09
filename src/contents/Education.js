import React, {Component} from 'react';
import Social from '../components/Social'


import Widecard from '../components/Widecard'

class Education extends Component{
    render() {
        return(
            <div className = "condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="School" from="2000" to="2012"></Widecard>
                <Widecard title="College" from="2012" to="2014"></Widecard>
                <Widecard title="University" from="2014" to="2018"></Widecard>
                <Social />
            </div>
        )
    }
}

export default Education;