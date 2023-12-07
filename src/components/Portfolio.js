import React, { useState, useEffect } from "react";
// import component
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-8 before:-left-3/4 before:hidden before:lg:block">
            {" "}
            My latest work{" "}
          </h2>
          <p>
            {" "}
            some examples from my work which includes web developer & web digsen
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
