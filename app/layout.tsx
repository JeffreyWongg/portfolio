import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Jeffrey Wong's Portfolio",
  icons: {
    icon: "/jeffrey-logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
