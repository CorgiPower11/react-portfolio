import React from 'react';
import profilephoto from "../../assets/profilephoto/Kathy-Moua.jpg";

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">About Me</h1>
      <img src={profilephoto} className='my-2' style={{ width: "20%"}} alt="cover"/>
      <p>My name is Kathy Moua.</p>
    </section>
  );
}

export default About;