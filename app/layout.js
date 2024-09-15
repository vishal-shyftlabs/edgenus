import { Montserrat_Alternates } from "@next/font/google";
import "./globals.css";

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Select weights as needed
});

export const metadata = {
  title: "Edgenus",
  description: "Effortless Setup and Managment for Creative Brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
