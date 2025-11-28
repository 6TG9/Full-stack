import React, { useState } from "react";
import xin from "../../public/bxl-linkedin.svg.png";
import hub from "../../public/bxl-github.svg.png";
import lin from "../../public/bxl-linkedin.svg (1).png";
import gram from "../../public/bxl-instagram.svg.png";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_kaphimp",
        "template_eclc1q7",
        e.target,
        "gMFI_8o93-I-ih1Z_"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          e.target.reset();
          setForm({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
        },
        () => {
          toast.error("❌ Something went wrong, please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div
      id="contact"
      className="
        flex 
        
        pb-20 
        gap-14
        lg:flex-row
        flex-col 
        items-start
        md:px-[108px]
        px-6
      "
    >
      {/* LEFT SIDE */}
      <div
        className="flex flex-col md:w-[600px] md:h-[600px] justify-between 
        lg:w-[600px] lg:h-[600px]
        w-full h-auto
      "
      >
        <div className="">
          <h3
            className="navh font-normal 
            lg:text-[76px] 
            text-[40px] 
            text-[#FFFFFF]
          "
          >
            Let’s connect
          </h3>

          <p className="text-[#C7C7C7] lg:w-[298px] w-full text-[16px]">
            Say hello at{" "}
            <span className="underline">tobigeorge99@yahoo.com</span>. For more
            info, here's my <span className="underline">resume</span>
          </p>

          <div className="flex gap-6 mt-6 lg:justify-start ">
            <img src={lin} alt="" className="w-7 h-7" />
            <img src={hub} alt="" className="w-7 h-7" />
            <img src={xin} alt="" className="w-7 h-7" />
            <img src={gram} alt="" className="w-7 h-7" />
          </div>
        </div>

        <p className="text-[#C7C7C7] mt-10 lg:text-left">
          © 2025 George Oluwatobi
        </p>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full">
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-6 w-full max-w-[600px]"
        >
          {/* NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-[#C7C7C7] text-[16px] font-medium">
              Name
            </label>
            <input
              required
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              className="
                w-full 
                h-10 
                bg-[#1a1a1a] 
                text-white 
                px-4 py-3 
                rounded-md 
                outline-none border-none
              "
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-[#C7C7C7] text-[16px] font-medium">
              Email
            </label>
            <input
              required
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              className="w-full h-10 bg-[#1a1a1a] text-white px-4 py-3 rounded-md outline-none border-none"
            />
          </div>

          {/* SUBJECT */}
          <div className="flex flex-col gap-2">
            <label className="text-[#C7C7C7] text-[16px] font-medium">
              Subject
            </label>
            <input
              required
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full h-10 bg-[#1a1a1a] text-white px-4 py-3 rounded-md outline-none border-none"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-[#C7C7C7] text-[16px] font-medium">
              Message
            </label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full h-[156px] bg-[#1a1a1a] text-white px-4 py-3 rounded-md outline-none border-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              bg-[#d4e86a] 
              text-black 
              font-semibold 
              px-10 py-3 
              mt-10 
              rounded-full 
              hover:opacity-90 
              transition
              w-[180px]
              mx-auto
              lg:mx-0
            "
          >
            {isSubmitting ? "Sending..." : "SUBMIT"}
          </button>
        </form>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Footer;
