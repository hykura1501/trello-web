export const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  const chars = str.split("");
  chars[0] = chars[0].toUpperCase();
  return chars.join("");
};
