import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout';

export default function register() {
    return (

        <Layout>
            <div className="container col-md-5">
                <h1>ลงทะเบียน</h1>
                <form>
                    <div>
                        <div className="mb-3 row">
                            <label className="col-sm-2">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
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
                            <button className="btn btn-primary"> Register </button>
                            <button className="btn btn-light">Already registered? <Link href="/login"> Login </Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>

    )
}
