// 1번쨰 예제
// const numbers = [1, 2, 3, 4, 5];
// let listItems = [];

// for (number in numbers) {
//   listItems.push(<li>{number}</li>);
// }

//2번째 예제
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => 
//   <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
// const numbers = [1, 2, 3, 4, 5];

//3번쨰 예제
function NumberList(props) {
  var numbers = props.numbers;
  var listItems = numbers.map(function (number) {
    return React.createElement(
      'li',
      { key: number.toString() },
      number
    );
  });
  return React.createElement(
    'ul',
    null,
    listItems
  );
}
var numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
// <ul>{listItems}</ul>,  -첫번쨰 예제
React.createElement(NumberList, { numbers: numbers }), // - 두번쨰 예제, 세번째 예제
document.getElementById('root'));