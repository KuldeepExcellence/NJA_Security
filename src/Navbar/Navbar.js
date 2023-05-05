import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img alt="" src="../picture/nja logo 1.png" />

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="guarding">Guarding/Industrial Security</a></li>
                                    <li><a class="dropdown-item" href="transportation">Transportation of Cash</a></li>
                                    <li><a class="dropdown-item" href="/">Security of Ware Houses</a></li>
                                    <li><a class="dropdown-item" href="/">Night Patrol</a></li>
                                    <li><a class="dropdown-item" href="/">Electronic Security</a></li>
                                    <li><a class="dropdown-item" href="/">Security Equipment</a></li>
                                    <li><a class="dropdown-item" href="/">Fire safety systems</a></li>
                                    <li><a class="dropdown-item" href="/">Private Investigation</a></li>
                                    <li><a class="dropdown-item" href="/">Security audit/consultancy</a></li>
                                    <li><a class="dropdown-item" href="/">Training of Security Staff</a></li>
                                    <li><a class="dropdown-item" href="/">Business Executive Protection</a></li>
                                    <li><a class="dropdown-item" href="/">Events Security</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="training">Training</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar


