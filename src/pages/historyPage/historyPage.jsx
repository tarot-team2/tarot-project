import "./HistoryPage.scss";
import Header from "../../components/Header/Header";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import HistoryCardMeta from "../../components/HistoryCardMeta/HistoryCardMeta";
import NavBar from "../../components/NavBar/NavBar";

function HistoryPage() {

  const pastCard = {
    arcaneName: "El Loco",
    arcaneImage: {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    },
  };

  const presentCard = {
    arcaneName: "El Mago",
    arcaneImage: {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    },
  };

  const futureCard = {
    arcaneName: "La Sacerdotisa",
    arcaneImage: {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    },
  };

  return (
    <>
      <Header />

      <main className="history-page">

        <h1 className="history-page__title">
          Historial
        </h1>

        <div className="history-page__cards">

          <HistoryCard />

          <HistoryCardMeta
            pastCard={pastCard}
            presentCard={presentCard}
            futureCard={futureCard}
          />

        </div>

      </main>

      <NavBar />
    </>
  );
}

export default HistoryPage;