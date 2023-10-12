import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from './Collapse/Collapse';
import majorIds from '.././assets/major.json';
import swordsIds from '.././assets/swords.json';
function Aside() {
  return (
    <div className="menu">
      <Link to="/" className="back-home">
        Back to Intromission
      </Link>
      <Collapse title="Major Arcana" size="small">
        <ul className="list">
          {majorIds.map((id) => (
            <li key={id.id} className="star">
              <Link to={`./Card/${id.id}`}>{id.name}</Link>
            </li>
          ))}
        </ul>
      </Collapse>
      <Collapse title="Air- Swords" size="small">
        <ul className="list">
          {swordsIds.map((id) => (
            <li key={id.id} className="star">
              <Link to={`./Card/${id.id}`}>{id.name}</Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
}

export default Aside;
