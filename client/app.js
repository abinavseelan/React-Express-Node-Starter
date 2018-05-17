import React, { Component } from 'react';
import { render } from 'react-dom';
import request from 'axios';

import './app.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            message: '',
        }
    }

    componentDidMount() {
        request
            .get('/message')
            .then(response => {
                this.setState({
                    message: response.data,
                });
            });
    }

    render() {
        return (
            <div>
                <div className="highlight" />
                <div className="container">
                    <h1>{this.state.message}</h1>
                    <div className="info">
                        <h2>
                            Development
                        </h2>

                        <p>
                            To get started with the client-side, edit <code>client/app.js</code>
                        </p>

                        <p>
                            To get started with the server-side, edit <code>server/index.js</code>
                        </p>

                        <p>
                            To run the development server, run <code>npm run start:dev</code>
                        </p>

                        <h2>
                            Production
                        </h2>

                        <p>
                            To build the project for production, run <code>npm run start</code>
                        </p>

                        <div className="t-center">
                            Built with ❤️ by <a href="https://twitter.com/AbinavSeelan">Abinav Seelan</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));