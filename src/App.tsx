import "./App.css";
import AboutUsSection from "./components/AboutUsSection";
import AboutWorkSection from "./components/AboutWorkSection";
import IntroSection from "./components/IntroSection";
import MainHeader from "./components/MainHeader";
import PetsInZooSection from "./components/PetsInZooSection";

function App() {
  return (
    <div className="">
      <MainHeader />
      <IntroSection />
      <AboutWorkSection />
      <AboutUsSection />
      <PetsInZooSection />
    </div>
  );
}

export default App;
