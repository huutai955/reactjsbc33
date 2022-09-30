import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

export default class ReactLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }
    render() {
        console.log('render')
        return (
            <div className='container'>
                Component (parent)

                <hr />
                <ChildComponents />
            </div>
        )
    }


    componentDidMount() {

    }
 }
