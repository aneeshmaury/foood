
import Hero from "./components/hero";
import Navbaar from "./navbar";

export default function Home() {
  return (
   <div className="pl-4 pr-4">
    <Navbaar/>
    <Hero/>
   </div>
  );
}
