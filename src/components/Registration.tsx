import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Mail, Phone, FileText } from "lucide-react";

const submissionTypes = [
  {
    name: "Full Papers",
    format: "ISEC'26 ACM Format (5 pages)",
    description: "Original research work",
    features: [
      "Novel approaches and methodologies",
      "Experimental results and case studies with insights",
      "Peer-reviewed by eminent researchers from industry and academic",
    ],
    highlighted: false,
  },
  {
    name: "Extended Abstracts",
    format: "Text Format (Max 500 words)",
    description: "Most accessible submission",
    features: [
      "Case studies and best practices",
      "Interesting experiments",
      "Lessons learned from practice",
      "Ideal for practitioners and keen to share early work",
    ],
    highlighted: false,
  },
  {
    name: "Talks & Demos",
    format: "Proposal Submission",
    description: "Interactive presentations",
    features: [
      "Live demonstrations",
      "Tool presentations",
      "Work-in-progress sharing",
      "Lightning talk opportunities",
    ],
    highlighted: false,
  },
];

const Registration = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Call for Papers & Extended Abstracts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At least one author must register for ISEC to present in-person.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {submissionTypes.map((type, index) => (
            <Card
              key={index}
              className={`relative p-8 transition-all duration-300 hover:-translate-y-2 ${type.highlighted
                ? 'border-primary border-2 shadow-glow bg-gradient-to-b from-card to-primary/5'
                : 'border-2 border-primary/10'
                }`}
            >
              {/* {type.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-hero text-white text-sm font-semibold rounded-full">
                  RECOMMENDED
                </div>
              )} */}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{type.name}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <div className="text-lg font-semibold text-primary mb-2">{type.format}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={type.highlighted ? "hero" : "outline"}
                className="w-full"
                size="lg"
                asChild
              >
                <a href="https://cmt3.research.microsoft.com/GenAISE2026/Submission/Index" target="_blank" rel="noopener noreferrer">
                  Submit {type.name}
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-muted/30 mb-12">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">*</span> Like all other articles in ISEC proceedings, accepted workshop papers will also be published as per ACM{" "}
              <a href="https://authors.acm.org/open-access" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                Open Access
              </a>
              . A fee of $125 (for authors based in India and ACM members) per paper will have to be paid to ACM by authors if the corresponding author is not from a{" "}
              <a href="https://libraries.acm.org/acmopen/open-participants" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                participating organization/institute/university
              </a>
              , or the institute/university is not covered under GoI's{" "}
              <a href="https://libraries.acm.org/acmopen/one-nation-one-subscription" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                One Nation One Subscription (ONOS)
              </a>
              .
            </p>
          </div>
        </Card>

        <Card className="p-8 md:p-12 bg-muted/30 mb-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Important Dates</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2"><s>Dec 15, 2025</s></div>
              <p className="text-muted-foreground font-medium">Abstract Submission Deadline</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Dec 31, 2025</div>
              <p className="text-muted-foreground font-medium">Paper Submission / Extended Abstract Deadline</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">Jan 15, 2026</div>
              <p className="text-muted-foreground font-medium">Notification of Acceptance</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 md:p-12 bg-muted/30">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">Primary Contact</h4>
              <a href="mailto:genai4se@googlegroups.com" className="text-primary hover:text-primary-dark transition-colors">
                genai4se@googlegroups.com
              </a>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">Submission Format</h4>
              <a href="https://www.acm.org/publications/proceedings-template" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                ACM Proceedings Template
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Registration;
