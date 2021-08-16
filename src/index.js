import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Coment";
import faker from "faker";
import AprrovalCard from "./AprrovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <AprrovalCard>
        <Comment
          image={faker.image.avatar()}
          author="sam"
          time="6:00 PM"
          content="Nice blog Post!"
        />
      </AprrovalCard>
      <AprrovalCard>
        <Comment
          image={faker.image.avatar()}
          author="Alex"
          time="3:30 AM"
          content="I like the subject 👏🏻"
        />
      </AprrovalCard>
      <Comment
        image={faker.image.avatar()}
        author="Jane"
        time="9:45 PM"
        content="keep going, good work 🐾"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));


