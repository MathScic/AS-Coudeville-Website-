const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

//Connexion a la base de donné
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "effectif_as_coudeville",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connecté a la base de donné effectif_as_coudeville");
});

//Route pour récupérer les joueurs
app.get("/api/joueurs", (req, res) => {
  const sql = "SELECT nom, prénom, poste, photo FROM joueurs";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//Config pour servir les images statiques
app.use("/images", express.static("public/images"));

//Démaré le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démaré sur le port ${PORT}`);
});
