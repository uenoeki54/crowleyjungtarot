import toteninsel from '../assets/toteninsel400.jpg';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import cards from '../assets/cards.json';

function Card() {
  const { cardId } = useParams();
  let card = cards.filter((cards) => cards.id === cardId);
  if (card[0] === undefined) {
    return <Navigate to="/construction" replace={true} />;
  }
  const article = { __html: card[0].essay };

  return (
    <div className="main">
      <img src={card[0].cover} className="main-illustration"></img>
      <div className="text">
        <h1>{card[0].title}</h1>
        <div dangerouslySetInnerHTML={article} />;
      </div>
    </div>
  );
}

export default Card;
