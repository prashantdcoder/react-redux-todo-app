import { string } from "prop-types";

export const getCurrentTimeStamp = () => {
  const date = new Date();
  return date.toLocaleDateString();
};

export const convertToLowerCase = (string) => {
  return string.toLowerCase();
};

export const StatusType = {
  ACTIVE: "Active",
  COMPLETED: "Completed",
};

export const getFirstLetter = (string) => {
  return string.substr(0, 1).toUpperCase();
};

export const getRandomColor = () => {
  const items = [
    "#df2a1de0",
    "#dfac1de0",
    "#389521e0",
    "#952191e0",
    "#4abef5e0",
  ];
  return items[Math.floor(Math.random() * items.length)];
};
