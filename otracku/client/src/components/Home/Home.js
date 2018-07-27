import React, { Component, Fragment } from 'react';
import './Home.css';
import { Button } from 'react-materialize';

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            title: ''
        };
    }

    handleTitle = e => {
        this.setState({ title: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault()

        const Title = this.state.title
        console.log(`The anime name is ${Title}`)
        // if title is there, pull title info
        // else, send error message and add title to db
        // 
    }

    render() {
        return (
            <Fragment>
                <form id="inputSection">
                    <label>Anime Name</label>
                    <input
                        id="inputText"
                        type="text"
                        value={this.state.title}
                        placeholder="Enter An Anime Name"
                        onChange={this.handleTitle}
                    />
                    <Button id="searchBtn"
                        onClick={this.handleSubmit} >
                        Search
                    </Button>
                </form>
            </Fragment>
        );
    }
}

export default Home;