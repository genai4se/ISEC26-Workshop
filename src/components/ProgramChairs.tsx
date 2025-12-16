import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const programChairs = [
    { name: "Pavan Chittimalli", affiliation: "TCS Research" },
    { name: "Chandan Prakash", affiliation: "TCS Research" },
    { name: "Mridula Verma", affiliation: "IDRBT" },
    { name: "Karthik Andhiyur Nagarajan", affiliation: "Infosys" },
    { name: "Vahida Attar", affiliation: "COEP Tech" },
    { name: "Anishraj Khobragade", affiliation: "COEP Tech" },
    { name: "Aditya Kanade", affiliation: "Microsoft Research" },
    { name: "Priyanshu Gupta", affiliation: "Microsoft" },
    { name: "Rodrigo Falcao", affiliation: "Fraunhofer IESE" },
    { name: "Matteo Esposito", affiliation: "University of Oulu" },
    { name: "Vikrant Kaulgud", affiliation: "Accenture Labs" },
    { name: "Rohit Mehra", affiliation: "Accenture Labs" },
    { name: "Y.V. Haribhakta", affiliation: "COEP Tech" },
];

const ProgramChairs = () => {
    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        PC Reviewers
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Distinguished experts leading the workshop program committee
                    </p>
                </div>

                <Card className="overflow-hidden border-2 border-primary/10 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {programChairs.map((chair, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-lg bg-muted/30 hover:bg-primary/5 transition-colors border border-primary/10"
                            >
                                <p className="text-lg font-medium text-foreground">
                                    {chair.name} <span className="text-muted-foreground">({chair.affiliation})</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default ProgramChairs;
