import banner from '../assets/banner.avif';
import quotes from '../assets/citations.json';
import Citations from './Citations';
function Header() {
  return (
    <header>
      {/* <img
        className="banner"
        src={banner}
        width="100%"
        alt="banner tarot project"
      ></img> */}
      <div>
        <Citations citations={quotes} />
      </div>
    </header>
  );
}

export default Header;
