import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Boutique.scss"; // Assure-toi d'avoir ce fichier de style pour la boutique

const Boutique = () => {
  const [produits, setProduits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Requête pour récupérer les produits
    axios
      .get("http://localhost:5000/api/boutique")
      .then((response) => {
        setProduits(response.data); // Assure-toi que la réponse contient les bonnes données
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
        setError("Impossible de récupérer les produits");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (produits.length === 0) {
    return <div>Chargement en cours ...</div>;
  }

  return (
    <div className="boutique">
      <h2>Boutique</h2>
      <div className="produits-container">
        {produits.map((produit) => (
          <div className="produit-card" key={produit.id}>
            <img
              src={`http://localhost:5000/images/${produit.image}`} // Chemin vers l'image
              alt={produit.name}
              className="produit-image"
            />
            <div className="produit-info">
              <h3>{produit.name}</h3>
              <p>{produit.description}</p>
              <p>
                <strong>Prix :</strong> {produit.price} €
              </p>
              <p>
                <strong>Taille :</strong> {produit.size}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boutique;
