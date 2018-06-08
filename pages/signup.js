import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default class  extends Component {
    render() {
        return (

            <Layout>
                <section>
                    <div className="signup-box">
                     <h1>Signup</h1>
                    <form>
                        <div className="form-group">
                            <label className="label-blk">Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="label-blk">Email</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="label-blk">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                      
                        <div className="form-group">
                            <button className="btn btn-lg">SIGN UP</button>
                        </div>
                        <div className="form-group">
                            Or <Link href="/login"><a>Already a user?</a></Link>
                        </div>
                    </form>
                    </div>
                   
                </section>
            </Layout>
            
        );
    }
}