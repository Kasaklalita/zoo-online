import "./App.css";
import AboutUsSection from "./components/AboutUsSection";
import AboutWorkSection from "./components/AboutWorkSection";
import IntroSection from "./components/IntroSection";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="">
      <MainHeader />
      <IntroSection />
      <AboutWorkSection />
      <AboutUsSection />
    </div>
  );
}

export default App;
