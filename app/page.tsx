import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/recentProjects";
import  FloatingNavBar  from "@/components/ui/floating-navbar"
// import { FaHome } from "react-icons/fa";
import { NavLinks } from "@/constants/constants";
import Testimonies from "@/components/Services";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <FloatingNavBar navItems={NavLinks}/>
       
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Testimonies/>
      </div>
        
    </main>
  );
}
