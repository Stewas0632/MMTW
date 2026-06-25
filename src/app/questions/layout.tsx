import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask a Question",
  description:
    "Submit your questions to MMTW. — product details, orders, sizing, and more.",
};

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
