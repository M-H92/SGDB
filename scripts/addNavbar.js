import { getNavbar } from "./navbar.js";

// const baseUrl = '/.'
const baseUrl = "/SGDB";

const _linkDefinitions = [
  { name: "Home", url: `${baseUrl}` },
  { name: "0) Préambule", url: `${baseUrl}/chapters/0` },
  { name: "1) Première DB", url: `${baseUrl}/chapters/1` },
  { name: "2) Relations", url: `${baseUrl}/chapters/2` },
  { name: "3) Identités", url: `${baseUrl}/chapters/3` },
  { name: "4) Séance d'exercices", url: `${baseUrl}/chapters/4` },
  { name: "5) Cardinalité", url: `${baseUrl}/chapters/5` },
  { name: "6) Problème de dates", url: `${baseUrl}/chapters/6` },
  { name: "7) Propriétaires", url: `${baseUrl}/chapters/7` },
  { name: "8) Propriétaires (suite)", url: `${baseUrl}/chapters/8` },
  { name: "9) Espace utilisateur", url: `${baseUrl}/chapters/9` },
  { name: "10) Northwind", url: `${baseUrl}/chapters/10` },
  { name: "x) Liens et références externes", url: `${baseUrl}/chapters/x` },
];

function configure() {
  const navbar = getNavbar();
  _linkDefinitions.forEach((link) => {
    navbar.addLink(link);
  });
  navbar.attach();
}

configure();
