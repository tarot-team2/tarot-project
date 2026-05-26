import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MazoPage from "./pages/mazoPage/MazoPage";
import SummaryPage from "./pages/summaryPage/SummaryPage";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header /> 
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default App
