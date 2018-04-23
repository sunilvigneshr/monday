import React from 'react'
import {H1} from './styles/format'

class Parser {
  parse(tokens) {
    return tokens.map(token => {
      switch (token.type) {
        case 'heading':
          return <H1>{token.text}</H1>
        case 'paragraph':
          return <div>{token.text}</div>
        default:
          return <div>{token.text}</div >
      }
    })
  }
}

export default Parser
