import React from "react";

function About({ src, about, image = "https://via.placeholder.com/215" }) {
  return (
    <aside>
      <img src={image} placeholder={src} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
