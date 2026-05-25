import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import mazoPage from "./pages/MazoPage/MazoPage";
import { Outlet } from "react-router";
import MazoPage from "./pages/MazoPage/MazoPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <MazoPage />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
