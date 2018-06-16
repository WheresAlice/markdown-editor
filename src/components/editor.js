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
      gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '10px',
    gridAutoRows: 'minmax(100px, auto)'
    }
    const textareaStyle = {
      gridColumn: 1,
      boxSizing: 'border-box'
    }
    const displayStyle = {
      gridColumn: 2
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