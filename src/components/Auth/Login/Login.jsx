import React from "react";
import classes from './../Auth.module.scss'
import { Link } from "react-router-dom";

const Login = () => {
    return (
      <div className={classes.auth}>
          <div className={classes.auth__form}>
            <h2>Welcome Strum</h2>

            <form>
              <div className={classes.auth__form__input}>
                <input type="email"
                placeholder="Enter email or username"
                />
              </div>
              <div className={classes.auth__form__input}>
                <input type="password"
                placeholder="Enter password"
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup" className={classes.auth__form__link}>Sign up</Link></p>
          </div>

          <div className={classes.auth__image}>
              Text
          </div>
      </div>
    )
}

export default Login;