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
];

const ProgramChairs = () => {
    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Program Chairs
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Distinguished experts leading the workshop program committee
                    </p>
                </div>

                <Card className="overflow-hidden border-2 border-primary/10">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-hero text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left text-lg font-semibold">Name</th>
                                    <th className="px-6 py-4 text-left text-lg font-semibold">Affiliation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programChairs.map((chair, index) => (
                                    <tr
                                        key={index}
                                        className={`border-t border-primary/10 hover:bg-primary/5 transition-colors ${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                                            }`}
                                    >
                                        <td className="px-6 py-4 font-medium text-foreground">{chair.name}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{chair.affiliation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default ProgramChairs;
