
import Bottomhero from "./components/bottomhero";
import Hero from "./components/hero";
import Ourmenu from "./components/ourmenu";
import Navbaar from "./navbar";
import "./globals.css"

export default function Home() {
  return (
   <div className="pl-4 pr-4">
    <Navbaar/>
    <Hero/>
    <Bottomhero/>
    <Ourmenu/>
   </div>
  );
}
