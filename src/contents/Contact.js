import React, { Component } from 'react'
import Social from '../components/Social'

export default class Contact extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>Contact Me</h1>
                <h3>Gmail: bajracharya2prerana@gmail.com</h3>
                <h3>Outlook: prerana.bajracharya@outlook.com</h3>
                <Social />
            </div>
        )
    }
}
