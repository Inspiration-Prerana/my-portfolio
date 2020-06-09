import React, {Component} from 'react'
import Social from '../components/Social'


class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            'myskills' : ['Java', 'HTML', 'CSS'],
        }
    }
    render() {
        return(
            <div className='condiv skills'>
                <h1 className='subtopic'>My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <Social />
            </div>
        )
    }
}

export default Skills;