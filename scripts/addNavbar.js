import { getNavbar } from "./navbar.js";

const _linkDefinitions = [
  { name: "Chapitre 0", url: "/chapters/chapter_0.html" },
  { name: "Chapitre 1", url: "/chapters/chapter_1.html" },
  { name: "Chapitre 2", url: "/chapters/chapter_2.html" },
  { name: "Chapitre 3", url: "/chapters/chapter_3.html" },
  { name: "Chapitre 4", url: "/chapters/chapter_4.html" },
  { name: "Chapitre 5", url: "/chapters/chapter_5.html" },
  { name: "Chapitre 6", url: "/chapters/chapter_6.html" },
];

function configure() {
  const navbar = getNavbar();
  _linkDefinitions.forEach((link) => {
    navbar.addLink(link);
  });
  navbar.attach();
}

configure();
