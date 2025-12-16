import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Objectives from "@/components/Objectives";
import Registration from "@/components/Registration";
import ProgramChairs from "@/components/ProgramChairs";
import Agenda from "@/components/Agenda";
import Organizers from "@/components/Organizers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <Objectives />
      <Registration />
      <ProgramChairs />
      <Agenda />
      <Organizers />
      <Footer />
    </main>
  );
};

export default Index;
