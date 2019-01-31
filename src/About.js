import React, { Component } from 'react';
import noob from './images/noob_bandana.png';
import cooper from './images/cooper-bandana.png';
class About extends Component {
  render() {
    return  <div>
      <h1>About This App</h1>
      <p>This app was created by Megan Heinzl in 2019 using React.js and newsapi.org. Megan is a student at BCIT and hopes to find a front end web development job that allows her to spend as much time as possible with her beloved pets, Cooper the Cardigan Welsh Corgi, and Noob the Bengal cat.</p>
      <div className ="images"><img src={noob} alt="Cooper the corgi in a bandana"></img>
      <img src={cooper} alt="Noob the bengal wrapped in a blanket"></img>
      </div>
      </div>; 
  }
}
export default About;
