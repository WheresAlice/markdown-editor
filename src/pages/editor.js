import React, { Component } from "react";
import Editor from "../components/editor"

class EditorPage extends Component {
  render() {
    return (
      <div>
        <p>Put some Markdown in the box on the left, get some html rendered on the right.</p>
        <Editor/>
      </div>

    );
  }
}

export default EditorPage;