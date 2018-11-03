import React, { Component } from 'react'
import Head from 'next/head'
import { draw } from 'oblique-strategies'

import '../style.css'

class Strategy extends Component {
  state = { strategy: draw() }

  handleClick = () => this.setState({ strategy: draw() })

  render() {
    return (
      <div className="sans-serif pointer" onClick={this.handleClick}>
        <Head>
          <title key="title">Oblique Strategies</title>
        </Head>
        <div className="flex items-center justify-content vh-100">
          <h1 className="f-headline-l f1 tc w-100 ma0 ph4">
            {this.state.strategy}
          </h1>
        </div>
      </div>
    )
  }
}

export default Strategy
