export const hierachyAdm = [

  
  // Sachsen
  { from: "Dresden", to: "Sachsen", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Leipzig", to: "Sachsen", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Chemnitz", to: "Sachsen", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Sachsen", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  //Stadtstaaten
  { from: "Berlin", to: "Berlin", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Bremen", to: "Bremen", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Hamburg", to: "Hamburg", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Berlin", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },
  { from: "Bremen", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },
  { from: "Hamburg", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Baden-Württemberg
  { from: "Stuttgart", to: "Baden-Württemberg", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Karlsruhe", to: "Baden-Württemberg", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Freiburg im Breisgau", to: "Baden-Württemberg", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Mannheim", to: "Baden-Württemberg", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Baden-Württemberg", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Bayern
  { from: "München", to: "Bayern", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Nürnberg", to: "Bayern", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Augsburg", to: "Bayern", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Regensburg", to: "Bayern", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Bayern", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Brandenburg
  { from: "Potsdam", to: "Brandenburg", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Cottbus", to: "Brandenburg", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Frankfurt (Oder)", to: "Brandenburg", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Brandenburg an der Havel", to: "Brandenburg", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Brandenburg", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Hessen
  { from: "Wiesbaden", to: "Hessen", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Frankfurt am Main", to: "Hessen", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Darmstadt", to: "Hessen", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Kassel", to: "Hessen", levelFrom: "ADM2", levelTo: "ADM1" },
  { from: "Hessen", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Mecklenburg-Vorpommern
  { from: "Schwerin", to: "Mecklenburg-Vorpommern", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Rostock", to: "Mecklenburg-Vorpommern", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Mecklenburg-Vorpommern", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Niedersachsen
  { from: "Hannover", to: "Niedersachsen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Braunschweig", to: "Niedersachsen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Oldenburg", to: "Niedersachsen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Osnabrück", to: "Niedersachsen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Niedersachsen", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Nordrhein-Westfalen
  { from: "Düsseldorf", to: "Nordrhein-Westfalen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Köln", to: "Nordrhein-Westfalen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Dortmund", to: "Nordrhein-Westfalen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Essen", to: "Nordrhein-Westfalen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Nordrhein-Westfalen", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Rheinland-Pfalz
  { from: "Mainz", to: "Rheinland-Pfalz", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Koblenz", to: "Rheinland-Pfalz", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Ludwigshafen am Rhein", to: "Rheinland-Pfalz", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Rheinland-Pfalz", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Saarland
  { from: "Saarbrücken", to: "Saarland", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Saarland", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Sachsen-Anhalt
  { from: "Magdeburg", to: "Sachsen-Anhalt", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Halle (Saale)", to: "Sachsen-Anhalt", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Dessau-Roßlau", to: "Sachsen-Anhalt", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Sachsen-Anhalt", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Schleswig-Holstein
  { from: "Kiel", to: "Schleswig-Holstein", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Lübeck", to: "Schleswig-Holstein", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Schleswig-Holstein", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" },

  // Thüringen
  { from: "Erfurt", to: "Thüringen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Jena", to: "Thüringen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Gera", to: "Thüringen", levelFrom: "ADM3", levelTo: "ADM1" },
  { from: "Thüringen", to: "the Federal Republic of Germany", levelFrom: "ADM1", levelTo: "ADM0" }
];
