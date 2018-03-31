var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// function UserGreeting(props) {
//   return <h1>Welcome back</h1>;
// }
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );
//-------------------------------------------첫번쨰

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 && //&&은 앞에것이 true면 뒤에거 실행
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//        }
//     </div>
//   );
// }

// const messages = ['이상현', '바보멍청', '똥꺠'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );
// ----------------------2번쨰

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return React.createElement(
    'div',
    { className: 'warning' },
    'Warning!'
  );
}

// ReactDOM.render(
//   <WarningBanner warn='true'/>,
//   document.getElementById('root')
// );

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.state = { showWarning: true };
    _this.handleToggleClick = _this.handleToggleClick.bind(_this);
    return _this;
  }

  _createClass(Page, [{
    key: 'handleToggleClick',
    value: function handleToggleClick() {
      this.setState(function (prevState) {
        return {
          showWarning: !prevState.showWarning
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(WarningBanner, { warn: this.state.showWarning }),
        React.createElement(
          'button',
          { onClick: this.handleToggleClick },
          this.state.showWarning ? 'Hide' : 'Show'
        )
      );
    }
  }]);

  return Page;
}(React.Component);

ReactDOM.render(React.createElement(Page, null), document.getElementById('root'));