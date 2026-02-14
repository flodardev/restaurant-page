export { homePage };

import "./home-page.css";
import headlineImage from "../images/dining-area.jpg";

const homePage = () => {
  // Append to div
  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home-wrapper");
  homeWrapper.append(headlineSection(), storySection());
  return homeWrapper;
};

const headlineSection = () => {
  // HEADLINE CARD
  const headlineCard = document.createElement("div");
  headlineCard.classList.add("headline-card");

  // title
  const headlineTitle = document.createElement("h1");
  headlineTitle.textContent = "Rasa Sabah";

  // headline text
  const headlineText = document.createElement("p");
  headlineText.textContent =
    "Experience the Flavors of the Land Below the Wind";

  const titleCard = document.createElement("div");
  titleCard.append(headlineTitle, headlineText);
  titleCard.classList.add("title-card");

  // headline Img
  const headlineImg = document.createElement("img");
  headlineImg.src = headlineImage;

  headlineCard.append(titleCard, headlineImg);
  return headlineCard;
};

const storySection = () => {
  // STORY
  const storyCard = document.createElement("div");
  const homeStory = document.createElement("p");
  homeStory.textContent =
    "Rasa Sabah brings the heart of Borneo to your plate. From the misty peaks of Mount Kinabalu to the azure waters of Sipadan, we source the finest local ingredients to create an authentic Sabahan culinary journey.";

  storyCard.append(homeStory);
  return storyCard;
};

const operatingSection = () => {
  // OPERATING HOURS
  const homeOpHours = document.createElement("p");
  homeOpHours.textContent = "Operating Hours";
};
