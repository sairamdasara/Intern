import React, { useState, useEffect } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-10 top-0 transition-all duration-300 ${
          hasScrolled ? "bg-blue-600 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Intelion</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="text-white hover:text-gray-200 transition"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-gray-200 transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-200 transition"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29a1 1 0 00-1.42 1.42L10.83 12l-5.12 5.29a1 1 0 001.42 1.42L12 14.83l4.88 4.88a1 1 0 001.42-1.42L13.17 12l5.13-6.29z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600">
            <a
              href="#home"
              className="block px-4 py-2 text-white hover:bg-blue-500 transition"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-white hover:bg-blue-500 transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-white hover:bg-blue-500 transition"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="pt-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-blue-700 transition-transform duration-500 transform hover:scale-105">
          Welcome to Intelion
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Leading Financial &amp; Consultancy Services
        </p>
        <a
          href="https://finolity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Learn More
        </a>
      </header>

      {/* Features Section */}
      <section id="services" className="mt-12 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-blue-700">Consulting</h3>
            <p className="mt-2 text-gray-600">
              Expert business consulting for growth.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-blue-700">Financial Planning</h3>
            <p className="mt-2 text-gray-600">
              Helping businesses manage finances.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-blue-700">Tech Solutions</h3>
            <p className="mt-2 text-gray-600">
              Innovative technology to boost businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-12 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-12 p-4 bg-gray-800 text-white text-center">
        <p>© 2025 Finolity Consultancy Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
