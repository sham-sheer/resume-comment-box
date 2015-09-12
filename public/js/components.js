var CommentList = React.createClass({
  render: function() {
    return(
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return(
      <div className="commentForm">
        Hello, world! I am a react js comment form component!
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function(){
    //For this example, this workarround tells to React that the html injected is secure.
    //Otherwise, the output will not render the html markup.
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});

    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

//The sample data that will be used as a fake data source
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({

  render: function(){
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }

});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
