import { getSidebar } from "./sidebar.js";
import { getConfig } from "../../config/config.js";

const { ROOT_PATH } = getConfig();
const PATH = "introduction_sql";

const _linkDefinitions = [
  { name: "Home", url: `${ROOT_PATH}` },
  { name: "0) Préambule", url: `${ROOT_PATH}/${PATH}/chapters/0` },
  { name: "1) Première DB", url: `${ROOT_PATH}/${PATH}/chapters/1` },
  { name: "2) Identités", url: `${ROOT_PATH}/${PATH}/chapters/2` },
  { name: "3) Clés primaires", url: `${ROOT_PATH}/${PATH}/chapters/3` },
  {
    name: "4) Cardinalité",
    url: `${ROOT_PATH}/${PATH}/chapters/4`,
  },
  // { name: "5) Cardinalité", url: `${ROOT_PATH}/${PATH}/chapters/5` },
  {
    name: "5) Propriétaires",
    url: `${ROOT_PATH}/${PATH}/chapters/5`,
  },
  { name: "6) Propriétaires (suite)", url: `${ROOT_PATH}/${PATH}/chapters/6` },
  // {
  //   name: "8) Propriétaires (suite)",
  //   url: `${ROOT_PATH}/${PATH}/chapters/8`,
  // },
  {
    name: "7) Espace utilisateur",
    url: `${ROOT_PATH}/${PATH}/chapters/7`,
  },
  { name: "10) Northwind", url: `${ROOT_PATH}/${PATH}/chapters/10` },
  // { name: "12) QCM", url: `${ROOT_PATH}/${PATH}/chapters/12` },
  // { name: "13) QCM +", url: `${ROOT_PATH}/${PATH}/chapters/13` },
  // {
  //   name: "x) Liens et références externes",
  //   url: `${ROOT_PATH}/${PATH}/chapters/x`,
  // },
];

function configure() {
  const sidebar = getSidebar();
  _linkDefinitions.forEach((link) => {
    sidebar.addLink(link);
  });
  sidebar.attach();
}

configure();
