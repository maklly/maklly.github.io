import React, { useState } from 'react'
import classes from './../Auth.module.scss'
import { Link } from "react-router-dom";
import { addUser } from '../../../api';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const salt = 'string';

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      firstName: username.split(' ')[0],
      lastName: username.split(' ')[1] || '',
      email: email,
      passwordHash: password,
      salt: salt
      // Salt: You need to generate a salt for the password here
    };

    addUser(user)
      .then(response => console.log(response))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className={classes.auth}>
      <div className={classes.auth__form}>
        <h2>Welcome Strum</h2>

        <form onSubmit={handleSubmit}>
          <div className={classes.auth__form__input}>
            <input type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className={classes.auth__form__input}>
              <input type="text"
                placeholder="Enter username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.auth__form__input}>
            <input type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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



// import React from 'react'
// import classes from './../Auth.module.scss'
// import { Link } from "react-router-dom";
// import { getUsers, addUser } from './api';
//
// // Use getUsers or addUser here
// const SignUp = () => {
//   return (
//     <div className={classes.auth}>
//           <div className={classes.auth__form}>
//             <h2>Welcome Strum</h2>
//
//             <form>
//               <div className={classes.auth__form__input}>
//                 <input type="email"
//                 placeholder="Enter email"
//                 />
//                 <div className={classes.auth__form__input}>
//                 <input type="text"
//                 placeholder="Enter username"
//                 />
//               </div>
//               </div>
//               <div className={classes.auth__form__input}>
//                 <input type="password"
//                 placeholder="Enter password"
//                 />
//               </div>
//               <button type="submit">Register</button>
//             </form>
//             <p>Already have an account? <Link to="/login" className={classes.auth__form__link}>Log in</Link></p>
//           </div>
//
//           <div className={classes.auth__image}>
//               Text
//           </div>
//       </div>
//   )
// }
//
// export default SignUp;