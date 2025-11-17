import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const organizers = [
  {
    name: "Lalit Mohan Sanagavarapu",
    title: "Chief Product Officer",
    org: "Quick Heal Technologies Ltd",
    bio: "Lalit has 25+ years of experience in Cyber Security and building large scale systems for Banking and Financial Services. Lalit has 40+ publications and 2 patents with research interest in Cyber Security, Software Engineering for AI/ML, Information Retrieval & Extraction and Cloud Computing.",
  },
  {
    name: "Raveendra Kumar Medicherla",
    title: "Principal Scientist",
    org: "TCS Research",
    bio: "He has 28+ years of experience in Software services delivery and related research. His research interests include Symbolic, Generative AI, Neuro symbolic techniques to software systems transformation and Software testing.",
  },
  {
    name: "Vibhu Saujanya Sharma",
    title: "Innovation Principal Director",
    org: "Accenture Labs",
    bio: "Has 20+ years of experience in industrial and academic research in areas like software metrics and process insights, cloud computing, and software performance engineering. He has published more than 60+ peer-reviewed research papers in key journals and conferences and is an inventor in 75+ granted patents. His current research focuses on green software engineering and the use of Gen AI in software engineering.",
  },
  {
    name: "Ravindra Naik",
    title: "Professor of Practice",
    org: "COEP Technological University",
    bio: "Was former Chief Scientist at Tata Consultancy Services Research (TCSR), with over 36 years of experience in industry research around IT system transformations and software development tools, specializing in code analysis, software modelling, code synthesis, NL analysis and reasoning, and use of ML and GenAI for various software engineering tasks. He has 24+ publications and 10+ unique patents to his credit.",
  },
  {
    name: "Karthik Vaidhyanathan",
    title: "Assistant Professor",
    org: "IIIT-Hyderabad",
    bio: "He is also associated with the leadership team of smart city living lab. His main research interest is the intersection of software architecture and machine learning including GenAI with a specific focus on building sustainable software systems. As a part of his research activities, he serves as a reviewer/committee member in various international workshops, conferences, and journals. He is also an editorial board member of IEEE Software.",
  },
];

const Organizers = () => {
  return (
    <section className="py-24 px-6 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshop Organizers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Distinguished experts from academia and industry leading this workshop
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((organizer, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-card-foreground mb-1">
                  {organizer.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{organizer.title}</p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{organizer.org}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {organizer.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
