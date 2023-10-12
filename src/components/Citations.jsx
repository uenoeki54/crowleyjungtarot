import React, { useState } from 'react';
function Citations({ citations }) {
  const [activeQuote, setActiveQuote] = useState(0);
  return (
    <div className="text-position">
      <div className="quote-text">
        {citations.length > 1 && (
          <i
            onClick={() => {
              activeQuote === 0
                ? setActiveQuote(citations.length - 1)
                : setActiveQuote(activeQuote - 1);
            }}
            className="fa-solid fa-chevron-left"
          ></i>
        )}
        <div className="text-and-author">
          <p>{citations[activeQuote].quote}</p>
          <aside>{citations[activeQuote].author}</aside>
        </div>
        {citations.length > 1 && (
          <i
            onClick={() => {
              activeQuote < citations.length - 1
                ? setActiveQuote(activeQuote + 1)
                : setActiveQuote(0);
            }}
            className="fa-solid fa-chevron-right"
          ></i>
        )}
      </div>
    </div>
  );
}

export default Citations;
