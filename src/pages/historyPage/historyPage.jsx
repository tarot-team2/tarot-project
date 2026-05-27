import "./HistoryPage.scss";
import Header from "../../components/Header/Header";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import DeleteAllButton from "../..DeleteAllButton/DeleteAllButton";
import NavBar from "../../components/NavBar/NavBar";

function HistoryPage() {
  return (
    <>
      <Header />

      <main className="history-page">

        <h1 className="history-page__title">
          Historial
        </h1>

        <div className="history-page__cards">
          <HistoryCard />
          <DeleteAllButton />
        </div>

      </main>

      <NavBar />
    </>
  );
}

export default HistoryPage;