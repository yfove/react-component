import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content"></div>
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:44PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
