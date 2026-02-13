export { homeSection };

const homeSection = () => {
  const text = "This is the homepage";
  const homeDiv = document.createElement("div");
  homeDiv.textContent = text;
  return homeDiv;
};
