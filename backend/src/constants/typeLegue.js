const europe = [
  {
    pais: "Spain",
    id: 2014,
    temporadas: [2023, 2024, 2025],
  },

  {
    pais: "England",
    id: 2021,
    temporadas: [2023, 2024, 2025],
  },
  {
    pais: "France",
    id: 2015,
    temporadas: [2023, 2024, 2025],
  },
  {
    pais: "Italy",
    id: 2019,
    temporadas: [2023, 2024, 2025],
  },
  {
    pais: "Germany",
    id: 2002,
    temporadas: [2023, 2024, 2025],
  },
];

const sudamericans = [
  {
    pais: "Brazil",
    id: 2013,
    temporadas: [2023, 2024, 2025],
  },

  {
    pais: "Argentina",
    id: 2024,
    temporadas: [2023, 2024, 2025],
  },
  {
    pais: "Colombia",
    id: 2045,
    temporadas: [2023, 2024, 2025],
  },
  {
    pais: "Uruguay",
    id: 2148,
    temporadas: [2023, 2024, 2025],
  },
  {
    pais: "Chile",
    id: 2048,
    temporadas: [2023, 2024, 2025],
  },
  {
    pais: "Peru",
    id: 2101,
    temporadas: [2023, 2024, 2025],
  },
];

const bigFive = europe.map((liga) => liga.id);
const sudamerican = sudamericans.map((liga) => liga.id);

export { bigFive, sudamerican };
