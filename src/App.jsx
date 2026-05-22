import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <main style={{ paddingBottom: '60px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App