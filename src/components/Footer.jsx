import React, { useState } from "react";
import xin from "../../public/bxl-linkedin.svg.png";
import hub from "../../public/bxl-github.svg.png";
import lin from "../../public/bxl-linkedin.svg (1).png";
import gram from "../../public/bxl-instagram.svg.png";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    // Clear error when fixing field
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  // -------------------------
  // CUSTOM VALIDATION
  // -------------------------
  const validateForm = () => {
    let newErrors = {};

    if (!form.from_name.trim()) newErrors.from_name = "Name is required.";
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";

    if (!form.from_email.trim()) {
      newErrors.from_email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.from_email)) {
      newErrors.from_email = "Please enter a valid email.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_kaphimp",
        "template_eclc1q7",
        e.target,
        "gMFI_8o93-I-ih1Z_"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        e.target.reset();
        setForm({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      })
      .catch(() => {
        toast.error("Something went wrong. Try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      id="contact"
      className="flex pb-20 gap-14 lg:flex-row flex-col items-start md:px-[108px] px-6"
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col md:w-[600px] md:h-[600px] justify-between w-full h-auto">
        <div>
          <h3 className="navh font-normal lg:text-[76px] text-[40px] text-white">
            Let’s connect
          </h3>

          <p className="text-[#C7C7C7] lg:w-[298px] w-full text-[16px]">
            Say hello at{" "}
            <span className="underline">tobigeorge99@yahoo.com</span>. For more
            info, here's my <span className="underline">resume</span>
          </p>

          <div className="flex gap-6 mt-6 lg:justify-start">
            <img src={lin} className="w-7 h-7" />
            <img src={hub} className="w-7 h-7" />
            <img src={xin} className="w-7 h-7" />
            <img src={gram} className="w-7 h-7" />
          </div>
        </div>

        <p className="text-[#C7C7C7] mt-10">© 2025 George Oluwatobi</p>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full">
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-6 w-full max-w-[600px]"
        >
          {/* NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-[#C7C7C7]">Name</label>
            <input
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              className={`w-full h-10 bg-[#1a1a1a] text-white px-4 py-3 rounded-md outline-none
                ${errors.from_name ? "border border-red-500" : ""}`}
            />
            {errors.from_name && (
              <p className="text-red-500 text-sm">{errors.from_name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-[#C7C7C7]">Email</label>
            <input
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              className={`w-full h-10 bg-[#1a1a1a] text-white px-4 py-3 rounded-md outline-none
                ${errors.from_email ? "border border-red-500" : ""}`}
            />
            {errors.from_email && (
              <p className="text-red-500 text-sm">{errors.from_email}</p>
            )}
          </div>

          {/* SUBJECT */}
          <div className="flex flex-col gap-2">
            <label className="text-[#C7C7C7]">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={`w-full h-10 bg-[#1a1a1a] text-white px-4 py-3 rounded-md outline-none
                ${errors.subject ? "border border-red-500" : ""}`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-[#C7C7C7]">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`w-full h-[156px] bg-[#1a1a1a] text-white px-4 py-3 rounded-md outline-none
                ${errors.message ? "border border-red-500" : ""}`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#d4e86a] text-black font-semibold px-10 py-3 mt-10 rounded-full hover:opacity-90 transition w-[180px] mx-auto lg:mx-0"
          >
            {isSubmitting ? "Sending..." : "SUBMIT"}
          </button>
        </form>

        <Toaster position="top-center" />
      </div>
    </div>
  );
};

export default Footer;
