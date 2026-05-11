import Image from "next/image";
import ImageComponent from "./Hero/image";
import Title from "./Hero/title";
import Resume from "./Hero/resume";
import Name from "./components/name";
import AboutSummary from "./about/about-summary";
import GlowScrollbar from "./components/scrollbar";
import Skills from "./skills/skills";
import Feats from "./feats/feats";
import ProjectList from "./projects/project";
export default function Home() {
  return (
    <div className='bg-[#020202] min-h-screen'>
       
       <Title />
       <ImageComponent />
       <Resume />

       <AboutSummary />

      <div className="max-w-5xl mx-auto px-6">
      <Skills />
      </div>
      
      <ProjectList />
      <Feats />
      

     
       
    
    </div>
  );
}
