function customRender(element, container) {
  const _element = document.createElement(element.type);
  _element.innerHTML = element.children;

  for (const prop in element.props) {
    _element.setAttribute(prop, element.props[prop]);
  }

  container.appendChild(_element);
}

const rootContainer = document.getElementById("root");

const customElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit Google!",
};

customRender(customElement, rootContainer);
