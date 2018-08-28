import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import TextInput from '../components/form/TextInput';
import Button from '../components/form/Button';

export default class Login extends Component {

    constructor(props) {

        super(props)

        this.state = {
            username: '',
            password: '',
            isLoading: false
        }
    }

    onInputChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        console.log('Submitting login form', this.state)
        e.preventDefault();

        this.setState({ isLoading: true })
    }



    render() {

        const state = this.state;
        return(
            <Layout>
            <section>
            
                <div id="login-box">
                <h1 className="title is-3">Login Page</h1>
                <form onSubmit={ this.onSubmit }>
                    <TextInput onChange={ this.onInputChange } name="username" label="Username / Email" value={ state.username } />
                    <TextInput onChange={ this.onInputChange } name="password" label="Password" type="password" value={ state.password} />
    
                    <div className="field">
                       <Button className="is-primary is-fullwidth" isLoading={ state.isLoading }>Login</Button>
                    </div>
                    <div className="field">
                        Or <Link href="/signup"><a>Sign up here</a></Link>
                    </div>
                </form>
                    
                </div>
            </section>
        </Layout>
        )
    }
}