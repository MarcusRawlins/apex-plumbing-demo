"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Droplets,
  Wrench,
  ShowerHead,
  Flame,
  PipetteIcon,
  Clock,
  Shield,
  Award,
  Star,
  CheckCircle,
  MapPin,
  Mail,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: Wrench,
      title: "Emergency Repairs",
      description:
        "24/7 emergency plumbing services. We're here when you need us most.",
    },
    {
      icon: Droplets,
      title: "Leak Detection",
      description:
        "Advanced leak detection technology to find and fix hidden leaks fast.",
    },
    {
      icon: PipetteIcon,
      title: "Drain Cleaning",
      description:
        "Professional drain cleaning to keep your pipes flowing smoothly.",
    },
    {
      icon: Flame,
      title: "Water Heater Services",
      description:
        "Installation, repair, and maintenance for all water heater types.",
    },
    {
      icon: ShowerHead,
      title: "Bathroom Remodeling",
      description:
        "Complete bathroom plumbing for renovations and new installations.",
    },
    {
      icon: Clock,
      title: "Scheduled Maintenance",
      description:
        "Preventive maintenance plans to avoid costly emergency repairs.",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      location: "Riverside Heights",
      rating: 5,
      text: "Apex saved us during a midnight pipe burst. They arrived in 30 minutes and had everything fixed by morning. Absolutely professional and fairly priced. Will use them for all our plumbing needs!",
    },
    {
      name: "Robert Chen",
      location: "Downtown",
      rating: 5,
      text: "Finally, a plumber who shows up on time and doesn't overcharge. They replaced our water heater and even cleaned up after themselves. Refreshing experience in this industry.",
    },
    {
      name: "Amanda Thompson",
      location: "Oak Park",
      rating: 5,
      text: "We've used Apex for three different projects now. Consistent quality, transparent pricing, and genuinely nice people. They treat your home like it's their own.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">
                Apex Plumbing Co.
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Contact
              </a>
              <a href="tel:5551234567">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-4567
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a
                href="#services"
                className="block py-2 text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="block py-2 text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block py-2 text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="block py-2 text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a href="tel:5551234567" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-4567
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4 mr-2" />
                Licensed & Insured • 25+ Years Experience
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Trusted Local{" "}
                <span className="text-blue-600">Plumbing Experts</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From emergency repairs to complete installations, Apex Plumbing
                Co. delivers reliable, professional service you can count on.
                Available 24/7 for all your plumbing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:5551234567">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8 w-full sm:w-auto"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 w-full sm:w-auto"
                  >
                    Get Free Quote
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">500+ Reviews</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">10,000+ Jobs Done</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                    <Wrench className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">24/7 Emergency Service</h3>
                  <p className="text-blue-100">
                    Plumbing emergencies don&apos;t wait. Neither do we.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center bg-white/10 rounded-lg p-4">
                    <Clock className="h-6 w-6 mr-3" />
                    <div>
                      <p className="font-semibold">Fast Response</p>
                      <p className="text-sm text-blue-100">
                        Average arrival: 45 minutes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 rounded-lg p-4">
                    <Shield className="h-6 w-6 mr-3" />
                    <div>
                      <p className="font-semibold">100% Satisfaction</p>
                      <p className="text-sm text-blue-100">
                        Guaranteed or your money back
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 rounded-lg p-4">
                    <Award className="h-6 w-6 mr-3" />
                    <div>
                      <p className="font-semibold">No Hidden Fees</p>
                      <p className="text-sm text-blue-100">
                        Upfront pricing, always
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From small repairs to major installations, we handle it all with
              expertise and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300 border-gray-200"
              >
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Your Neighbors for Over 25 Years
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Apex Plumbing Co. was founded in 1998 with a simple mission:
                provide honest, reliable plumbing services that treat every home
                like our own. Three generations later, we&apos;re still family-owned
                and operated.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of certified plumbers brings decades of combined
                experience to every job. We invest in ongoing training and the
                latest tools to ensure we deliver the best results, every time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-blue-600">25+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-blue-600">10,000+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-blue-600">15</p>
                  <p className="text-gray-600">Expert Plumbers</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-blue-600">24/7</p>
                  <p className="text-gray-600">Emergency Service</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Licensed & Insured
                  </h3>
                  <p className="text-gray-600">
                    Fully licensed, bonded, and insured for your complete peace
                    of mind.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Quality Guaranteed
                  </h3>
                  <p className="text-gray-600">
                    All work backed by our 100% satisfaction guarantee and
                    warranty.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    5-Star Rated
                  </h3>
                  <p className="text-gray-600">
                    Consistently rated 5 stars on Google, Yelp, and Angi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from homeowners who trust
              Apex Plumbing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold text-lg">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and we&apos;ll get back to you within 2 hours
                during business hours. For emergencies, call us directly.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <a
                      href="tel:5551234567"
                      className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <a
                      href="mailto:hello@apexplumbing.com"
                      className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                    >
                      hello@apexplumbing.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Service Area</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Metro Area & Surrounding 25 Miles
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600">
                        We&apos;ve received your request and will contact you within 2
                        hours.
                      </p>
                      <Button
                        className="mt-4"
                        variant="outline"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Send Another Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          How Can We Help?
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Describe your plumbing issue or project..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        size="lg"
                      >
                        Request Free Quote
                      </Button>
                      <p className="text-sm text-gray-500 text-center">
                        No spam, ever. We respect your privacy.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl">Apex Plumbing Co.</span>
              </div>
              <p className="text-gray-400 mb-4">
                Family-owned and operated since 1998. Providing reliable,
                professional plumbing services to our community.
              </p>
              <p className="text-gray-400">License #PLB-123456</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:5551234567" className="hover:text-white transition">
                    (555) 123-4567
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@apexplumbing.com"
                    className="hover:text-white transition"
                  >
                    hello@apexplumbing.com
                  </a>
                </li>
                <li>24/7 Emergency Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Apex Plumbing Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
