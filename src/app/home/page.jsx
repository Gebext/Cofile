"use client";

import Image from "next/image";
import GooglePlay from "../../../public/assets/Google Play.png";
import AppStore from "../../../public/assets/App Store.png";
import Ilustration from "../../../public/assets/Illustration-home-1.svg";
import Ilustration2 from "../../../public/assets/Ilustrasi-home-2.png";
import Ilustration3 from "../../../public/assets/Ilustrasi-home-3.png";
import Ilustration4 from "../../../public/assets/Ilustrasi-home-4.png";
import trustedBy from "../../../public/data/trustedby";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import keyValues from "../../../public/data/keyvalues";
import Testimonals from "../../../public/data/testimonal";
import FAQ from "../components/faq/Faq";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      {/* Hero Section */}
      <section
        className="flex md:flex-row flex-col lg:w-8/12 md:w-full justify-between lg:mx-auto md:mx-8 mt-4"
        data-aos="zoom-in"
      >
        <div className="lg:w-1/2 md:mx-auto mt-12 mx-8">
          <h1 className="font-semibold lg:text-[36px] md:text-[24px] text-4xl w-full md:w-10/12">
            Check Currency Exchange Rate in Real Time
          </h1>
          <p className="text-secondary w-8/12">
            Monitor your worldwide business with this handy apps
          </p>
          <div className="mt-10 py-5">
            <Image src={GooglePlay} className="hover:opacity-75" alt="img" />
            <Image src={AppStore} className="hover:opacity-75" alt="img" />
          </div>
        </div>
        <div className="md:block flex justify-center">
          <Image src={Ilustration} alt="img" />
        </div>
      </section>
      {/* Trusted Company */}
      <section
        className="mt-24  lg:w-8/12 lg:mx-auto  md:mx-8 mx-8"
        data-aos="zoom-in"
      >
        <h1 className="font-semibold text-2xl">Trusted by</h1>
        <div className="flex justify-between lg:space-x-12 md:space-x-2 py-5 md:flex-row flex-col space-y-8">
          {trustedBy.map((item) => (
            <Image
              key={item.id}
              src={item.logo}
              alt={`Trusted Logo ${item.id}`}
              className="md:w-32"
            />
          ))}
        </div>
      </section>
      {/* Hero Section 2 */}
      <section
        className="mt-24 flex justify-between  lg:w-8/12 lg:mx-auto md:mx-8 md:flex-row flex-col mx-auto"
        data-aos="fade-left"
      >
        <div className="mt-20">
          <h1 className="font-semibold text-[28px] md:text-start text-center">
            Easy To Use
          </h1>
          <p className="text-secondary lg:w-8/12 md:text-start text-center md:px-0 px-4">
            Our clean and intuitive design will help you operate the apps easily
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={Ilustration2} alt="img" />
        </div>
      </section>
      {/* Hero Section 3 */}
      <section
        className="mt-24 flex justify-between  lg:w-8/12 lg:mx-auto md:mx-8 md:flex-row-reverse flex-col-reverse mx-auto"
        data-aos="fade-right"
      >
        <div className="mt-20">
          <h1 className="font-semibold text-[28px] lg:w-8/12 mx-auto md:text-start text-center ">
            Upgrade When You Need
          </h1>
          <p className="text-secondary lg:w-8/12 mx-auto md:text-start text-center md:px-0 px-4">
            We committed to provide the free plan forever. Once you need an
            upgrade, we will be there for you
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={Ilustration3} alt="img" />
        </div>
      </section>
      {/* Key Values */}
      <section className="mt-24  lg:w-8/12 lg:mx-auto mx-8" data-aos="zoom-in">
        <div className="flex md:flex-row flex-col justify-between md:space-x-12 py-5">
          {keyValues.map((item) => (
            <div
              key={item.id}
              className="flex flex-col text-[48px] text-primary"
            >
              {item.icon}
              <h3 className="lg:text-2xl md:text-lg text-base font-semibold mt-2 text-black">
                {item.title}
              </h3>
              <p className="text-base md:text-sm text-[12px] text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonals */}
      <section className="mt-24 lg:w-8/12 lg:mx-auto mx-8" data-aos="zoom-in">
        <h1 className="font-semibold text-2xl">Testimonials</h1>
        <div className="flex md:flex-row flex-col justify-between md:space-x-12 md:space-y-0 space-y-8 py-5">
          {Testimonals.map((testimonial, index) => (
            <div key={index} className="flex  space-x-4">
              <Image
                src={testimonial.avatar}
                alt={`Avatar of ${testimonial.name}`}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <span className="text-4xl text-primary">“ ”</span>
                <p className="text-sm font-semibold">{testimonial.testimony}</p>
                <h3 className="text-lg font-semibold mt-2">
                  {testimonial.name}
                </h3>
                <hr className="my-4" />
                <p className="text-sm text-secondary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ */}
      <section data-aos="zoom-in">
        <FAQ />
      </section>
      {/* Get it now */}
      <section
        className="mt-24 mb-10 flex justify-between  lg:w-8/12 lg:mx-auto md:mx-8 md:flex-row flex-col mx-auto"
        data-aos="fade-left"
      >
        <div className="mt-20 mx-8">
          <h1 className="font-semibold text-[28px]">Get it Now</h1>
          <p className="text-secondary md:w-8/12 w-10/12">
            Monitor your worldwide business with this handy apps
          </p>
          <div className="mt-10 py-5">
            <Image src={GooglePlay} className="hover:opacity-75" alt="img" />
            <Image src={AppStore} className="hover:opacity-75" alt="img" />
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={Ilustration4} alt="img" />
        </div>
      </section>
    </main>
  );
};

export default Home;
