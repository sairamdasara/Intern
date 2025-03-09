import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">Intelion</div>
            <div className="flex space-x-4">
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Intelion</h1>
          <p className="text-xl mb-8">
            Empowering businesses with innovative solutions and cutting-edge
            technology.
          </p>
          <a
            href="#services"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            At Intelion, we specialize in delivering tailored solutions to help
            businesses thrive in the digital age. Our team of experts is
            dedicated to providing top-notch services that drive growth and
            innovation.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Consulting</h3>
              <p className="text-gray-700">
                We provide expert consulting services to help you navigate complex
                business challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Technology Solutions</h3>
              <p className="text-gray-700">
                Leverage our cutting-edge technology solutions to streamline your
                operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Digital Transformation</h3>
              <p className="text-gray-700">
                Transform your business with our comprehensive digital
                transformation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <p className="text-gray-700 text-center mb-8">
            Have questions or need assistance? Reach out to us today!
          </p>
          <form className="max-w-2xl mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2023 Intelion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
