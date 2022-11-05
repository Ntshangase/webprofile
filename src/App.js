import { Route, Routes } from "react-router-dom";
import React from "react";
import Profile from "./profile";
import Contact from "./contact";


export default function App() {

  return (
    <div>

      <Routes>
      <Route path="/*" element={<Profile />} />
      <Route path="/webprofile/contact" element={<Contact />} />
      </Routes>


    </div>
  )
}
