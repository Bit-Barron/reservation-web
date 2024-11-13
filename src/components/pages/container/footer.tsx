import { Calendar, Mail, PhoneCall, MessageCircle } from "lucide-react";
import React from "react";

export const Footer: React.FC = ({}) => {
  return (
    <footer className="bg-violet-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-violet-300" />
              <span className="text-xl font-bold">BookFlow</span>
            </div>
            <p className="text-violet-300">
              Streamline your booking experience with our powerful reservation
              system.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-violet-300">
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-violet-300">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Legal</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-violet-300">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" /> support@bookflow.com
              </li>
              <li className="flex items-center">
                <PhoneCall className="mr-2 h-4 w-4" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" /> Live Chat
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
