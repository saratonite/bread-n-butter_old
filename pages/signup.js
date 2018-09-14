import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import TextInput from '../components/form/TextInput'
import Button from '../components/form/Button'

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password_c: '',
      isLoading: false
    }
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    console.log('Submitiing form ', this.state)
    e.preventDefault()

    this.setState({ isLoading: true })
  }
  render () {
    const state = this.state

    return (
      <Layout>
        <section>
          <div className='signup-box'>
            <h1 className='title is-3'>Signup</h1>
            <form onSubmit={this.onSubmit}>
              <TextInput
                name='name'
                label='Name'
                value={state.name}
                onChange={this.onInputChange}
              />
              <TextInput
                name='email'
                type='email'
                label='Email'
                value={state.email}
                onChange={this.onInputChange}
              />
              <TextInput
                type='password'
                name='password'
                label='Password'
                value={state.password}
                onChange={this.onInputChange}
              />
              <TextInput
                type='password'
                name='password_c'
                label='Confirm Password'
                value={state.password_c}
                onChange={this.onInputChange}
              />

              <div className='field'>
                <Button
                  className='is-primary is-fullwidth'
                  isLoading={state.isLoading}
                >
                  Signup
                </Button>
              </div>
              <div className='field'>
                Or <Link href='/login'><a>Alread y a user?</a></Link>
              </div>
            </form>
          </div>

        </section>
      </Layout>
    )
  }
}
