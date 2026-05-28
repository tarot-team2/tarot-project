import "./HistoryPage.scss";

import Header from "../../components/Header/Header";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import DeleteAllButton from "../../components/DeleteAllButton/DeleteAllButton";
import NavBar from "../../components/NavBar/NavBar";

function HistoryPage() {
  return (
    <>
      <Header />

      <main className="history-page">

        <div className="history-page__header">

          <h1 className="history-page__title">
            Historial
          </h1>

          <DeleteAllButton />

        </div>

        <div className="history-page__cards">
          <HistoryCard />
        </div>

      </main>

      <NavBar />
    </>
  );
}

export default HistoryPage;