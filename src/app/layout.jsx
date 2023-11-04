import "@/styles/globals.css";

export const metadata = {
  title: "Masked Emotions",
  description:
    "Present your emotions by staying quite and let the mask do the talking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
