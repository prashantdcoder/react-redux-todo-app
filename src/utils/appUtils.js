export const getCurrentTimeStamp = () => {
  const date = new Date();
  return date.toLocaleDateString();
};

export const convertToLowerCase = (string) => {
  return string.toLowerCase();
};
