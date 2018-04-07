function Blog(props) {
  var sidebar = React.createElement(
    'ul',
    null,
    props.posts.map(function (post) {
      return React.createElement(
        'li',
        { key: post.id },
        post.title
      );
    })
  );
  var content = props.posts.map(function (post) {
    return React.createElement(
      'div',
      { key: post.id },
      React.createElement(
        'h3',
        null,
        post.title
      ),
      React.createElement(
        'p',
        null,
        post.content
      )
    );
  });
  return React.createElement(
    'div',
    null,
    sidebar,
    React.createElement('hr', null),
    content
  );
}

var posts = [{ id: 1, title: '안녕 리엑트', content: '리엑트 월드에 온걸 환영해!' }, { id: 2, title: '잘가 리엑트', content: '난 글렀어 너 먼저 가.' }, { id: 3, title: '아이돌은 역시', content: '트와이스!' }];

ReactDOM.render(React.createElement(Blog, { posts: posts }), document.getElementById('root'));