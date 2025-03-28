let sidebar = undefined;
export function getSidebar() {
  if (!sidebar) sidebar = new Sidebar();
  return sidebar;
}
class Sidebar {
  links = [];
  element = undefined;
  constructor() {
    this.element = document.createElement("nav");
    this.element.classList.add("lateral-sidebar");
    this.element.classList.add("print-hide");
  }
  attach(id = undefined) {
    this.element.appendChild(document.createElement("hr"));
    this.links.forEach((link) => {
      this._createLinkElement(link);
      this.element.appendChild(document.createElement("hr"));
    });
    let parentElement = undefined;
    if (id == undefined)
      parentElement = document.getElementsByTagName("body")[0];
    else parentElement = document.getElementById(id);
    parentElement.appendChild(this.element);
  }
  addLink(link) {
    if (link.name == undefined)
      console.error(
        "Impossible d'ajouter un lien à la barre de navigation si le lien n'a pas de nom"
      );
    if (link.url == undefined)
      console.error(
        "Impossible d'ajouter un lien à la barre de navigation si le lien n'a pas d'url"
      );
    this.links.push(link);
    return this;
  }
  _createLinkElement(link) {
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", link.url);
    linkElement.innerText = link.name;
    this.element.appendChild(linkElement);
  }
}
