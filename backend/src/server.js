import fs from "node:fs/promises";
import path from "node:path";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config"; // Carga las variables de entorno automáticamente

import { bigFive, sudamerican } from "./constants/typeLegue.js";
import { fetchMatches } from "./services/matchesServices.js";
import { fetchCompetitions } from "./services/cometitionsServices.js";

const app = express();
const PORT = process.env.PORT || 3000;
const Root = path.resolve();

const ligaConfig = {
  bigfive: bigFive,
  sudamerican: sudamerican,
};

app.use(cors());
app.use(morgan("dev")); // Logger de peticiones
app.use(express.json());

// Rutas Generales

app.use("/", express.static("public"));

app.get("/api/competitions/:type", async (req, res) => {
  const { type } = req.params;
  const { priority } = req.query;

  console.log(type);

  const typeCompetiton = ["LEAGUE", "CUP"];

  const competitonConfig = {
    bigfive: bigFive,
    sudamerican: sudamerican,
  };

  if (!typeCompetiton.includes(type)) {
    return res.status(400).json({
      error: "Error Tipo de competicion no valida elija bigfive o sudamerican",
    });
  }

  try {
    const data = await fetchCompetitions();

    const filter = data.filter((t) => t.type === type);

    // if (priority && typeCompetiton.includes(type)) {
    //   if (type === typeCompetiton[0]) {
    //     const filter = data.map((t) => {
    //       if (competitonConfig[priority]) {
    //         return { id: t.id, name: t.name, logo: t.emblem };
    //       }
    //     });
    //     return res.json(filter);
    //   }

    //   if (type === typeCompetiton[1]) {
    //     const filter = data.filter((t) => t.type === type);
    //     return res.json(filter);
    //   }
    //   return;
    // }

    res.json(filter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos de fútbol" });
  }
});

app.get("/api/matches", async (req, res) => {
  try {
    const data = await fetchMatches();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos de fútbol" });
  }
});

app.get("/api/matches/:type", async (req, res) => {
  const { type } = req.params;

  if (!ligaConfig[type]) {
    return res
      .status(400)
      .json({ error: "Tipo de liga no válido. Use 'bigfive' o 'sudamerican'" });
  }

  try {
    const data = await fetchMatches();

    const filter = data.filter(
      (match) =>
        match?.competition && ligaConfig[type].includes(match.competition?.id),
    );
    res.json(filter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos de fútbol" });
  }
});

app.get("/about", (req, res) => {
  res.send("About Project Futbol");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
