"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Banner from "../../../public/assets/Breakline Image.png";
import Image from "next/image";
import { MdOutlineArchive } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import Team from "../../../public/data/team";
import World from "../../../public/assets/world.png";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      {/* Section 1 */}
      <section className="flex lg:w-8/12 justify-between lg:mx-auto md:mx-8 md:flex-row flex-col  my-16">
        <div className="md:w-full w-10/12 mx-auto" data-aos="fade-right">
          <h1 className="font-semibold lg:text-4xl md:text-2xl text-4xl md:text-start text-center">
            We are a Group of Individuals With a Big Mission
          </h1>
        </div>
        <div data-aos="fade-left">
          <p className="flex flex-col space-y-2  text-secondary lg:text-base md:text-[12px] md:text-start text-center md:mt-0 mt-4 md:mx-0 mx-2">
            <span>
              We are a group of individuals with a big mission to help many
              businesses all over the world reach their biggest potential.
            </span>
            <span>
              We provide them with our stable mobile apps to help them maintain
              their business. And obviously, we will continuously improve our
              products and services.
            </span>
          </p>
        </div>
      </section>
      {/* Banner */}
      <Image src={Banner} className="w-full" />
      {/* Milestone */}
      <div
        className="flex lg:w-8/12 justify-between lg:mx-auto  my-16 md:items-center md:mx-4 md:flex-row flex-col md:w-auto w-10/12 mx-auto"
        data-aos="zoom-in"
      >
        <h1 className="font-semibold text-4xl md:text-2xl">Our Milestone</h1>
        <div className="flex flex-col space-y-2">
          <CiStar className="text-4xl md:text-2xl text-primary" />
          <h1 className="font-semibold text-4xl md:text-2xl">4.85 / 5.0</h1>
          <p className="text-secondary md:text-[12px]">
            Rating on Google Play & App Store
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <MdOutlineArchive className="text-4xl text-primary md:text-2xl" />
          <h1 className="font-semibold text-4xl md:text-2xl">8.5k ++</h1>
          <p className="text-secondary md:text-[12px]">
            Downloads on Google Play & App Store
          </p>
        </div>
      </div>
      {/* Team */}
      <section className="flex flex-col lg:w-8/12 justify-between lg:mx-auto  my-16 md:mx-8 ">
        <h1 className="text-3xl font-bold mt-10 lg:text-start text-center mb-4">
          Our Super Team
        </h1>
        <div className="grid md:grid-cols-3 gap-8 ">
          {Team.map((member) => (
            <div key={member.id} className="text-center" data-aos="zoom-in">
              <Image
                src={member.avatar}
                alt={member.name}
                className=" mx-auto mb-2"
              />
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Remote Team */}
      <section
        className="flex  lg:w-8/12 justify-between lg:mx-auto  my-16 items-center md:mx-8 md:flex-row flex-col"
        data-aos="zoom-in"
      >
        <div className="md:w-4/12">
          <h1 className="font-semibold text-4xl md:text-start text-center">
            Fully Remote Team
          </h1>
          <p className="text-secondary md:text-start text-center">
            With a professional approach, we successfully build this remote team
          </p>
        </div>
        <Image src={World} alt="world" />
      </section>
    </main>
  );
};

export default About;
