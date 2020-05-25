/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component, PureComponent } from 'react';

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.porps = props;
        // console.log('page2 this.porps', this.porps);
    }

    render() {
        // console.log('page2 render text', this.porps.text);
        const { text } = this.props;
        return (
            <div>
                <p>我是子組件的{text}，我的text來自於我的父阻件Page1</p>
            </div>
        );
    }
}

export default Page2;
