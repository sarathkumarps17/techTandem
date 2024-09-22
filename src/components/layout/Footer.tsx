import { Code } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            <Code className="inline-block w-4 h-4 scale-125 mb-1 mx-1" />
            TechTandem
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
