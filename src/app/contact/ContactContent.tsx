"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

const EMAILJS_PUBLIC_KEY = "FYBX_nlFnSG6XA9U9";
const EMAILJS_SERVICE_ID = "service_do3y7rr";
const EMAILJS_TEMPLATE_ID = "template_7acqo0m";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState("");

  const formatWIB = (): string => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Jakarta",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return now.toLocaleDateString("id-ID", options) + " WIB";
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: formatWIB(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSendError("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Get In Touch
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I&apos;ll get back to you as soon as possible.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:hafizrahadianputra06@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hafizrahadianputra06@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Purwokerto, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/hafiz-putra-336aa6282/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedIn.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a
                        href="https://github.com/hafizputra06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/hafizputra06
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-card border border-border rounded-xl p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. I&apos;ll get back to you soon.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <Input
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          name="subject"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleChange}
                          error={errors.subject}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          name="message"
                          placeholder="Tell me about your project..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          error={errors.message}
                        />
                      </div>

                      {sendError && (
                        <p className="text-red-500 text-sm">{sendError}</p>
                      )}

                      <Button
                        type="submit"
                        variant="dark"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
