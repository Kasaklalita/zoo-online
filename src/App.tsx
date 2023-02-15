import "./App.css";
import AboutUsSection from "./components/AboutUsSection";
import AboutWorkSection from "./components/AboutWorkSection";
import IntroSection from "./components/IntroSection";
import MainHeader from "./components/MainHeader";
import PetsInZooSection from "./components/PetsInZooSection";
import PlayAndFeedSection from "./components/PlayAndFeedSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <div className="">
      <MainHeader />
      <IntroSection />
      <AboutWorkSection />
      <AboutUsSection />
      <PetsInZooSection />
      <PlayAndFeedSection />
      <TestimonialsSection />
    </div>
  );
}

export default App;
