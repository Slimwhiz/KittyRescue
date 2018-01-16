import React, { Component } from 'react';
import { Text } from 'react-native';

import { animateCounter } from '../../lib';

export default class AnimatedCounter extends Component {
    constructor(props){
        super(props);
    }

    state = {
        counter: this.props.counter
    }

    counterSetter = (val, counter) => this.setState({ counter: this.props.fn(val, counter) });

    componentDidMount(){
        const {
            reducer,
            counter,
            firstAcc,
            secondAcc
        } = this.props;

        setTimeout(() => {
            animateCounter({
                fn: this.counterSetter,
                reducer,
                value: counter,
                firstAcc,
                secondAcc
            });
        }, 700);   
    }

    render(){
        const _counter = !!this.props.render ? this.props.render(this.state.counter) : this.state.counter;
        return <Text>{_counter}</Text>
    }
}