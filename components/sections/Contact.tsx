"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

/**
 * Where the form message should go.
 *
 * Option 1 (default, no backend needed):
 *   Keep CONTACT_ENDPOINT empty — the visitor's email app opens with the
 *   message pre-filled, so you receive it as a normal email.
 *   >>> Replace CONTACT_EMAIL with your real address. <<<
 *
 * Option 2 (silent delivery, no email app needed):
 *   Put a form endpoint here, e.g. "https://formspree.io/f/xxxxxxxx"
 *   (Formspree, Basin, or your own API route). The form will POST JSON.
 */
const CONTACT_EMAIL = "israfil.dev79@gmail.com";
const CONTACT_ENDPOINT = "https://formspree.io/f/xbggvgag";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

const emptyForm: FormValues = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormValues>(emptyForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;

      setForm((previous) => ({ ...previous, [field]: value }));

      // Clear an old error/success note as soon as the visitor types again.
      if (status !== "idle") {
        setStatus("idle");
        setFeedback("");
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please fill in all three fields before sending.");
      return;
    }

    setStatus("sending");

    // Option 2: send straight to a form endpoint.
    if (CONTACT_ENDPOINT) {
      try {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        setStatus("success");
        setFeedback(`Thanks, ${name}! Your message has been sent.`);
        setForm(emptyForm);
      } catch {
        setStatus("error");
        setFeedback("Something went wrong. Please try again in a moment.");
      }

      return;
    }

    // Option 1: hand the message over to the visitor's email app.
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("success");
    setFeedback(
      "Your email app should open with the message ready — just press Send there."
    );
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">

        {/* Section Heading */}
        <div className="contact-heading">
          <span className="section-label">
            CONTACT
          </span>

          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="section-description">
            Have a project in mind or just want to say hello?
            Send me a message — I usually reply within a day.
          </p>
        </div>

        <div className="contact-wrapper">

          {/* Left — Form Card */}
          <div className="contact-card">
            <h3 className="contact-card-title">
              Send Me a Message
            </h3>

            <p className="contact-card-text">
              Fill in the form below and I&apos;ll get back to you.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="contact-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="What's your good name?"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="What's your web address?"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="What you want to say?"
                  required
                  value={form.message}
                  onChange={handleChange("message")}
                />
              </div>

              <button
                type="submit"
                className="btn-primary contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send"}
                <span>↗</span>
              </button>

              <p
                className={`contact-status contact-status--${status}`}
                role="status"
                aria-live="polite"
              >
                {feedback}
              </p>
            </form>
          </div>

          {/* Right — Decorative Visual */}
          <div className="contact-visual" aria-hidden="true">
            <div className="contact-orbit">
              <span className="contact-ring contact-ring--back" />
              <span className="contact-globe" />
              <span className="contact-ring contact-ring--one" />
              <span className="contact-ring contact-ring--two" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}