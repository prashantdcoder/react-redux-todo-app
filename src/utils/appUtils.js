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

export const CommonStyles = {
  fontFamily: '"Saira Condensed", sans-serif',
  color: {
    pink: "#c43a3f",
    white: "#fff",
    darkMaroon: "#6f2232",
    lighMaroon: "#950740",
    black: "#0e1424",
    gradient: 'linear-gradient(80deg, #c43a3f 30%, #950740 50%)'
  },
};
