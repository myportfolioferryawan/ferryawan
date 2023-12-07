import React, { useState, useEffect } from "react";

// import image
import Image from "../assets/img/foto-baru/bg-benarr.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-secondary ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-8 before:hidden before:lg:block">
                Ferryawan
              </h2>
              <p className="mb-4 text-accent"> Freelance Web Develover</p>
              <hr className="mb-4 opacity-100" />
              <p className="mb-8">
              My expertise extends to creating robust and scalable solutions for web applications.{" "}
                <br />
                I am a diligent and fast learner who thrives on challenges, demonstrating a strong work ethic in all 
                endeavors.
                In addition to my proficiency in traditional web development technologies, I have a keen 
                understanding of Dart and Flutter for building cross-platform mobile applications. This knowledge 
                enables me to create dynamic and responsive user interfaces, enhancing the overall user experience.
                Able to work both in teams and individual.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover rounded-md">
              {" "}
              <a
                href="https://wa.me/+6281389810440"
                title="No Handphone"
                target="_blank"
              >
                contact me
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
