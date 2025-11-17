import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const schedule = [
  {
    day: "Morning Session",
    title: "Invited Talks & Papers",
    sessions: [
      { time: "09:00 - 09:10", topic: "Opening remarks by organizers" },
      { time: "09:10 - 11:30", topic: "Invited talks from Academics and Industry research (3 talks × 40 min)" },
      { time: "11:30 - 13:15", topic: "Talks based on Accepted Papers (5 talks × 20 min)" },
    ],
  },
  {
    day: "Afternoon Session",
    title: "Research & Practice",
    sessions: [
      { time: "14:00 - 15:30", topic: "Talks based on reviewed abstracts/Case studies/Demos (6 talks × 15 min)" },
      { time: "15:30 - 17:00", topic: "Hands-on Session/Problem Solving – Use Cases/Agents defining activity" },
      { time: "17:00 - 17:30", topic: "Lightning talks (4-6 talks × 5 min)" },
    ],
  },
  {
    day: "Closing Session",
    title: "Panel & Wrap-up",
    sessions: [
      { time: "17:30 - 18:30", topic: "Panel discussion on Best practices, Ethics & Guardrails, Trends" },
      { time: "18:30 - 18:45", topic: "Summary and Closing Remarks" },
    ],
  },
];

const Agenda = () => {
  return (
    <section className="py-24 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshop Format
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tentative schedule for the full day workshop with invited talks, accepted papers, hands-on sessions, and panel discussions
          </p>
        </div>
        
        <div className="space-y-8">
          {schedule.map((day, index) => (
            <Card key={index} className="overflow-hidden border-2 border-primary/10">
              <div className="bg-gradient-hero p-6 text-white">
                <h3 className="text-2xl font-bold">{day.day}</h3>
                <p className="text-white/90 text-lg mt-1">{day.title}</p>
              </div>
              
              <div className="p-6 space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <div 
                    key={sessionIndex}
                    className="flex gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-primary font-semibold min-w-[140px]">
                      <Clock className="w-5 h-5" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-card-foreground font-medium">{session.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            * Final format will encourage engaging and strong interactions among all participants. Coffee breaks and networking sessions included throughout the day.
            <br></br>
            * The Microsoft CMT service will be used for managing the peer-reviewing process for this workshop. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.

          </p>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
