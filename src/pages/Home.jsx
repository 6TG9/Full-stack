import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Tee from "../../public/DSC_0325_121613.jpg";
import hub from "../../public/bxl-github.svg.png";
import lin from "../../public/bxl-linkedin.svg (1).png";
import { ArrowUpRight, Github } from "lucide-react";
import conpro from "../../public/7bf3adde-c26b-458e-8448-bacf58e9bf60.png";
import pro from "../../public/ChatGPT Image Dec 8, 2025, 08_39_06 AM.png";
import chapro from "../../public/ChatGPT Image Dec 8, 2025, 08_20_01 AM.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black">
      <NavBar />

      {/* HERO SECTION */}
      <div className="px-6 md:px-[108px] flex flex-col md:flex-row justify-between border-b-2 border-[#484848] items-center pb-16 gap-10 md:gap-0">
        <div className="flex flex-col gap-6 max-w-xl">
          <h2 className="navh text-[40px] md:text-[90px] leading-[90%] text-white">
            HI, I AM <br /> GEORGE OLUWATOBI.
          </h2>

          <p className="text-[#C7C7C7]">
            A Nigerian based Full-Stack developer passionate about building
            accessible and user friendly websites.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="bg-[#d4e86a] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              CONTACT ME
            </a>

            <a
              href="https://www.linkedin.com/in/oluwatobi-george-2652752b7"
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

        <img
          src={Tee}
          alt=""
          className="w-full max-w-[400px] h-auto md:h-[500px] rounded-md mx-auto md:mx-0"
        />
      </div>

      {/* FEATURED PROJECTS */}
      <div
        id="work"
        className="flex flex-col pt-16 px-6 md:px-[108px] gap-20 border-b-2 border-[#484848] pb-16"
      >
        <div>
          <h2 className="navh text-white font-normal text-[40px] md:text-[68px]">
            Featured Projects
          </h2>
          <p className="text-[#C7C7C7] text-[14px] max-w-[600px]">
            Here are some of the selected projects that showcase my passion for
            Full-Stack development.
          </p>
        </div>

        {/* PROJECT CARD — 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src={pro} className="w-full max-w-[450px] rounded-md" alt="" />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h5 className="text-white font-medium text-[22px] md:text-[28px] leading-[140%]">
                World Info
              </h5>
              <p className="text-[#C7C7C7] text-[15px] leading-[150%]">
                React + Vite app that displays world/country information —
                frontend-ready project with a React component structure (see
                repo for data sources).
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-white border-b-2 pb-2 border-[#484848] text-[13px]">
                PROJECT INFO
              </h6>

              <div className="flex justify-between border-b-2 pb-2 text-[13px] border-[#484848]">
                <p className="text-white">Year</p>
                <p className="text-[#C7C7C7]">2023</p>
              </div>

              <div className="flex justify-between border-b-2 pb-2 text-[13px] border-[#484848]">
                <p className="text-white">Role</p>
                <p className="text-[#C7C7C7]">Full-Stack Developer</p>
              </div>
            </div>

            <div className="flex items-center space-x-12 text-[#d4e86a] font-semibold">
              <a
                href="https://worldtask.vercel.app/"
                className="flex items-center space-x-2 border-b border-[#d4e86a] pb-1"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://github.com/6TG9/worldApp.git"
                className="flex items-center space-x-2 border-b border-[#d4e86a] pb-1"
              >
                <span>SEE ON GITHUB</span>
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT CARD — 2 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={conpro}
            className="w-full max-w-[450px] rounded-md"
            alt=""
          />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h5 className="text-white font-medium text-[22px] md:text-[28px]">
                Beta House
              </h5>
              <p className="text-[#C7C7C7] leading-[150%]">
                Mastered CSS Grid complexities in building an innovative news
                homepage, cloudinary,JWT authentication
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-white border-b-2 pb-2 border-[#484848] text-[13px]">
                PROJECT INFO
              </h6>

              <div className="flex justify-between border-b-2 pb-2 text-[13px] border-[#484848]">
                <p className="text-white">Client</p>
                <p className="text-[#C7C7C7]">World News</p>
              </div>

              <div className="flex justify-between border-b-2 pb-2 text-[13px] border-[#484848]">
                <p className="text-white">Year</p>
                <p className="text-[#C7C7C7]">2022</p>
              </div>

              <div className="flex justify-between text-[13px] border-b-2 pb-2 border-[#484848]">
                <p className="text-white">Role</p>
                <p className="text-[#C7C7C7]">Full-Stack Developer</p>
              </div>
            </div>

            <a
              href="https://beta-house-ttrm.vercel.app/"
              className="flex items-center gap-2 text-[#d4e86a] border-b border-[#d4e86a] pb-1 font-semibold"
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* PROJECT CARD — 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={chapro}
            className="w-full max-w-[450px] rounded-md"
            alt=""
          />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h5 className="text-white font-medium text-[22px] md:text-[28px]">
                Goal-Web App
              </h5>
              <p className="text-[#C7C7C7] leading-[150%]">
                React + Vite single-page app for tracking goals — frontend built
                with React and Vite (see repo for components and routing).
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-white border-b-2 pb-2 border-[#484848] text-[13px]">
                PROJECT INFO
              </h6>

              <div className="flex justify-between border-b-2 pb-2 text-[13px] border-[#484848]">
                <p className="text-white">Year</p>
                <p className="text-[#C7C7C7]">2022</p>
              </div>

              <div className="flex justify-between text-[13px] border-b-2 pb-2 border-[#484848]">
                <p className="text-white">Role</p>
                <p className="text-[#C7C7C7]">Full-Stack Developer</p>
              </div>
            </div>

            <div className="flex items-center space-x-12 text-[#d4e86a] font-semibold">
              <a
                href="https://goal-frontend-ten.vercel.app/"
                className="flex items-center gap-2 border-b border-[#d4e86a] pb-1"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://github.com/6TG9/Goal-frontend.git"
                className="flex items-center gap-2 border-b border-[#d4e86a] pb-1"
              >
                <span>SEE ON GITHUB</span>
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div
        id="about"
        className="px-6 md:px-[108px] flex flex-col md:flex-row justify-between items-start mb-10 border-b-2 border-[#484848] pb-16 pt-16 gap-10"
      >
        <h2 className="navh text-[40px] md:text-[90px] text-white w-full md:w-[307px]">
          ABOUT ME
        </h2>

        <div className="flex flex-col gap-6 w-full md:w-[704px]">
          <h5 className="text-white font-medium text-[22px] md:text-[28px]">
            I am a Full-Stack developer based in Nigeria. Has Mass Communication
            background.
          </h5>

          <p className="text-[#C7C7C7] text-[15px] leading-[150%]">
            I am a Full-Stack developer based in Nigeria. Has Mass Communication
            background. Likes to focus on accessibility when developing.
            Passionate and curious about solving problems. Currently, I’m
            exploring Reactjs, Webflow and a bit of Designing. While I am not
            programming, I enjoy playing football, photography and playing
            Valorant. Learning more to improve skill.
          </p>

          <a href="/about" className="underline text-[#D3E97A]">
            <Link to="/about" className="cursor-pointer">
              More about me.
            </Link>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
