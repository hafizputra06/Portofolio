import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Laravel & PHP Developer",
  description: "Get in touch for project inquiries, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return <ContactContent />;
}
