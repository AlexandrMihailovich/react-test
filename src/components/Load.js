import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Load extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={'row align-items-center justify-content-center full-height'}>
                <div id="fountainG">
                    <div id="fountainG_1" className={"fountainG"}></div>
                    <div id="fountainG_2" className={"fountainG"}></div>
                    <div id="fountainG_3" className={"fountainG"}></div>
                    <div id="fountainG_4" className={"fountainG"}></div>
                    <div id="fountainG_5" className={"fountainG"}></div>
                    <div id="fountainG_6" className={"fountainG"}></div>
                    <div id="fountainG_7" className={"fountainG"}></div>
                    <div id="fountainG_8" className={"fountainG"}></div>
                </div>
            </div>
        );
    }
}

export default Load;
