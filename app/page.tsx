import Navbar from "./components/Navbar";
import HeroFrame from "./components/HeroFrame";
import AboutSummary from "./about/about-summary";
import Skills from "./skills/skills";
import Feats from "./feats/feats";
import ProjectList from "./projects/project";

export default function Home() {
  return (
    <div className='bg-[#020202] min-h-screen text-white selection:bg-white/10'>
       <Navbar />
       
       <HeroFrame />

       <AboutSummary />

      <div className="max-w-7xl mx-auto px-6">
        <Skills />
      </div>
      
      <ProjectList />

      <div className="max-w-6xl mx-auto px-6">
        <Feats />
      </div>
      
    </div>
  );
}
