import "./App.css";
import AboutUsSection from "./components/AboutUsSection";
import AboutWorkSection from "./components/AboutWorkSection";
import IntroSection from "./components/IntroSection";
import MainHeader from "./components/MainHeader";
import PetsInZooSection from "./components/PetsInZooSection";
import PlayAndFeedSection from "./components/PlayAndFeedSection";

function App() {
  return (
    <div className="">
      <MainHeader />
      <IntroSection />
      <AboutWorkSection />
      <AboutUsSection />
      <PetsInZooSection />
      <PlayAndFeedSection />
    </div>
  );
}

export default App;
