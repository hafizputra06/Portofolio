import type { Metadata } from "next";
import { ComingSoonContent } from "./ComingSoonContent";

export const metadata: Metadata = {
  title: "Coming Soon | Hosting In Progress",
  description: "This project is currently being hosted. Stay tuned!",
};

export default function ComingSoonPage() {
  return <ComingSoonContent />;
}
