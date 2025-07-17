import Nav from "./components/Nav";
import Herosection from "./components/Herosection";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Nav/>
        <Herosection/>
        <Features/> 
      <Footer/>
    </div>
  );
}
