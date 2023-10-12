import crowley from '../assets/aleister-crowey-with-pipe-young.png';

export default function Error() {
  return (
    <div className="error">
      <img
        src={crowley}
        alt="picture of Aleister Crowley when he was a mountain-climber"
      ></img>
      <h1>Error 404</h1>
    </div>
  );
}
