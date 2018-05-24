import Layout from '../components/layout/Layout';
import Link from 'next/link';
export default () => (
    <Layout>
        <section>
        
            <div id="login-box">
            <h1>Login Page</h1>
                <div className="form-group">
                    <label className="label-blk">Username / Email</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="label-blk">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-lg">LOGIN</button>
                </div>
                <div className="form-group">
                    Or <Link href="/signup"><a>Sign up here</a></Link>
                </div>
            </div>
        </section>
    </Layout>
)