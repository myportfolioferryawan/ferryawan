import React from "react";

// import woman image
import ManImg from "../assets/img/foto-baru/ferry10.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[95vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[20px] mt-7">
              Hey,
              <br /> I'm Ferryawan Ardiansyah 🙂
            </p>
            <h1 className="text-2xl leading-10 md:text-3xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking[-2px]">
              Programming<br />
              & Software Engineering
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left ">
            Highly motivated student with a specialization in Software Engineering and Web Programming using 
            Scrum. Experienced in back-end development, I am proficient in Javascript, PHP, MySQL, Laravel, Java, Git 
            version control, Dart, and Flutter.
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all rounded-md ">
              {" "}
              <a
                href="https://drive.google.com/file/d/1aFykH1pRHqC1F2ExM4d4PGrg2pW2SejH/view?usp=sharing"
                download="https://drive.google.com/file/d/1aFykH1pRHqC1F2ExM4d4PGrg2pW2SejH/view?usp=sharing"
                target="_blank"
              >
                My Curriculum vitae
              </a>
            </button>
          </div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full ">
            <img src={ManImg} className="h-[95%] w-[93%]" alt="image-ferry" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
