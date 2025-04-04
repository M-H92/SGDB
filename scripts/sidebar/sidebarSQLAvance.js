import { getSidebar } from "./sidebar.js";
import { getConfig } from "../../config/config.js";

const { ROOT_PATH } = getConfig();
const path = "/advanced_sql/chapters/";

const _linkDefinitions = [
  { name: "Home", url: `${ROOT_PATH}` },
  { name: "1) Fonctions", url: `${ROOT_PATH}${path}1` },
  { name: "1') Exercices", url: `${ROOT_PATH}${path}1/exercices` },
  { name: "2) Procédures", url: `${ROOT_PATH}${path}2` },
];

function configure() {
  const sidebar = getSidebar();
  _linkDefinitions.forEach((link) => {
    sidebar.addLink(link);
  });
  sidebar.attach();
}

configure();
