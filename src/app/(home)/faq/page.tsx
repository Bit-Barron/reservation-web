"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { HelpCircle, MessageSquare, Mail, PhoneCall } from "lucide-react";
import { faqs } from "@/utils/constants/faq";
import { FAQItem } from "@/components/pages/faq/faq-item";

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <HelpCircle className="mx-auto mb-6 h-16 w-16 text-violet-600" />
          <h1 className="mb-6 text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Find answers to common questions about BookFlows features, pricing,
            and services
          </p>
        </div>

        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 pl-12 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
            <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="mb-16 space-y-4">
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="rounded-2xl bg-violet-50 p-8 text-center">
          <h3 className="mb-6 text-2xl font-bold">Still Have Questions?</h3>
          <p className="mb-8 text-gray-600">
            Cant find the answer youre looking for? Please contact our friendly
            team.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 text-center">
              <Mail className="mx-auto mb-4 h-8 w-8 text-violet-600" />
              <h4 className="mb-2 font-semibold">Email Us</h4>
              <p className="text-sm text-gray-600">support@bookflow.com</p>
            </Card>
            <Card className="p-6 text-center">
              <PhoneCall className="mx-auto mb-4 h-8 w-8 text-violet-600" />
              <h4 className="mb-2 font-semibold">Call Us</h4>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </Card>
            <Card className="p-6 text-center">
              <MessageSquare className="mx-auto mb-4 h-8 w-8 text-violet-600" />
              <h4 className="mb-2 font-semibold">Live Chat</h4>
              <p className="text-sm text-gray-600">Available 24/7</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
