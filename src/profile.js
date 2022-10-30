import React from 'react';
import logo from '/home/mntwana/webprofile/src/picture.jpg';

console.log(logo);

export default function Profile() {
  return (
    <div>
      <center>
        <h1> Hello world</h1>
        <img id="profile__img" src={logo} alt="profile__img"/>
        
        <p> 
          <p> <a id='btn__zuri' href='https://training.zuri.team/' target="blank">Zuri training</a> </p> 
          <p> <a id='books' href='http://books.zuri.team/' target="blank">Zuri books</a> </p>
          <p> <a id='book__python' href='http://books.zuri.team/python-for-beginners?ref_id=Zulu' target="blank">Zuri bookshop</a> </p>
          <p> <a id='pitch' href='https://background.zuri.team/' target="blank">Zuri background</a> </p>
          <p> <a id='book__design' href='https://books.zuri.team/design-rules' target="blank">Zuri freeBooks</a> </p>
        </p>
      </center>
    </div>
  )
}
