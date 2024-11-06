import React, { useEffect, useState } from "react";
import axios from "axios";
import JoueurCard from "../components/joueurCard/JoueurCard";
import "./Effectif.scss";

const Effectif = () => {
  const [joueurs, setJoueurs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/joueurs")
      .then((response) => {
        setJoueurs(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des joueurs :", error);
        setError("Impossible de récupérer les joueurs");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (joueurs.length === 0) {
    return <div>Chargement en cours ...</div>;
  }

  // Définir les catégories de poste
  const categories = {
    Gardiens: ["GB"],
    Défenseurs: ["DEF LAT", "DC"],
    Milieux: ["MC", "MDC/MC"],
    Attaquants: ["BU", "MO"],
  };

  // Regrouper les joueurs par catégorie
  const joueursParCategorie = Object.keys(categories).reduce(
    (acc, categorie) => {
      acc[categorie] = joueurs.filter((joueur) =>
        categories[categorie].includes(joueur.poste)
      );
      return acc;
    },
    {}
  );

  return (
    <div className="effectif">
      {Object.keys(joueursParCategorie).map((categorie) => (
        <div key={categorie} className="categorie-section">
          <h2>{categorie}</h2>
          <div className="joueur-container">
            {joueursParCategorie[categorie].map((joueur) => (
              <JoueurCard key={joueur.id} joueur={joueur} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Effectif;
