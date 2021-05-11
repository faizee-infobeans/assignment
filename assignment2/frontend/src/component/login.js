import React from "react";
import Axios from 'axios'
import "./style/login.css";
import { useState } from 'react';



  function Login(){
    const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  const login = ()=>{
    Axios.post("http://localhost:8000/",{
      username:username,
      password:password
    }).then((res) =>{
      console.log(res);
      alert("login sucess")
    })
  
  }
    return (
        <div>
        <nav class="navbar fixed-top navbar-expand">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                src="./images/logo-infobeans-nav.svg"
                alt="logo"
                width=""
                height="40px"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <span>Intranet Portal</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container" id="login-container">
          <div class="row justify-content-center mt-5">
            <div class="card rounded-0">
              <div class="text-center pt-5 mb-2">
                <img
                  src="./images//logo-infobeans.svg"
                  alt="logo"
                  width="100%"
                  height="65px"
                />
              </div>
              <div class="card-body p-4">
                <form>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Your Infobeans email address"
                      onChange={(e)=>{
                        setUsername(e.target.value)
                      }}
                    />
                  </div>
                  <div class="d-flex justify-content-between">
                    <label for="password" class="form-label stretch">
                      Password
                    </label>
                    <a href="#" class="forgot-link">
                      Forgot?
                    </a>
                  </div>

                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Your password"
                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }}
                    />
                  </div>
                  <div class="mt-4 mb-5">
                    <button
                      type="submit"
                      class="btn btn-danger w-100 rounded-0"
                      onClick={login}
                    >
                      Login to Intranet Portal
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="footer mt-3">
              <p>© Copyright 2020 InfoBeans. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }



export default Login;
