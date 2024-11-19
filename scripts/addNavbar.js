import { getNavbar } from "./navbar.js";

// const baseUrl = '/.'
const baseUrl = "/SGDB";

const _linkDefinitions = [
  { name: "Préambule", url: `${baseUrl}/chapters/0` },
  { name: "Première DB", url: `${baseUrl}/chapters/1` },
  { name: "Relations", url: `${baseUrl}/chapters/2` },
  { name: "Identités", url: `${baseUrl}/chapters/3` },
  { name: "Séance d'exercices", url: `${baseUrl}/chapters/4` },
  { name: "Cardinalité", url: `${baseUrl}/chapters/5` },
  { name: "Problème de dates", url: `${baseUrl}/chapters/6` },
  { name: "Propriétaires", url: `${baseUrl}/chapters/7` },
  { name: "Liens et références externes", url: `${baseUrl}/chapters/x` },
];

function configure() {
  const navbar = getNavbar();
  _linkDefinitions.forEach((link) => {
    navbar.addLink(link);
  });
  navbar.attach();
}

configure();
