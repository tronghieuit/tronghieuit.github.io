import "../index.css";

export const metadata = {
  metadataBase: new URL("https://tronghieuit.github.io/"),
  title: "Lê Trọng Hiếu — Speech AI Portfolio",
  description:
    "Vietnamese speech synthesis, lightweight models, and practical inference by Lê Trọng Hiếu.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Lê Trọng Hiếu — Speech AI Portfolio",
    description:
      "Vietnamese speech synthesis, lightweight models, and practical inference.",
    url: "https://tronghieuit.github.io/",
    siteName: "Lê Trọng Hiếu",
    type: "website",
    images: ["/images/profile-avatar.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lê Trọng Hiếu — Speech AI Portfolio",
    description:
      "Vietnamese speech synthesis, lightweight models, and practical inference.",
    images: ["/images/profile-avatar.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
