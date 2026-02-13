export { aboutSection };

const aboutSection = () => {
  const text = "This is the about page";
  const aboutDiv = document.createElement("div");
  aboutDiv.textContent = text;
  return aboutDiv;
};
