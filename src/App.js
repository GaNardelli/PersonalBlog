import TopBar from "./topbar/topbar.jsx";
import ShowMain from "./showmain/showmain.jsx"
import ShowSide from "./showside/showside.jsx"
import Footer from "./footer/footer.jsx"

import "./App.css"

function App() {
  return (
    <>
      <TopBar />
      <div className="display">
        <ShowMain />
        <ShowSide />
      </div>
      <Footer />
    </>
  );
}

export default App;
