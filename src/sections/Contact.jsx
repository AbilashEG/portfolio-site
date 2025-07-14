import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_rvpakmh", // ✅ working service ID
        "template_js65gcv", // ✅ working template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "mjwrLTppWMG32EGZu" // ✅ working public key
      );

      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      console.error("EmailJS error:", error);
      showAlertMessage("danger", "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative c-space section-spacing" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-5 border border-white/10 rounded-2xl bg-primary">
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's Talk</h2>
            <p className="font-normal text-neutral-400">
              Whether you're looking to build a new website, improve your existing
              platform, or bring a unique project to life, I'm here to help
            </p>
          </div>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="feild-label">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="feild-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="JohnDoe@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="feild-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Share your thoughts..."
                autoComplete="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            >
              {!isLoading ? "Send" : "Sending..."}
            </button>
          </form>
        </div>

        {/* Right Side Quote */}
        <div className="w-full md:w-1/2 px-4 text-center md:text-left text-white">
          <h3 className="text-3xl md:text-4xl font-extrabold leading-relaxed tracking-wide">
            Building <span className="text-yellow-400">better</span> every<br />
            line at a <span className="text-yellow-400">time</span>.
          </h3>
          <p className="mt-4 text-base text-white/60 font-light">– Abilash EG</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
