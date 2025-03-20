import { getSidebar } from "./sidebar.js";
import { getConfig } from "../../../config/config.js";

const { ROOT_PATH } = getConfig();

const _linkDefinitions = [
  { name: "Home", url: `${ROOT_PATH}` },
  { name: "0) Préambule", url: `${ROOT_PATH}/sql_with_my_cat/chapters/0` },
  { name: "1) Première DB", url: `${ROOT_PATH}/sql_with_my_cat/chapters/1` },
  { name: "2) Relations", url: `${ROOT_PATH}/sql_with_my_cat/chapters/2` },
  { name: "3) Identités", url: `${ROOT_PATH}/sql_with_my_cat/chapters/3` },
  {
    name: "4) Séance d'exercices",
    url: `${ROOT_PATH}/sql_with_my_cat/chapters/4`,
  },
  { name: "5) Cardinalité", url: `${ROOT_PATH}/sql_with_my_cat/chapters/5` },
  {
    name: "6) Problème de dates",
    url: `${ROOT_PATH}/sql_with_my_cat/chapters/6`,
  },
  { name: "7) Propriétaires", url: `${ROOT_PATH}/sql_with_my_cat/chapters/7` },
  {
    name: "8) Propriétaires (suite)",
    url: `${ROOT_PATH}/sql_with_my_cat/chapters/8`,
  },
  {
    name: "9) Espace utilisateur",
    url: `${ROOT_PATH}/sql_with_my_cat/chapters/9`,
  },
  { name: "10) Northwind", url: `${ROOT_PATH}/sql_with_my_cat/chapters/10` },
  { name: "12) QCM", url: `${ROOT_PATH}/sql_with_my_cat/chapters/12` },
  { name: "13) QCM +", url: `${ROOT_PATH}/sql_with_my_cat/chapters/13` },
  {
    name: "x) Liens et références externes",
    url: `${ROOT_PATH}/sql_with_my_cat/chapters/x`,
  },
];

function configure() {
  const sidebar = getSidebar();
  _linkDefinitions.forEach((link) => {
    sidebar.addLink(link);
  });
  sidebar.attach();
}

configure();
