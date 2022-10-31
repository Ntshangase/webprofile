import React from 'react';
import logo from '/home/mntwana/webprofile/src/picture.jpg';
import './style.css';

console.log(logo);

export default function Profile() {
  return (
    <div>
      <center>
        <h1 id='slack'> Zulu</h1>
        <img id="profile__img" src={logo} alt="profile__img"/>
        <p>
        <a id='twitter' href='https://twitter.com/elonmusk' target="blank">@elonmusk</a>
        </p>
        <p> 
          <p> <a id='btn__zuri' href='https://training.zuri.team/' target="blank">Zuri training</a> </p> 
          <p> <a id='books' href='http://books.zuri.team/' target="blank"> <h4>Zuri Bookstore</h4> <p>Get books about design and coding</p></a> </p>
          <p> <a id='book__python' href='http://books.zuri.team/python-for-beginners?ref_id=Zulu' target="blank"><h4>Check out</h4> <p>Basic coding for you! </p></a> </p>
          <p> <a id='pitch' href='https://background.zuri.team/' target="blank"><h4>background check</h4> <p>Let's clear that background so you can get that job</p></a> </p>
          <p> <a id='book__design' href='https://books.zuri.team/design-rules' target="blank"><h4>Zuri freebooks</h4> <p>The all you can Read book buffet, for free!!!</p></a> </p>
        </p>
      </center>
    </div>
  )
}
