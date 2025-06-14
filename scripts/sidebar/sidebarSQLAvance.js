import { getSidebar } from "./sidebar.js";
import { getConfig } from "../../config/config.js";

const { ROOT_PATH } = getConfig();
const path = "/advanced_sql/chapters/";
const exoPath = "/exercices";
const exoTitle = "Exercices";

const _linkDefinitions = [
  { name: `Home`, url: `${ROOT_PATH}` },
  { name: `1) Fonctions`, url: `${ROOT_PATH}${path}1` },
  { name: `1') ${exoTitle}`, url: `${ROOT_PATH}${path}1${exoPath}` },
  { name: `2) Procédures`, url: `${ROOT_PATH}${path}2` },
  { name: `2') ${exoTitle}`, url: `${ROOT_PATH}${path}2${exoPath}` },
  { name: `3) Déclencheurs`, url: `${ROOT_PATH}${path}3` },
  { name: `3') ${exoTitle}`, url: `${ROOT_PATH}${path}3${exoPath}` },
  { name: `4) Sécurité`, url: `${ROOT_PATH}${path}4` },
  { name: `4') ${exoTitle}`, url: `${ROOT_PATH}${path}4${exoPath}` },
  { name: `5) CTE et Window`, url: `${ROOT_PATH}${path}5` },
  { name: `5') ${exoTitle}`, url: `${ROOT_PATH}${path}5${exoPath}` },
  { name: `6) Full text search`, url: `${ROOT_PATH}${path}6` },
];

function configure() {
  const sidebar = getSidebar();
  _linkDefinitions.forEach((link) => {
    sidebar.addLink(link);
  });
  sidebar.attach();
}

configure();
