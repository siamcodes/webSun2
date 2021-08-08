import React, { Component } from 'react'
import Layout from '../components/Layout';
import Link from 'next/link';

export default class login extends Component {
    render() {
        return (
            <Layout>
                <div className="container col-md-4 center" >
                    <h1> เข้าสู่ระบบ </h1>
                    <form>
                        <div>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <button className="btn btn-primary"> Login </button>
                                <button className="btn btn-light"> Forgot password? </button>
                                <button className="btn btn-light"> Not yet registered? <Link href="/register"> Register </Link> </button>
                            </div>

                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

