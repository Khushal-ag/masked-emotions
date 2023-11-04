import Navbar from "@/components/Navbar";

import "@/styles/globals.css";

export const metadata = {
  title: "Masked Emotions",
  description:
    "Present your emotions by staying quite and let the mask do the talking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="mx-auto flex max-w-7xl flex-col justify-between gap-8 py-6">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
