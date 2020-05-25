/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTest } from '../actions';
import Page2 from './Page2';

class Page1 extends Component {
    // 在constructor的地方建立一個初始state叫text他的初始值是props.testText
    constructor(props) {
        super(props);
        this.porps = props;
        this.state = { textState: props.textProps };
    }

    // 接著透過點擊事件更新state，再發送action去更新store
    // 或者點擊時傳送textProps給handleClick再透過發送action去更新store，然後re-render更新畫面上的數字
    handleClick(num) {
        const { handleAddText } = this.porps;

        // 這是改state的方式
        // const { textState } = this.state;
        // this.setState((prevState) => ({ text: prevState.text + 10 }));
        // handleAddText(textState);

        // 這是改props的方式
        const number = num + 10;
        handleAddText(number);
    }

    render() {
        const { textProps } = this.props;
        const { textState } = this.state;
        return (
            <div>
                <p>我是父組件{textProps}，我是Page1</p>
                <Page2 text={textProps} />
                <div onClick={() => this.handleClick(textProps)} onKeyDown={() => this.handleClick}>我是按鈕請點我</div>
            </div>
        );
    }
}

// mapStateToProps的()裡的state，其實就是你的reducers.js最後combineReducers後的reducer
// 簡單說他就是把你的reducer的值放到這個()裡的state，如果你只有一個reducer且沒有combineReducers
// 那麼這裡的state就會是那個reducer的值
const mapStateToProps = (state) => ({
    textProps: state.addTest,
});

const mapDispatchToProps = (dispatch) => ({
    handleAddText: (e) => { dispatch(addTest(e)); },
});

// 可以寫成這樣
// const Page = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Page1);
// export default Page1

// 也可以寫成這樣
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Page1);
