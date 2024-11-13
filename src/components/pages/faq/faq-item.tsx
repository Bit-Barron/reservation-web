import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => (
  <Card className="overflow-hidden transition-all">
    <Button
      variant="ghost"
      onClick={onToggle}
      className="w-full justify-between px-6 py-4 hover:bg-violet-50"
    >
      <span className="text-left text-lg font-semibold">{question}</span>
      {isOpen ? (
        <ChevronUp className="h-5 w-5 text-violet-600" />
      ) : (
        <ChevronDown className="h-5 w-5 text-violet-600" />
      )}
    </Button>
    {isOpen && (
      <div className="bg-violet-50/30 px-6 py-4">
        <p className="text-gray-600">{answer}</p>
      </div>
    )}
  </Card>
);
