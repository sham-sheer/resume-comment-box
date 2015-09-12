var CommentBox = React.createClass({

  render: function(){
    return(
      <div className="commentBox">
        Hello, world! I am an react-js comment box component!
      </div>
    );
  }

});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
