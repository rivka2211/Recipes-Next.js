import Link from "next/link";
import ContactEmail from "./ContactEmail";

export default function Footer() {
    return (
        <footer className="bg-green-700 text-white mt-10">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
                <div className="mb-4 md:mb-0 flex space-x-4 space-x-reverse">
                    <Link href="/" className="hover:underline">
                        דף הבית
                    </Link>
                    {" "} | {" "}
                    <Link href="/about" className="hover:underline">
                        אודות
                    </Link>
                </div>
                {/* <div className="mb-4 md:mb-0">
          ניתן ליצור קשר ב־{" "}
          <a href="mailto:r0548500974@gmail.com" className="underline hover:text-gray-300">
           מייל 
          </a>
        </div> */}
                <div className="mb-4 md:mb-0">
                    <ContactEmail />
                </div>
                <div>
                    <a
                        href="https://github.com/rivka2211"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-300"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
