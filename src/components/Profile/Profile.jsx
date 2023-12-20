// Profile.jsx
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import classes from './Profile.module.scss';
import { Link } from "react-router-dom";

const Profile = () => {
  return (
   <div className={classes.profile}>
      <div className={classes.cabinet}>
        <div className={classes.cabinet__edit}>
          <Link className={classes.cabinet__edit__link} to="#">
            <FaEdit/>
          </Link>
        </div>
        <div className={classes.cabinet__av}>
          <img/>
        </div>
        <div className={classes.cabinet__text}>
          <h2>User name</h2>
          <p>Text about</p>
        </div>
        <div className={classes.cabinet__region}>
          <h4>Lviv. Ukraine</h4>
        </div>
      </div>

      <div className={classes.activity}>
        <div className={classes.activity__post}>
          <div className={classes.activity__post__top}>
            <h4>Username</h4>

            <div className={classes.activity__post__icons}>
                <Link to='#' className={classes.activity__post__link}><FaEdit/></Link>
              <Link to='#' className={classes.activity__post__delete}><FaTrash/></Link>
            </div>
          </div>
          <div className={classes.activity__post__content}>
            <p>Text content</p>
          </div>

          <div className={classes.activity__post__time}>
            <p>15:32 26.11.2023</p>
          </div>
        </div>
        <div className={classes.pagination}>
          <button className={classes.pagination__btn}>
            1
          </button>
          <button className={classes.pagination__btn}>
            2
          </button>
          <button className={classes.pagination__btn}>
            3
          </button>
        </div>
      </div>
   </div>
  );
};

export default Profile;
