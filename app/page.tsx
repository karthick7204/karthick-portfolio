import Image from "next/image";
import ImageComponent from "./Hero/image";
import Title from "./Hero/title";
import Resume from "./Hero/resume";
import Name from "./components/name";
import AboutSummary from "./about/about-summary";
import GlowScrollbar from "./components/scrollbar";
import Skills from "./skills/skills";
import Feats from "./feats/feats";
export default function Home() {
  return (
    <div className='bg-[#010001] '>
       
       <Title />
       <ImageComponent />
       <Resume />

       <AboutSummary />

      <div className="max-w-3xl mx-auto px-6">
  <Skills />
</div>

      <Feats />
      

     
       
    
    </div>
  );
}
