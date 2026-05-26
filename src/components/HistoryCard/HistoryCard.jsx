import '../HistoryCard/HistoryCard.scss'
import DeleteEditButton from '../DeleteEditButton/DeleteEditButton'
import HistoryCardMeta from '../HistoryCardMeta/HistoryCardMeta'

function HistoryCard() {
    const historyCard = {
        userName: "Maria Garcia",
        date: "18 de Mayo de 2024",
    }
    const pastCard = {  
        arcaneName: "El Loco",  
        arcaneImage: {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    }
}
    const presentCard = {  
        arcaneName: "El Mago",
        arcaneImage: {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    }
}
    const futureCard = {  
        arcaneName: "La Sacerdotisa",
        arcaneImage: {imageSrc: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    }
}

  return (
    <section className='history-card'>
        <div className='history-card__buttons'>
            <DeleteEditButton variant='edit' />
            <DeleteEditButton variant='delete' />
        </div>

        <div className='history-card__information'>
            <h2 className='history-card__user-name'>{historyCard.userName}</h2>
            <p className='history-card__date'>{historyCard.date}</p>
        </div>

        <div className='history-card__cards'>
            <HistoryCardMeta 
            pastCard={pastCard}
            presentCard={presentCard}
            futureCard={futureCard}
            />

        </div>
       

        
    </section>
  )
}

export default HistoryCard