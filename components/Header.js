import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Somkiat.J</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link">เกี่ยวกับเรา</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">ติดต่อเรา</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/product">
                                    <a className="nav-link">สินค้า</a>
                                </Link>
                            </li>

                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="/profile" >
                                    <a className="nav-link">Profile</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/login">
                                    <a className="nav-link">Login</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/register">
                                    <a className="nav-link">Register</a>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}
