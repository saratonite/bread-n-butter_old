import Layout from '../components/layout/Layout';
export default () => (
    <Layout>
        <section>
        
            <div id="login-box">
            <h1>Login Page</h1>
                <div>
                    <label className="label-blk">Username / Email</label>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label className="label-blk">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div>
                    <button className="btn btn-lg">Login</button>
                </div>
            </div>
        </section>
    </Layout>
)