import { useState } from "react";

const Pexeso = () => {

    const cards = [
        { id: 1, name: "card1", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 2, name: "card2", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 3, name: "card3", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 4, name: "card4", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 5, name: "card5", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 6, name: "card6", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 7, name: "card7", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 8, name: "card8", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 9, name: "card9", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 10, name: "card10", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 11, name: "card11", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
        { id: 12, name: "card12", image: "http://localhost:5173/public/animal_set/korytnacka.jpg", default: "http://localhost:5173/public/animal_set/pozadie.jpg" },
    ];

    const [clickedCards, setClickedCards] = useState<number[]>([]);

    const handleClick = (cardId: number) => {
        if (clickedCards.includes(cardId)) {
            setClickedCards(clickedCards.filter(id => id !== cardId)); // Remove the card ID if already clicked
        } else {
            setClickedCards([...clickedCards, cardId]); // Add the card ID if not already clicked
        }
    }

    return (
        <>
            {cards.map((card) => {
                const isRotated = clickedCards.includes(card.id);

                return (
                    <img
                        onClick={() => handleClick(card.id)}
                        key={card.id}
                        className={`bg-blue-500 ${isRotated ? 'rotate' : 'rotate-back'}`}
                        src={isRotated ? card.image : card.default} // Add the image source
                        alt={card.name} // Add the alt text
                    />
                )
            })}
        </>
    )
}

export default Pexeso