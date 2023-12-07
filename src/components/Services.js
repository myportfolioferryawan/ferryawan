import React, { useState, useEffect } from "react";

// import service data
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        {/* Section tilte */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-8 before:-left-28 before:hidden before:lg:block ">
            What I do for clienst{" "}
          </h2>
          <p className="subtitle">
            For Clients site is a direct communication channel designed with our
            clients in mind.{" "}
          </p>
        </div>
        {/* items grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                {/* icon */}
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                  {" "}
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p> {description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
