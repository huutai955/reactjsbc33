import React, { Component } from 'react'

export default class ChildComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child');
        return null;
    }

    render() {
        console.log('render child')
        return (
            <div className='bg-dark text-light p-5 text-center'>
                Child Component
            </div>
        )
    }

    componentDidMount() {
        console.log('getDerivedStateFromProps Child')
    }
}
