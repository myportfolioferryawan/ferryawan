import React, { useState, useEffect } from "react";

// import Contact data
import { contact } from "../data";

// Import Contact us
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xkneaojo");
  if (state.succeeded) {
    return (
      <div className="text-4xl text-white text-center bg-tertiary capitalize">
        <p className="p-3 m-3">
          {" "}
          thanks for contacting me,
          <br /> for the next stage please wait{" "}
        </p>
      </div>
    );
  }
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        {/* Section title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-8 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            {" "}
            please contact me if interested in web design I'm ready to become a
            web developer in your company
            <br />
            Enter your email name below
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* Info */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* form */}
          <form
            className="space-y-8 w-full max-w-3xl"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xkneaojo"
            method="POST"
          >
            <label className="flex gap-8">
              <input className="input" type="text" placeholder="Your name" />
              <input
                className="input"
                type="email"
                placeholder="Your email"
                id="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
            <input className="input" type="text" placeholder="Subject" />
            <textarea
              className="textarea"
              placeholder="Your message"
              id="message"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="btn btn-lg bg-accent hover:bg-accent-hover rounded-md"
              disabled={state.submitting}
            >
              {" "}
              Send massage
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
