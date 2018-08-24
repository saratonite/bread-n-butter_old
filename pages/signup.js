import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import TextInput from '../components/form/TextInput';
import Button from '../components/form/Button';


export default class  extends Component {

    onSubmit = (e) => {
        console.log('Submitiing form ')
        e.preventDefault();
    }
    render() {
        return (

            <Layout>
                <section>
                    <div className="signup-box">
                     <h1 className="title is-3">Signup</h1>
                    <form onSubmit={ this.onSubmit }>
                        <TextInput name="name" label="Name"/>
                        <TextInput name="email" label="Email"/>
                        <TextInput type="password" name="password" label="Password"/>
                      
                        <div className="field">
                           <Button>Signup</Button>
                        </div>
                        <div className="field">
                            Or <Link href="/login"><a>Already a user?</a></Link>
                        </div>
                    </form>
                    </div>
                   
                </section>
            </Layout>
            
        );
    }
}