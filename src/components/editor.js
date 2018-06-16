import React from "react"
import Markdown from "markdown"

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }
  onChange(e) {
    let output = Markdown.parse(e.currentTarget.value)
    this.setState({message: output});
  }
  render() {
    const wrapperStyle = {
      display: 'grid',
      'grid-template-columns': 'repeat(2, 1fr)',
    'grid-gap': '10px',
    'grid-auto-rows': 'minmax(100px, auto)'
    }
    const textareaStyle = {
      'grid-column': 1,
      'box-sizing': 'border-box'
    }
    const displayStyle = {
      'grid-column': 2
    }
    return (
      <div style={wrapperStyle}>
      <textarea id="editor" onChange={this.onChange.bind(this)} rows="10" style={textareaStyle} />
      <div id="display" dangerouslySetInnerHTML={{ __html: this.state.message }} style={displayStyle} />
      </div>
    )
  }
}


export default Editor