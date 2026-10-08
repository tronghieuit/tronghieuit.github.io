import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://tronghieuit.github.io"),
  icons: { icon: "/favicon.svg" },
  title: "Lê Trọng Hiếu — Speech AI & Machine Learning",
  description:
    "AI/ML developer building lightweight, practical machine-learning systems, with a focus on Vietnamese speech technology.",
  openGraph: {
    title: "Lê Trọng Hiếu — Speech AI & Machine Learning",
    description:
      "Lightweight machine-learning systems, Vietnamese text-to-speech, and practical speech technology.",
    url: "https://tronghieuit.github.io",
    siteName: "Lê Trọng Hiếu",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lê Trọng Hiếu — Speech AI & Machine Learning",
    description:
      "Lightweight machine-learning systems and practical speech technology.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
