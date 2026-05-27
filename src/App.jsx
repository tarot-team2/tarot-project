import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
<<<<<<< HEAD

export default App
=======
export default App
>>>>>>> b816704d85353baa37e9dc7abada1c467aacbc4e
