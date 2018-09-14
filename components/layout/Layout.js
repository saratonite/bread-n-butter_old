import React, { Component } from 'react'
import Navigation from './Navigation'
import '../../styles/index.scss'
export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { children } = this.props
    return (
      <div className='cnontainer'>
        <Navigation />
        <main>
          {children}
        </main>
      </div>
    )
  }
}
