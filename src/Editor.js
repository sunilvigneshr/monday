import React, {Component} from 'react'
import {EditorDiv} from './styles/editor'
import marked from 'marked'
import Parser from './Parser'

class Editor extends Component {

  parser = new Parser()
  state = {
    content: '',
    previewContent: ''
  }

  handleChange = (event) => {
    const content = event.target.innerText
    const tokens = marked.lexer(content)

    this.setState({
      previewContent: this.parser.parse(tokens)
    })
  }

  render() {
    return <div>
        <EditorDiv
          onInput={this.handleChange}
          dangerouslySetInnerHTML={{__html: this.state.content}}
          contentEditable
        />
        <EditorDiv>
          {this.state.previewContent}
        </EditorDiv>
      </div>
  }
}

export default Editor
