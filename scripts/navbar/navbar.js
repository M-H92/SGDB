let navbar = undefined;
export function getNavbar() {
  if (!navbar) navbar = new Navbar();
  return navbar;
}

class Navbar {
  links = [];
  element = undefined;
  constructor() {
    const nav = document.createElement("nav");
    nav.id = "the-nav-bar";
    nav.classList.add("container");
    nav.classList.add("flex-center");
    this.element = nav;
  }
  attach(element = "body") {
    this.links.forEach((link) => {
      this._createLinkElement(link);
    });
    let parentElement = document.getElementsByTagName(element)[0];
    parentElement.insertBefore(this.element, parentElement.firstChild);
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
