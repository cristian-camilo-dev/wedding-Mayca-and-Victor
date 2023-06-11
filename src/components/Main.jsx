import CardConfirmation from "./CardConfirmation";
import CoverPage from "./CoverPage";
import LeisureSection from "./LeisureSection";
import OurSongs from "./OurSongs";


const Main = () => {
  return (
    <main className="scroll">
      <CoverPage />
      <OurSongs />
      <LeisureSection />
      <CardConfirmation />
    </main>
  );
};

export default Main;
