import { getNavbar } from "./navbar.js";

const _linkDefinitions = [
  { name: "Préambule", url: "/chapters/chapter_0.html" },
  { name: "Première DB", url: "/chapters/chapter_1.html" },
  { name: "Relations", url: "/chapters/chapter_2.html" },
  { name: "Contraintes", url: "/chapters/chapter_3.html" },
  // { name: "Chapitre 4", url: "/chapters/chapter_4.html" },
  { name: "Cardinalité", url: "/chapters/chapter_5.html" },
  { name: "Problème de dates", url: "/chapters/chapter_6.html" },
  { name: "Propriétaires", url: "/chapters/chapter_7.html" },
  { name: "Liens et références externes", url: "/chapters/chapter_x.html" },
];

function configure() {
  const navbar = getNavbar();
  _linkDefinitions.forEach((link) => {
    navbar.addLink(link);
  });
  navbar.attach();
}

configure();
