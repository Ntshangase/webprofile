import React from 'react';
import logo from '/home/mntwana/webprofile/src/picture.jpg';
import './style.css';

console.log(logo);

export default function Profile() {
  return (
    <div>
      <center>
        
        <img id="profile__img" src={logo} alt="profile__img"/>
        <p> <h1 id='slack'> Zulu</h1> </p>
        <p>
        <a id='twitter' href='https://twitter.com/elonmusk' target="blank"><h4>Twitter Link</h4></a>
        </p>
        <p> 
          <p> <a id='btn__zuri' href='https://training.zuri.team/' target="blank"> <h4>Zuri team</h4></a> </p> 
          <p> <a id='books' href='http://books.zuri.team/' target="blank"> <h4>Zuri Book</h4> <p>Get books about design and coding</p></a> </p>
          <p> <a id='book__python' href='http://books.zuri.team/python-for-beginners?ref_id=Zulu' target="blank"><h4>Python Books</h4> <p>Basic coding for you! </p></a> </p>
          <p> <a id='pitch' href='https://background.zuri.team/' target="blank"><h4>Background Check for Coders</h4> <p>Let's clear that background so you can get that job</p></a> </p>
          <p> <a id='book__design' href='https://books.zuri.team/design-rules' target="blank"><h4>Design Books</h4> <p>The all you can Read book buffet, for free!!!</p></a> </p>
        </p>
      </center>
    </div>
  )
}
