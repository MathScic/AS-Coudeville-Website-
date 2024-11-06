import React from "react";
import "./JoueurCard.scss";

const JoueurCard = ({ joueur }) => {
  return (
    <div className="joueur-card">
      <img
        src={joueur.photo}
        alt={`${joueur.nom} ${joueur.prénom}`}
        className="joueur-image"
      />
      <div className="joueur-info">
        <h3>
          {joueur.prénom} {joueur.nom}
        </h3>
        <p> {joueur.poste} </p>
      </div>
    </div>
  );
};

export default JoueurCard;
