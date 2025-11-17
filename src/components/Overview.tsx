import { Card } from "@/components/ui/card";
import { Brain, Code, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Development",
    description: "Learn how to leverage generative AI tools to accelerate software development and enhance code quality.",
  },
  {
    icon: Code,
    title: "Practical Engineering",
    description: "Hands-on experience with real-world applications, best practices, and industry-standard workflows.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Explore cutting-edge techniques and emerging technologies shaping the future of software engineering.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Network with professionals and experts, share knowledge, and build lasting connections.",
  },
];

const Overview = () => {
  return (
    <section className="py-24 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
       <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshop Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            LLM-based agents tackle different software development and maintenance tasks including code development, code completion, test case generation, debugging and issue fixing tasks. 
          </p> 
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From the agent perspective, there is a need to throw light on the basic agentic design components including planning, memory, perception, action and their roles and collaboration mechanisms, in multi-agent settings.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Further, the GenAI implementations are also seeing a need for Software Engineering rigor on robustness, reliability, scalability, security and privacy for wider adoption.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10 bg-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 shadow-glow">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 md:p-12 bg-gradient-hero text-white shadow-glow">
          <h3 className="text-3xl font-bold mb-4">Workshop Topics</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Requirements Engineering and Analysis along with Software Architecture and Design</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Software Development and Maintenance including refactoring and reengineering</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Software Verification, Testing and Debugging</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Legacy Modernization and Reverse Engineering from code and documents</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span>Human interaction with LLMs and LLM-based Agentic Frameworks</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Overview;
