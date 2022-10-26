import React from "react";
import myAvatar from "../../images/my_avatar_image.jpg";

function About() {
  return (
    <section className="about">
      <img
        className="about__avatar-image"
        src={myAvatar}
        alt="A girl sits on the grass and does yoga"
      />
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__content">
          Hi, my name is Racheli, this is my finall project at Practicum100 for
          web development course. In this course I gained knowledge in HTML5,
          CSS3, JavaScript, Node, React, Redux, Git, BEM, Webpack, Express, and
          MongoDB .
        </p>
        <p className="about__content">
          Thanks to the knowledge I acquired in the practicum100, I can work as
          full-stack developer, hadle the frontend and the backend.
        </p>
      </div>
    </section>
  );
}

export default About;
