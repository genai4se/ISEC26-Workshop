
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollText, FileText } from "lucide-react";

interface Paper {
  title: string;
  authors: string[];
  type: "Paper" | "Abstract";
}

const papers: Paper[] = [
  {
    title: "The Role of AI in Epistemic Usability: Assessing User Knowledge to Optimize Product Design",
    authors: [
      "Vikrant Bhosle",
      "Sanika Halale",
      "Akhilesh Tetambe",
      "Jaideep Chandran",
      "Archana Janjal",
    ],
    type: "Paper",
  },
  {
    title: "Beyond Input Maturity: Evolving LLM-Based Test Generation",
    authors: [
      "Hrishikesh Karmarkar",
      "Nishtha Arora",
      "Pankaj Agrawal",
    ],
    type: "Paper",
  },
  {
    title: "RegAnaCheck : Leveraging Generative AI for Regulatory Applicability Analysis",
    authors: [
      "Soham Raktawan",
      "Asha Rajbhoj",
      "Vinay Kulkarni",
    ],
    type: "Paper",
  },
  {
    title: "The Role of GitHub Copilot-Assisted Development in the Adoption of Lightweight Edge Agents: A Perspective on Lifecycle Acceleration, Local Inference, and Security",
    authors: [
      "S. Ravi Chandra",
      "Piyush Ghodke",
      "Balaji Kumbhar",
    ],
    type: "Paper",
  },
  {
    title: "Assessing General Purpose LLMs for Design Generation from Ontological Prompt Representations devoid of Design Clues",
    authors: ["Jaya Bharti", "Rushikesh Joshi"],
    type: "Paper",
  },
  {
    title: "SmartDocComparator - A Template Guided Smart Document Comparator for Acceptance Testing",
    authors: [
      "Pavan Kumar CHITTIMALLI",
      "RATHAN VEER BALLA",
      "CHANDAN PRAKASH",
      "RAVINDRA NAIK",
    ],
    type: "Paper",
  },
  {
    title: "Tracing Domain Services in Application Code using Generative AI",
    authors: [
      "Jay Gandhi",
      "Shrishti Pradhan",
      "Raveendra Kumar Medicherla",
    ],
    type: "Paper",
  },
  {
    title: "Agentic AI-Assisted Traceability and Validation in Silicon Engineering",
    authors: [
      "Priyavanshi Pathania",
      "Sankar Narayan Das",
      "Vibhu Saujanya Sharma",
      "Swapnajeet Choudhury",
      "Nikhil Bamby",
      "Vikrant Kaulgud",
      "Anil Kempanna",
      "Uday Joshi",
    ],
    type: "Abstract",
  },
  {
    title: "The Rise of Agentic Tutors: Contextual, Personalized, and In-Flow Learning for Software Developers",
    authors: [
      "Rohit Mehra",
      "Kapil Singi",
      "Vibhu Saujanya Sharma",
      "Vikrant Kaulgud",
    ],
    type: "Abstract",
  },
];

const AcceptedPapers = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Accepted Papers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are proud to present the list of accepted papers and abstracts for
            the workshop.
          </p>
        </div>

        <div className="grid gap-6">
          {papers.map((paper, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary/10 hover:border-l-primary bg-card/50 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="mt-1">
                  {paper.type === "Paper" ? (
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <FileText className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg bg-secondary/10 text-secondary-foreground">
                      <ScrollText className="w-6 h-6" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant={paper.type === "Paper" ? "default" : "secondary"}>
                      {paper.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-tight">
                    {paper.title}
                  </h3>
                  <div className="text-muted-foreground">
                    <p className="text-sm font-medium uppercase tracking-wider mb-2 text-primary/80">
                      Authors
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {paper.authors.map((author, idx) => (
                        <span key={idx} className="text-sm bg-secondary/30 px-2 py-1 rounded text-foreground/80">
                          {author}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcceptedPapers;
