import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HistoryCard />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
