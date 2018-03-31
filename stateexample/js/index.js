var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//https://jdub7138.blog.me/221071408817 참고 사이트

//함수사용
// function Clock(props) {
//   return (
//    <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2> 
//     </div>
//   );
// }

// //클래스 사용 props
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//        <h1>Hello, world!</h1>
//        <h2>It is {this.props.date.toLocaleTimeString()}.</h2> 
//      </div>
//     );
//   }
// }

function FormattedDate(props) {
  return React.createElement(
    'h2',
    null,
    ' It is ',
    props.date.toLocaleTimeString(),
    '. '
  );
}

//클래스 사용 state

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = { date: new Date() };
    return _this;
  }

  _createClass(Clock, [{
    key: 'tick',
    value: function tick() {
      //setState를 통해 state를 업데이트하는 함수.
      this.setState({
        date: new Date()
      });
    }

    //컴포넌트가 돔에 render 후 실행되는 라이프사이클

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      //tick이라는것을 1초에 한번실행하고 반환되는것이 timerID에 저장된다.
      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'render',
    value: function render() {
      return (//state로 했기 때문에 state가 변경될 때마다 갱신된다.
        React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Hello, world!'
          ),
          React.createElement(FormattedDate, { date: this.state.date })
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

// function tick() {
//   ReactDOM.render(
//     <Clock date = {new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);  //1초에 한번씩 tick을 부른다.


function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Clock, null),
    React.createElement(Clock, null),
    React.createElement(Clock, null)
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));