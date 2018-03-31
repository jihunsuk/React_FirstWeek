// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const formatName = ({firstName, lastName}) => {
//   return `${firstName} ${lastName}`;
// };

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

function WelcomeFunc(props) {
  return React.createElement(
    'h1',
    null,
    ' Welcom to ',
    props.country
  );
}

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(WelcomeFunc, { country: 'Korea' }),
  element
), document.getElementById('root'));