import { Card } from "@/components/ui/card";
import { Target, Zap, Rocket, Award } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "AI Augmentation",
    description: "How can LLMs be effectively augmented with additional capabilities to address multi-skill, long-drawn software development activities?",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Zap,
    title: "Knowledge Focus",
    description: "How to leverage local knowledge at scale during SDLC to provide the sharp focus needed beyond general LLM information?",
    color: "from-secondary to-primary",
  },
  {
    icon: Rocket,
    title: "Legacy Modernization",
    description: "Can Generative AI catalyze existing legacy modernization techniques to reduce cost, time and improve correctness?",
    color: "from-accent to-primary-glow",
  },
  {
    icon: Award,
    title: "Quality & Reliability",
    description: "What are best practices for maintaining accuracy, relevance, reliability and building secure GenAI applications?",
    color: "from-primary-dark to-accent",
  },
];

const Objectives = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Discussion Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The workshop seeks discussion and exploration of critical questions in GenAI and Software Engineering
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-2 border-primary/10"
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${objective.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${objective.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {objective.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
