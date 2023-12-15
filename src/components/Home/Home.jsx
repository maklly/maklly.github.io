import React from "react";
import classes from './Home.module.scss'

const Home = () => {
    return (
      <div className={classes.home}>
        <div className={classes.home__content}>
          <h1>The goal of the <span>STRUM</span></h1>
          <p>Many well-known labels and bands are looking for promising, young and talented artists. We will help you find your place among them</p>
        </div>
      </div>
    )
}

export default Home;