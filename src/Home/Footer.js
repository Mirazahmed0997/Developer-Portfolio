import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Name */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold">
              Miraz Ahmed
            </h3>
            <p className="text-sm">
              MERN Stack Developer & Shopify Specialist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Mirazahmed0997"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/miraz-ahmed-779b2822b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800" />

        {/* Bottom */}
        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} Miraz Ahmed. All rights reserved.
          </p>
          <p className="mt-1">
            Contact: <span className="text-gray-300">+880 1533-436831</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
