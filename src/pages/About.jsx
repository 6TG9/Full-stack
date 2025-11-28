import React from "react";
import NavBar from "../components/NavBar";
import hub from "../../public/bxl-github.svg.png";
import lin from "../../public/bxl-linkedin.svg (1).png";
import Footer from "../components/Footer";
import tg from "../../public/image.png";
import mycv from "../../public/George_Oluwatobi_CV.pdf";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "JQUERY",
    "ACCESSIBILITY",
    "FIGMA",
    "TAILWIND CSS",
  ];

  return (
    <div className="bg-black">
      <NavBar />

      {/* ABOUT SECTION */}
      <div
        className="
          flex px-[108px] pt-20 pb-30 justify-between gap-20
          max-lg:px-16 
          max-md:px-6 max-md:flex-col max-md:items-center max-md:text-center
        "
      >
        <h2
          className="
            navh font-normal text-[90px] text-white w-[307px]
            max-lg:text-[70px]
            max-md:text-[55px] max-sm:text-[42px] max-md:w-full
          "
        >
          ABOUT ME
        </h2>

        <div
          className="
            w-[704px] pl-[130px] flex flex-col gap-6
            max-xl:w-[600px]
            max-lg:w-[500px] max-lg:pl-10
            max-md:w-full max-md:pl-0
          "
        >
          <h5
            className="
              text-white font-medium text-[28px] leading-[140%]
              max-md:text-[22px]
            "
          >
            I am a Full-Stack developer based in Nigeria. Has Mass Communication
            background.
          </h5>

          <p
            className="
              text-[#C7C7C7] font-normal text-[15px] leading-[150%]
              max-md:text-[14px]
            "
          >
            I am a full-stack developer based in Nigeria looking for exciting
            opportunities. Has Mass Communication background. Likes to focus on
            accessibility when developing. Passionate and curious about solving
            problems. Currently, I’m exploring Reactjs, Webflow and a bit of
            Designing. While I am not programming, I enjoy playing basketball,
            Swimming and playing piano. Learning more to improve skill.
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex items-center gap-4
              max-md:justify-center max-md:flex-wrap
            "
          >
            <a
              href={mycv}
              download="TG'scv.pdf"
              className="
                bg-[#d4e86a] w-60 text-black font-semibold px-10 py-3
                rounded-full hover:opacity-90 transition
              "
            >
              DOWNLOAD RESUME
            </a>

            <a
              href="https://www.linkedin.com/in/oluwatobi-george-2652752b7?..."
              target="_blank"
            >
              <img
                src={lin}
                alt=""
                className="bg-[#222222] p-2 rounded-full w-10 h-10"
              />
            </a>

            <a href="https://github.com/6TG9" target="_blank">
              <img
                src={hub}
                alt=""
                className="bg-[#222222] p-2 rounded-full w-10 h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div
        className="
          px-[108px] pb-20
          max-lg:px-16
          max-md:px-6
        "
      >
        <img src={tg} alt="" className="w-full max-w-[900px] mx-auto" />
      </div>

      {/* CAPABILITIES */}
      <div
        className="
          flex justify-between px-[108px] border-b-2 border-[#484848] pb-20
          font-normal text-[73px]
          max-lg:px-16 
          max-md:px-6 max-md:flex-col max-md:gap-10
        "
      >
        <h2
          className="
            navh text-white
            max-lg:text-[55px]
            max-md:text-[40px]
          "
        >
          MY CAPABILITIES
        </h2>

        <div
          className="
            w-[600px] flex flex-col gap-8 px-8.5
            max-lg:w-[500px]
            max-md:w-full max-md:px-0
          "
        >
          <p
            className="
              text-[#C7C7C7] text-[15px] leading-[150%]
              max-md:text-[14px]
            "
          >
            I am always looking to add more skills. I’m a Mass Communication
            graduate who transitioned into Full-stack Web Development...
          </p>

          <div className="flex flex-wrap gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                  px-8 py-4 border border-[#333] rounded-full text-white 
                  text-xs tracking-wide flex items-center justify-center
                  max-md:text-[10px] max-sm:px-5 max-sm:py-3
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div
        className="
          flex px-[108px] border-b-2 border-[#484848] py-28 justify-between
          max-lg:px-16
          max-md:px-6 max-md:flex-col max-md:gap-12
        "
      >
        <h2
          className="
            navh font-normal text-[75px] text-white
            max-lg:text-[55px]
            max-md:text-[40px]
          "
        >
          MY EXPERIENCE
        </h2>

        <div
          className="
            prof flex flex-col gap-20 w-[600px]
            max-lg:w-[500px]
            max-md:w-full
          "
        >
          {/* ROLE 1 */}
          <div className="px-6 flex flex-col gap-4 max-md:px-0">
            <div className="flex justify-between max-md:flex-col max-md:gap-1">
              <h5 className="text-white text-[21px]">Production Manager</h5>
              <p className="text-[#C7C7C7] text-[15px] max-md:text-[14px]">
                Nov 2023-2024
              </p>
            </div>
            <p className="text-[#C7C7C7] max-md:text-[14px]">
              Boosted magazine sales by 22% through targeted marketing and
              personalized demonstrations.Reduced workload by introducing
              creative ideas and multitasking to improve procurement, loss
              prevention, and inventory management. Led an initiative promoting
              a nationwide campus magazine across 40 Nigerian universities.
              Contributed to outreach events that increased awareness of the
              Campus Magazine by 39%.
            </p>
          </div>

          {/* ROLE 2 */}
          <div className="px-6 flex flex-col gap-4 max-md:px-0">
            <div className="flex justify-between max-md:flex-col max-md:gap-1">
              <h5 className="text-white">Full-Stack Intern</h5>
              <p className="text-[#C7C7C7] text-[15px]">Sep 2024–Present</p>
            </div>

            <p className="text-[#D3E97A]">Urvan Tech</p>
            <p className="text-[#D3E97A]">Tech Studio</p>

            <p className="text-[#C7C7C7] max-md:text-[14px]">
              React + Node.js website for tracking goals — frontend built with
              React and Vite backend built with node. <br />
              React + Vite app that displays world/country information —
              frontend-ready project with a React component structure. <br />
              Client-side random verse generator — simple HTML/JS tool that
              fetches or rotates stored verses and displays them in the browser.
              <br />
              Client-side dessert ordering demo — product list, add-to-cart,
              cart totals and order confirmation. Built with vanilla JavaScript,
              HTML and CSS.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
