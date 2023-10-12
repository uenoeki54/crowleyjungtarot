import { useState } from 'react';
import { useRef } from 'react';
import './collapse.css';
function Collapse(props) {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  const contentRef = useRef();
  return (
    <div className="conteneur-collapse">
      <div className={'collapse ' + props.size}>
        <h2>{props.title}</h2>
        <i
          className={
            open ? 'downwards fa-solid fa-cross' : 'upwards fa-solid fa-cross'
          }
          onClick={toggle}
        ></i>
      </div>
      <div
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
        className={'content ' + props.size}
      >
        <div className="description">{props.children}</div>
      </div>
    </div>
  );
}

export default Collapse;
