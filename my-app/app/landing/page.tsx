"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCartIcon,
  ArchiveBoxIcon,
  UserGroupIcon,
  ServerIcon,
  GlobeAltIcon,
  CubeIcon,
  ChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

// Define types for our feature items
interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Type for testimonial
interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

// Type for pricing tier
interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

// Enhanced intersection observer hook that triggers every time
function useIsVisible(ref: React.RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
}

// Feature items data
const featureItems: FeatureItem[] = [
  {
    icon: ShoppingCartIcon,
    title: "Easy Product Management",
    description:
      "Track your products, manage quantities, and update stock levels with ease.",
  },
  {
    icon: ArchiveBoxIcon,
    title: "Sales Tracking",
    description:
      "Monitor your sales in real time, helping you stay on top of your inventory.",
  },
  {
    icon: UserGroupIcon,
    title: "Team Collaboration",
    description:
      "Collaborate with your team to ensure smooth inventory operations.",
  },
  {
    icon: ServerIcon,
    title: "Cloud-Based Sync",
    description:
      "Sync your inventory data across devices in real-time, keeping everything up to date.",
  },
  {
    icon: GlobeAltIcon,
    title: "Global Access",
    description:
      "Access your inventory system from anywhere, anytime, on any device.",
  },
  {
    icon: CubeIcon,
    title: "Flexible Dashboard",
    description:
      "Customize your dashboard layout to match your specific needs.",
  },
];

// Testimonials data
const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    company: "TechCorp Inc.",
    content:
      "InventoryPro transformed how we manage our warehouse. The real-time tracking and analytics have reduced our stockouts by 75%.",
  },
  {
    name: "Michael Chen",
    role: "Store Owner",
    company: "Chen Electronics",
    content:
      "The ease of use and powerful features make this the perfect solution for small businesses. Customer support is exceptional!",
  },
  {
    name: "Emily Rodriguez",
    role: "Supply Chain Director",
    company: "Global Logistics",
    content:
      "We've seen a 40% improvement in inventory turnover since implementing InventoryPro. The ROI has been remarkable.",
  },
];

// Pricing tiers
const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses",
    features: [
      "Up to 1,000 items",
      "Basic analytics",
      "Email support",
      "2 team members",
      "Cloud storage",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    description: "For growing businesses",
    highlighted: true,
    features: [
      "Up to 10,000 items",
      "Advanced analytics",
      "Priority support",
      "10 team members",
      "API access",
      "Custom reports",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited items",
      "Custom solutions",
      "24/7 support",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom integration",
    ],
  },
];

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const keyFeaturesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  const isFeaturesVisible = useIsVisible(keyFeaturesRef);
  const isTestimonialsVisible = useIsVisible(testimonialsRef);
  const isPricingVisible = useIsVisible(pricingRef);
  const isStatsVisible = useIsVisible(statsRef);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="bg-gradient-to-b from-black to-blue-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full py-4 px-6 fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">InventoryPro</div>
          <nav className="space-x-4">
            <Link href="/auth">
              <Button className="text-white hover:bg-gray-700 px-4 py-2 rounded-md bg-black">
                Log In
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex justify-center items-center mt-24 py-32">
        <div className="text-center max-w-2xl w-full px-4">
          <div className="mb-6 inline-block">
            <span className="bg-indigo-500/10 text-indigo-300 text-sm py-1 px-3 rounded-full">
              New: Advanced Analytics Dashboard
            </span>
          </div>
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
            Manage Your Inventory Like a Pro
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Simplify your inventory management with our powerful tool. Track
            stock, manage sales, and optimize your workflow with real-time
            insights.
          </p>
          <form
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg w-full sm:w-80 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={handleEmailChange}
            />
            <Button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
            >
              Start Free Trial
            </Button>
          </form>
          <p className="mt-4 text-sm text-gray-400">
            14-day free trial · No credit card required
          </p>
        </div>
      </main>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className={`py-16 transform transition-all duration-1000 ease-out ${
          isStatsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-indigo-400 mb-2">
                50K+
              </div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-indigo-400 mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-indigo-400 mb-2">
                24/7
              </div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-indigo-400 mb-2">
                150+
              </div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        ref={keyFeaturesRef}
        className={`py-16 transform transition-all duration-1000 ease-out ${
          isFeaturesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-12">
            <StarIcon className="h-8 w-8 text-indigo-600 mr-4" />
            <h2 className="text-4xl font-bold text-white">
              Track Everything in a Single Dashboard
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureItems.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl transform transition-all duration-700 ease-out hover:scale-105 hover:bg-gray-800 ${
                    isFeaturesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <Icon className="h-12 w-12 text-indigo-600 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className={`py-16 transform transition-all duration-1000 ease-out ${
          isTestimonialsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl transform transition-all duration-700 ease-out ${
                  isTestimonialsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4">
                  <UserCircleIcon className="h-12 w-12 text-indigo-600" />
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-indigo-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={pricingRef}
        className={`py-16 transform transition-all duration-1000 ease-out ${
          isPricingVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative p-6 rounded-xl shadow-xl transform transition-all duration-700 ease-out ${
                  tier.highlighted
                    ? "bg-indigo-600"
                    : "bg-gray-800/50 backdrop-blur-sm"
                } ${
                  isPricingVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white text-sm py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-2">{tier.price}</div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <ChartBarIcon className="h-5 w-5 mr-2 text-indigo-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-3 rounded-lg ${
                    tier.highlighted
                      ? "bg-white text-indigo-600 hover:bg-gray-100"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Inventory Management?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust InventoryPro to streamline
            their operations. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="w-full sm:w-auto px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg">
              Start Free Trial
            </Button>
            <Button className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg">
              Schedule Demo
            </Button>
          </div>
          <p className="mt-4 text-sm opacity-80">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">InventoryPro</h3>
              <p className="text-gray-400 mb-4">
                Making inventory management simple and efficient for businesses
                worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  {/* Add social icons here */}
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} InventoryPro. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
