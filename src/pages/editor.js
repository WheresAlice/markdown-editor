import React, { Component } from "react";
import Editor from "../components/editor"

class EditorPage extends Component {
  render() {
    return (
      <div>
        <p>Put some Markdown in the box on the left, get some html rendered on the right.  Press 'Lint' to get any warnings about your markdown style.</p>
        <Editor/>
        <p><a href="https://github.com/WheresAlice/markdown-editor">See the source code</a></p>
      </div>

    );
  }
}

export default EditorPage;