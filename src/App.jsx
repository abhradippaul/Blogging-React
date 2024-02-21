import ContentSection from "./components/ContentSection";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";

function App() {
  return (
    <div>
      <div className="bg-slate-100">
        <Navbar />
      </div>
      <SubNavbar />
      <ContentSection />
    </div>
  );
}

export default App;
