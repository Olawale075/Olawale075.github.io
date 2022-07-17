import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      {" "}
      <h4>
        <em>I am Olawale Toheeb</em>
      </h4>
      <p>
        this is my homepage, so I have to say something about myself. Sometimes
        it is hard to introduce yourself because you know yourself so well that
        you do not know where to start with. Let me give a try to see what kind
        of image you have about me through my self-description. I hope that my
        impression about myself and your impression about me are not so
        different. Here it goes.
      </p>
      <p>
        {" "}
        I am a person who is positive about every aspect of life. There are many
        things I like to do, to see, and to experience. I like to read, I like
        to write and handle practical aspect alot i like to playing football; I
        like to think, I like to listen to word of elders because i develop my
        energy for there is power to my focus. I like to be alone when study, I like to be
        surrounded by people. I like people. And, I like to laugh.
      </p>
      <p>
        {" "}
        I always wanted to be a great SoftwearDeveloper' like Nadeem B. ,He is a
        java Tutor. I also wanted to be a great Engineer, like Anthony Michael
        Fadell, He is co-creator of the ipad and the iphone. Of course, I am
        nowhere close to these people, yet. I am just someone who does some
        teaching, some research, and some writing. But my dream is still alive.
      </p>
      <p>
        This is a brief introduction of myself. If you are interested in knowing
        more, read my articles or take a look at{" "}
        <Link to="/notAvailable">my pictures</Link>. Do not expect too much, and keep
        your sense of humor.
      </p>
    </div>
  );
};
