import React from 'react';

// export function HelloWorld(props) {
//     return <span>Hello World, {props.name}</span>;
// }

export class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        // api call 
    }

    render() {
        return <span onClick={this.incrementTwo('text').bind(this)}>Hello World, {this.props.name}, count: {this.state.count}</span>;
    }

    increment = text => event => {
        console.log(text);
        console.log(event.type);
        this.setState({count: this.state.count + 1})
    }

    incrementTwo(text) {
        return function (event) {
            console.log(text);
            console.log(event.type);
            this.setState({count: this.state.count + 1})
        }.bind(this)
    }
}