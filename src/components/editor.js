import React from "react"
import Markdown from "markdown"
import Axios from "axios"

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {output: '', lint: [], input: ''}
  }
  onChange(e) {
    let output = Markdown.parse(e.currentTarget.value)
    this.setState({output: output});
    this.setState({input: e.currentTarget.value})
  }
  mdl(e) {
    Axios.post('https://immense-coast-50534.herokuapp.com/', this.state.input).then(response => this.setState({lint: response.data}));
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
    const alertStyle = {
      color: 'red'
    }
    const RenderLint = (props) => {
      return(
        <ul>
          {props.items.map((item, i) =>
          <li index={i} style={alertStyle}>{item}</li>
          )}
        </ul>
      )
    }
    return (
      <div>
        <button onClick={this.mdl.bind(this)}>Lint</button>
      <div style={wrapperStyle}>
      <textarea id="editor" onChange={this.onChange.bind(this)} rows="10" style={textareaStyle} />
      <div id="display" dangerouslySetInnerHTML={{ __html: this.state.output }} style={displayStyle} />
      </div>
        <RenderLint items={this.state.lint}/>
      </div>
    )
  }
}


export default Editor