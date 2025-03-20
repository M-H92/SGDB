import { getNavbar } from "./navbar.js";
import { getConfig } from "../../config/config.js";

const { ROOT_PATH } = getConfig();

const _linkDefinitions = [
  { name: "Home", url: `${ROOT_PATH}` },
  { name: "Intro SQL", url: `${ROOT_PATH}/sql_with_my_cat/chapters/1` },
  { name: "SQL avancé", url: `${ROOT_PATH}/advanced_sql/chapters/1` },
  { name: "News", url: `${ROOT_PATH}/what_s_new` },
];

function configure() {
  const navbar = getNavbar();
  _linkDefinitions.forEach((link) => {
    navbar.addLink(link);
  });
  navbar.attach();
}

configure();
