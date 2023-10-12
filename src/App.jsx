import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main-css/main.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Home from './pages/Home';
import Card from './pages/Card';
import Error from './pages/Error';
import Construction from './pages/Construction';
import Switch from './components/Switch';
import React from 'react';
import { useState } from 'react';
const ThemeContext = React.createContext();
function App() {
  const [theme, setTheme] = useState('light');
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Switch />
        <Router>
          <Header />

          <div className="contenu">
            <Aside />

            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/card/:cardId" element={<Card />} />
                <Route path="/construction" element={<Construction />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
