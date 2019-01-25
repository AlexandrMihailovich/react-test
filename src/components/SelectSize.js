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
                <div className={'row align-items-center justify-content-center full-height'}>
                    <nav className={'col'}>
                        <ul className={'list-unstyled'}>
                            <li className={'p-2'}><Link to='/small' className={'btn btn-primary btn-block'}>Мало</Link></li>
                            <li className={'p-2'}><Link to='/large' className={'btn btn-primary btn-block'}>Много</Link></li>
                        </ul>
                    </nav>
                </div>
        );
    }
}

export default SelectSize;
