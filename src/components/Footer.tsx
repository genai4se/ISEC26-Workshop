const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GenAI based SE 2026</h3>
            <p className="text-white/80 leading-relaxed">
              Third Workshop on Generative AI based Software Engineering @ ISEC'26, IIS Jaipur, India
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#questions" className="hover:text-white transition-colors">Key Questions</a></li>
              <li><a href="#format" className="hover:text-white transition-colors">Workshop Format</a></li>
              <li><a href="#organizers" className="hover:text-white transition-colors">Organizers</a></li>
              <li><a href="#submission" className="hover:text-white transition-colors">Call for Papers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Conference</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="https://conf.researchr.org/home/isec-2026" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISEC'26 Website</a></li>
              <li><a href="https://www.acm.org/publications/proceedings-template" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ACM Template</a></li>
              <li><a href="mailto:genai4se@googlegroups.com" className="hover:text-white transition-colors">Contact Organizers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-white/70">
          <p>&copy; 2026 Third Workshop on Generative AI based Software Engineering (GenAI based SE). Part of ISEC'26.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
