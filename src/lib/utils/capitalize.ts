export const capitalize = (text: string) => {
  return text
    ? text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase()
    : "";
};
