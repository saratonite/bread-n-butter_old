import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import TextInput from '../components/form/TextInput';
import Button from '../components/form/Button';

export default class Login extends Component {

    onSubmit = (e) => {
        console.log('Submitting login form')
        e.preventDefault();
    }

    render() {
        return(
            <Layout>
            <section>
            
                <div id="login-box">
                <h1 className="title is-3">Login Page</h1>
                <form onSubmit={ this.onSubmit }>
                    <TextInput name="username" label="Username / Email" />
                    <TextInput name="password" label="Password" type="password" />
    
                    <div className="field">
                       <Button>Login</Button>
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