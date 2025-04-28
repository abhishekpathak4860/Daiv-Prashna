import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";

function Footer() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.reload();
  };

  // for whatsapp conatct
  const phoneNumber = "919930005234";
  const message = "Hello, I'm interested in your astrology services";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <footer className="bg-custom-maroon border-t border-custom-yellow-dark">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm text-custom-yellow uppercase font-bold">
              Help center
            </h2>
            <ul className="text-custom-ivory dark:text-custom-ivory font-medium">
              <li>
                <a href="/contact_us" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="my-2">
                <a href="/founder" className="hover:underline">
                  Founder
                </a>
              </li>
              <li>
                {token ? (
                  <li className="flex flex-col items-start my-2">
                    <a href="/admin" className="hover:underline">
                      Admin
                    </a>
                    <button
                      onClick={handleLogout}
                      className="hover:underline text-red-500 mt-2"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <a href="/admin" className="hover:underline">
                    Admin
                  </a>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm text-custom-yellow uppercase font-bold">
              Legal
            </h2>
            <ul className="text-custom-ivory dark:text-custom-ivory font-medium">
              <li className="mb-4">
                <a href="/privacy_policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="/privacy_policy#term" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="/return_refund" className="hover:underline">
                  Return &amp; Refund
                </a>
              </li>
              <li className="mb-4">
                <a href="/shipping" className="hover:underline">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm text-custom-yellow uppercase font-bold">
              Connect With Us
            </h2>
            <ul className="text-custom-ivory dark:text-custom-ivory font-medium ml-5 ">
              <li className="mb-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="hover:underline"
                >
                  <FaFacebook className="size-6" />
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="hover:underline"
                >
                  <IoLogoInstagram className="size-6" />
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="hover:underline"
                >
                  <FaXTwitter className="size-6" />
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="hover:underline"
                >
                  <FaLinkedin className="size-6" />
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  className="hover:underline"
                >
                  <IoLogoYoutube className="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className=" relative right-7 md:right-0">
            <h2 className="mb-6 text-sm text-custom-yellow uppercase font-bold text-center">
              Chat With Us on WhatsApp
            </h2>
            <ul className="text-custom-ivory dark:text-custom-ivory font-medium text-center">
              <li>
                <a href={whatsappLink} className="hover:underline">
                  <IoLogoWhatsapp className="size-6 text-center ml-16 md:ml-28" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-custom-yellow md:flex  md:items-center md:justify-center rounded-t-lg">
          <span className="text-base text-custom-maroon dark:text-custom-maroon sm:text-center font-bold">
            © 2025 <a href="https://flowbite.com/">Daiv-Prashna</a>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
