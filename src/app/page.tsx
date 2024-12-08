import Blog from "./components/blog";
import Heroimg from "./components/heroimg";
import HeroSection from "./components/herosec";
import Insta from "./components/insta";
import Navbar from "./components/navbar";
import Picks from "./components/picks";
import Sale from "./components/sale";

export default function Home() {
  return (
    
    <div>
      <Navbar />
      <HeroSection />
      <Heroimg/>
      <Picks/>
      <Sale />
      <Blog />
      <Insta />
      
</div>

  );
}
