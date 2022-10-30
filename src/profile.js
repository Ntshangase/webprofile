import React from 'react';
import logo from '/home/mntwana/webprofile/src/picture.jpg';

console.log(logo);

export default function Profile() {
  return (
    <div>
      <center>
        <h1> Hello world</h1>
        <img src={logo} alt="still loading"/>
        </center>
    </div>
  )
}
