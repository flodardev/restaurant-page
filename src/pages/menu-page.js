export { menuSection };

const menuSection = () => {
  const text = "This is the menu page";
  const menuDiv = document.createElement("div");
  menuDiv.textContent = text;
  return menuDiv;
};
