import toteninsel from '../assets/toteninsel400.jpg';

import Switch from '../components/Switch';
import React from 'react';
function Home() {
  return (
    <div className="main">
      <Switch />
      <img src={toteninsel} className="main-illustration"></img>
      <div className="text">
        <h1>Esoteric Tarot Project</h1>
        <p>
          <i>
            The Tarot in itself is an attempt at representing the constituents
            of the flow of the unconscious, and therefore it is applicable for
            an intuitive method that has the purpose of understanding the flow
            of life, possibly even predicting future events, at all events
            lending itself to the reading of the conditions of the present
            moment.
            <br /> It is in that way analogous to the I Ching, the Chinese
            divination method that allows at least a reading of the present
            condi tions. You see, man always felt the need of finding an access
            through the unconscious to the meaning of an actual condition,
            because there is a sort of correspondence or a likeness between the
            prevailing condition and the condition of the collective
            unconscious.
          </i>
        </p>

        <br />
        <b>
          Carl Gustav Jung -
          <em>Visions Notes on the Seminar Given in 1930-1934 </em>
        </b>
        <br />
        <br />
        <br />
        <p>
          The purpose of this online tool is to provide as diverse as possible a
          support for intepretation of and meditation upon Tarot cards.
          <br />
          <br />
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry s standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry s standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Home;
