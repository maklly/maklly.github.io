import React from 'react'
import classes from './../Auth.module.scss'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={classes.auth}>
          <div className={classes.auth__form}>
            <h2>Welcome Strum</h2>

            <form>
              <div className={classes.auth__form__input}>
                <input type="email"
                placeholder="Enter email"
                />
                <div className={classes.auth__form__input}>
                <input type="text"
                placeholder="Enter username"
                />
              </div>
              </div>
              <div className={classes.auth__form__input}>
                <input type="password"
                placeholder="Enter password"
                />
              </div>
              <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login" className={classes.auth__form__link}>Log in</Link></p>
          </div>

          <div className={classes.auth__image}>
              Text
          </div>
      </div>
  )
}

export default SignUp;