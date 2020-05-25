# react redux的第二次練習
目的：希望對react的redux在建置上能夠更熟悉一點

## 心得
這一次下來對redux的整個流程又更清楚了一點，從建立action、reducer、store，
到在component接porps跟發action傳值到store並讓畫面上的props更新，
也讓接收父元件props的子元件跟著更新。

## 目前唯一搞不懂的問題
就是元件在接收props的更新問題   
以Page2來看，這樣寫就可以接到父元件傳進來的更新後的props    
第一個寫法
```javascript
    render() {
        const { text } = this.props;
        return (
            <div>
                <p>我是子組件的{text}，我的text來自於我的父阻件Page1</p>
            </div>
        );
    }
```
第二個寫法，這樣不會更新
```javascript
    render() {
        return (
            <div>
                <p>我是子組件的{this.props.text}，我的text來自於我的父阻件Page1</p>
            </div>
        );
    }
```

我在這裡卡了一段時間，一開始先寫第二個寫法的方式時，一直搞不懂為什麼父元件的狀態都更新了，子元件的卻不動，後來換成第一寫法就可以了  
到現在還是不懂，都是this.porps的text為什麼第二個的不行。