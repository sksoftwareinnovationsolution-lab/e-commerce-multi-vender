import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, Share2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const contactItems = [
  {
    icon: Phone,
    title: "Phone Support",
    lines: ["+91 12345 67890", "Mon - Sun, 9:00 AM - 9:00 PM"],
  },
  {
    icon: Mail,
    title: "Email Support",
    lines: ["support@omnivixo.com", "We reply within 24 hours"],
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    lines: ["Chat with our support team", "Available 24/7"],
  },
  {
    icon: MapPin,
    title: "Head Office",
    lines: [
      "Omnivixo Pvt. Ltd.",
      "123, Business Park, Sector 62,",
      "Noida, Uttar Pradesh - 201301, India",
    ],
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    className: "bg-[#1877F2] text-white",
  },
  {
    icon: FaTwitter,
    label: "Twitter/X",
    className: "bg-black text-white",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    className: "text-white",
    style: {
      backgroundImage:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
    },
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    className: "bg-[#FF0000] text-white",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    className: "bg-[#0A66C2] text-white",
  },
];

const subjectOptions = [
  "Select a subject",
  "Order Related Issue",
  "Payment & Refund",
  "Return / Exchange",
  "Seller / Vendor Query",
  "Other",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  orderId: "",
  message: "",
};

const labelClasses =
  "mb-1.5 block text-[0.82rem] font-semibold text-[#1e2a52]";

const inputClasses =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[0.88rem] text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100";

function SectionHeading({ children }) {
  return (
    <div>
      <h2 className="text-[1.35rem] leading-snug font-extrabold tracking-tight text-[#1e2a52] sm:text-[1.55rem]">
        {children}
      </h2>
      <span className="mt-2 block h-1 w-12 rounded-full bg-purple-600" />
    </div>
  );
}

function Field({ id, label, required, children }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required && <span className="text-pink-500"> *</span>}
      </label>
      {children}
    </div>
  );
}

function ContactFormSection() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => setForm(initialForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm(initialForm);
  };

  return (
    <section
      aria-label="Contact information and message form"
      className="mt-6 w-full overflow-hidden rounded-[1.5rem] border border-indigo-100/70 bg-white shadow-[0_10px_30px_-18px_rgba(79,70,229,0.25)] lg:mt-8"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left — Get in Touch */}
        <div className="w-full shrink-0 border-b border-gray-100 p-6 min-[480px]:px-7 sm:p-8 lg:w-[30%] lg:border-b-0 lg:border-r xl:w-[28%] xl:p-9">
          <SectionHeading>Get in Touch</SectionHeading>

          <div className="mt-6 flex flex-col gap-5">
            {contactItems.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                  <Icon size={18} strokeWidth={1.9} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.9rem] font-semibold text-gray-900">
                    {title}
                  </span>
                  {lines.map((line) => (
                    <span
                      key={line}
                      className="block text-[0.8rem] leading-relaxed text-gray-500"
                    >
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <Share2 size={18} strokeWidth={1.9} />
            </span>
            <div className="min-w-0">
              <p className="text-[0.9rem] font-semibold text-gray-900">
                Follow Us
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-start gap-2.5">
                {socialLinks.map(({ icon: Icon, label, className, style }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    title={label}
                    style={style}
                    className={`flex h-11 w-11 items-center justify-center rounded-lg transition-opacity hover:opacity-85 ${className}`}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right — Send Us a Message */}
        <div className="min-w-0 flex-1 p-6 min-[480px]:px-7 sm:p-8 xl:p-9">
          <SectionHeading>Send Us a Message</SectionHeading>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field id="fullName" label="Full Name" required>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </Field>
              <Field id="email" label="Email Address" required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field id="phone" label="Phone Number">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </Field>
              <Field id="subject" label="Subject" required>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`${inputClasses} cursor-pointer ${form.subject === "" ? "text-gray-400" : ""}`}
                >
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field id="orderId" label="Order ID (If Any)">
              <input
                id="orderId"
                name="orderId"
                type="text"
                placeholder="Enter your order ID"
                value={form.orderId}
                onChange={handleChange}
                className={inputClasses}
              />
            </Field>

            <Field id="message" label="Message" required>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Type your message here..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
            </Field>

            <div className="flex flex-col-reverse items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleClear}
                className="rounded-xl border border-purple-600 bg-white px-6 py-2.5 text-center text-[0.85rem] font-semibold text-purple-600 transition-colors hover:bg-purple-50"
              >
                Clear
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-2.5 text-[0.85rem] font-semibold text-white shadow-md shadow-purple-200 transition-opacity hover:opacity-90"
              >
                Send Message
                <Send size={16} strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
