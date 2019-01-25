import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class SelectSize extends Component {
    constructor() {
        super();
        this.state = {
        };

    }

    render() {
        return (
            <div id="app">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/small'>small</Link></li>
                        <li><Link to='/large'>large</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SelectSize;
