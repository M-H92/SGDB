import { getNavbar } from "./navbar.js";

const _linkDefinitions = [
  { name: "Préambule", url: "/SGDB/chapters/0" },
  { name: "Première DB", url: "/SGDB/chapters/1" },
  { name: "Relations", url: "/SGDB/chapters/2" },
  { name: "Contraintes", url: "/SGDB/chapters/3" },
  // { name: "Chapitre 4", url: "/SGDB/chapters/4" },
  { name: "Cardinalité", url: "/SGDB/chapters/5" },
  { name: "Problème de dates", url: "/SGDB/chapters/6" },
  { name: "Propriétaires", url: "/SGDB/chapters/7" },
  { name: "Liens et références externes", url: "/SGDB/chapters/x" },
];

function configure() {
  const navbar = getNavbar();
  _linkDefinitions.forEach((link) => {
    navbar.addLink(link);
  });
  navbar.attach();
}

configure();
