import React from "react";
import {
  Briefcase,
  Users,
  ShieldCheck,
  Wallet,
  Globe,
  Star,
} from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Briefcase className="w-10 h-10 text-accent" />,
      title: "Smart Project Matching",
      description:
        "Connect with the right freelancers or clients instantly using our intelligent recommendation system designed for success.",
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Collaborative Workspace",
      description:
        "Work together seamlessly through real-time chat, file sharing, and task management all in one platform.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      title: "Secure Payment System",
      description:
        "Our escrow-based payment system ensures safety for both clients and freelancers. Funds are released only upon project approval.",
    },
    {
      icon: <Wallet className="w-10 h-10 text-accent" />,
      title: "Flexible Earning Models",
      description:
        "Choose how you earn — hourly, fixed-price, or milestone-based payments. Your freedom, your way.",
    },
    {
      icon: <Globe className="w-10 h-10 text-accent" />,
      title: "Global Reach",
      description:
        "Collaborate beyond borders. Our platform connects talented freelancers and innovative clients worldwide.",
    },
    {
      icon: <Star className="w-10 h-10 text-accent" />,
      title: "Verified Ratings & Reviews",
      description:
        "A transparent review system builds trust — helping top performers shine and clients hire confidently.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Key Features of{" "}
          <span className="text-primary">Freelance Marketplace</span>
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Our goal is to make freelancing simple, transparent, and rewarding for
          everyone. Here are some of the platform’s standout features that help
          freelancers and clients collaborate with confidence.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
