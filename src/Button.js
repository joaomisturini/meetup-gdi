import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0
        };
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                clicks: prevState.clicks + 1
            };
        });

        this.props.onClick();
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Contagem: {this.state.clicks}
            </button>
        );
    }
}

export default Button;
