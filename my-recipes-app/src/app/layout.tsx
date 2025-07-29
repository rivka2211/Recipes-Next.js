import "./globals.css";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";

export const metadata = {
  title: "מתכונים",
  description: "אוסף מתכונים אישי",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="he" dir="rtl" className="" >
       <body className="flex flex-col min-h-screen bg-blue text-gray-900 dark:bg-gray-900 dark:text-gray-100">
       {/* <body className="bg-blue text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex flex-col min-h-screen"> */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

