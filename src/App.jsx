import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <main>
        <HistoryCard />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
