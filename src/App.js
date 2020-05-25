import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Page1 from './Page/Page1';

// 準備要做的事
// 目前遇到的問題為事件有觸發action，也有進入reducer也順利取到action發過來的值，
// 但是畫面上的props並未有更新，
// 理論上來講props的異動應該會觸發rerender，所以我假設應該是在reducer這邊還有一點問題沒處理好
// 最後再順便安裝一下Redux Dev Tools

class App extends Component {
    constructor(props) {
        super(props);
        this.porps = props;
    }

    render() {
        return (
            <div className="App">
                <h1>Hello, World!123</h1>
                <Page1 />
            </div>
        );
    }
}

export default hot(module)(App);
