import React, { Component } from 'react';
import Button from './Button';

class ButtonWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick} />
                <Button onClick={this.handleClick} />
                <Button onClick={this.handleClick} />
                <p>Cliques: {this.state.clicks}</p>
            </div>
        );
    }
}

export default ButtonWrapper;
