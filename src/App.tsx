import "./App.css";
import AboutUsSection from "./components/AboutUsSection";
import AboutWorkSection from "./components/AboutWorkSection";
import IntroSection from "./components/IntroSection";
import MainFooter from "./components/MainFooter";
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
      <MainFooter />
    </div>
  );
}

export default App;
