import { useRef } from 'react';
import { Link, useNavigate } from 'react-router';

const DEBOUNCE_DELAY = 300;

function Header() {
  const timeoutIdRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const prevTimeoutId = timeoutIdRef.current;
    if (Number.isInteger(prevTimeoutId)) {
      clearTimeout(prevTimeoutId);
    }

    const timeoutId = setTimeout(() => {
      navigate(`/search?query=${e.target.value}`);
    }, DEBOUNCE_DELAY);
    timeoutIdRef.current = timeoutId;
  };

  return (
    <header className="mb-4">
      <h1 className="border-t-2 border-t-red-500 bg-black py-4 text-center text-5xl text-white">
        <Link to="/">포켓몬 도감</Link>
      </h1>
      <nav className="flex items-center justify-center gap-8 bg-red-500 text-2xl">
        <Link to="/">Main</Link>
        <Link to="/favorite">Favorite</Link>
        <input
          placeholder="Search..."
          className="my-3 mr-4 border-b-2 border-b-white p-1 text-xl"
          onChange={handleInputChange}
        />
      </nav>
    </header>
  );
}

export default Header;
