import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header.js'


const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to <a href="/editor">Alice's Markdown Editor</a>.  This is a very basic markdown previewer which also has linting functionality.</p>
    <p>Your text will only be sent over the internet if you press the lint button.  We do not keep a copy of it but Heroku might.</p>
    <p><a href="https://github.com/WheresAlice/markdown-editor">See the source code</a></p>
  </div>
)

export default IndexPage
