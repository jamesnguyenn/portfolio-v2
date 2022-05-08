import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import "animate.css";
import { useScrollContext } from "./contexts/ScrollBodyProvider";
import About from "./pages/About";
import ScrollDownIcon from "./components/ScrollDownIcon";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  const { scrollPercent } = useScrollContext();
  const percentDetailPage = 100 / 4;

  return (
    <div className="h-[10000px]  relative z-1">
      <div className="fixed top-0 w-[100vw] h-screen left-0 ">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Main>
                  {scrollPercent < percentDetailPage && <Home />}
                  {scrollPercent >= percentDetailPage &&
                    scrollPercent < percentDetailPage * 2 && <About />}
                  {scrollPercent >= percentDetailPage * 2 &&
                    scrollPercent < percentDetailPage * 3 && <Project />}
                  {scrollPercent >= percentDetailPage * 3 && <Contact />}
                  {scrollPercent < percentDetailPage * 2 && (
                    <ScrollDownIcon></ScrollDownIcon>
                  )}
                </Main>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
