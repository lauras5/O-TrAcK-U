import React, {Component, Fragment} from 'react';
import './Base.css';

class Base extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            title : ''
            // state properties for title search
        }
    }


    // return info from db to fill out the page

    render() {
        return(

            <h1>this is the Base for all pages</h1>
        )
    }
}

export default Base;