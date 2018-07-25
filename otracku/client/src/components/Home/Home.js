import React, { Component, Fragment } from 'react';
import './Home.css';

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
                <form>
                    <label>Anime Name</label>
                    <input
                        type="text"
                        value={this.state.title}
                        placeholder="Enter An Anime Name"
                        onChange={this.handleTitle}
                    />
                    <button onClick={this.handleSubmit}>Search</button>
                </form>
            </Fragment>
        );
    }
}

export default Home;