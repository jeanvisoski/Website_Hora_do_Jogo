import React, { Component } from 'react';
import './login.css';
import ReactDOM from 'react-dom';

class Login extends Component {
  render() {
    return (
      <body>

        <div class="container">
          <div class="card card-login mx-auto mt-5">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <div class="form-label-group">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required" autofocus="autofocus" />
                    <label for="inputEmail">Email address</label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-label-group">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="required" />
                    <label for="inputPassword">Password</label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" value="remember-me" />
                      Remember Password
                      </label>
                  </div>
                </div>
                <a class="btn btn-primary btn-block" href="/painelAdmin">Login</a>
              </form>
            </div>
          </div>
        </div>


        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

      </body>
    )
  }
}

export default Login;