var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formatName = function formatName(user) {
  return user.firstName + ' ' + user.lastName;
};

var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

var element = React.createElement(
  'h1',
  null,
  'Hello, ',
  formatName(user),
  '!'
);

var WelcomeClass = function (_React$Component) {
  _inherits(WelcomeClass, _React$Component);

  //생성자
  function WelcomeClass(prop) {
    _classCallCheck(this, WelcomeClass);

    var _this = _possibleConstructorReturn(this, (WelcomeClass.__proto__ || Object.getPrototypeOf(WelcomeClass)).call(this, prop));

    _this.myName = prop.name;
    return _this;
  }

  _createClass(WelcomeClass, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        'Hello, ',
        this.myName,
        ' ',
        React.createElement('nbsp', null),
        'Welcome to ',
        this.props.country
      );
    }
  }]);

  return WelcomeClass;
}(React.Component);

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(WelcomeClass, { country: 'Korea' }),
  React.createElement(WelcomeClass, { country: 'America', name: 'juwon' }),
  React.createElement(WelcomeClass, { country: 'America', name: 'Asuna' }),
  element
), document.getElementById('root'));