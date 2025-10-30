import "../style/globals.css";

export const metadata = {
  title: "Crooz Admin",
  description: "Write meta description here.........",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
