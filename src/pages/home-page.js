export { homePage };

import "./home-page.css";
import headlineImage from "../images/dining-area.jpg";
import storyImage from "../images/kinabalu.jpg";
import operatingImage from "../images/waitress.jpg";

const homePage = () => {
  // Append to div
  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home-wrapper");
  homeWrapper.append(headlineSection(), storySection(), operatingSection());
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

  const storyImg = document.createElement("img");
  storyImg.src = storyImage;

  const homeStory = document.createElement("p");
  homeStory.textContent =
    "Rasa Sabah brings the heart of Borneo to your plate. From the misty peaks of Mount Kinabalu to the azure waters of Sipadan, we source the finest local ingredients to create an authentic Sabahan culinary journey.";

  const storyCard = document.createElement("div");
  storyCard.classList.add("story-card");
  storyCard.append(homeStory, storyImg);
  return storyCard;
};

const operatingSection = () => {
  // OPERATING HOURS
  const operatingImg = document.createElement("img");
  operatingImg.src = operatingImage;

  const operatingHours = document.createElement("div");
  const homeOpHours = document.createElement("p");
  homeOpHours.textContent = "Operating Hours";
  const hourList = document.createElement("ul");

  const hours = [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday - Thursday", time: "11:00 AM - 9:00 PM" },
    { day: "Monday", time: "11:00 AM - 11:00 PM" },
    { day: "Monday", time: "10:00 AM - 8:00 PM" },
  ];

  hours.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.day}: ${item.time}`;
    hourList.append(listItem);
  });

  operatingHours.append(homeOpHours, hourList);

  const opHrsCard = document.createElement("div");
  opHrsCard.classList.add("operating-card");
  opHrsCard.append(operatingImg, operatingHours);
  return opHrsCard;
};
