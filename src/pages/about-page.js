export { aboutSection };
import "./about-page.css";
import communityImg from "../images/community.jpg";

const aboutSection = () => {
  const aboutDiv = document.createElement("div");
  aboutDiv.append(blockOne());
  aboutDiv.classList.add("about-section");
  return aboutDiv;
};

const blockOne = () => {
  const headline = document.createElement("h2");
  headline.textContent = "Our Roots";

  const paraOne = document.createElement("p");
  paraOne.textContent =
    "Rasa Sabah started in a small family kitchen in Kota Kinabalu. Our mission is simple: to preserve the bold, earthy flavors of Sabahan heritage while embracing modern culinary techniques.";

  const paraTwo = document.createElement("p");
  paraTwo.textContent =
    "We believe in Tataba (sharing). Every plate is a tribute to the farmers, fishermen, and the rich biodiversity of the Land Below the Wind.";

  const textSection = document.createElement("div");
  textSection.append(headline, paraOne, paraTwo);

  const communityImage = document.createElement("img");
  communityImage.src = communityImg;

  const blockOne = document.createElement("div");
  blockOne.classList.add("block-one", "block");
  blockOne.append(textSection, communityImage);

  return blockOne;
};
