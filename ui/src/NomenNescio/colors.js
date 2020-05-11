export const colors = [
  { light: "#FFEEEE", dark: "#FF0000" },
  { light: "#FFEDDD", dark: "#FF7A00" },
  { light: "#F5FFE1", dark: "#79B100" },
  { light: "#E4FFF4", dark: "#00DB7F" },
  { light: "#C8FFFF", dark: "#02C3C3" },
  { light: "#E9F3FF", dark: "#0075FF" },
  { light: "#E5D9FF", dark: "#5200FF" },
  { light: "#F9D7FF", dark: "#DB00FF" },
  { light: "#F7E1FF", dark: "#BD00FF" },
  { light: "#FFE1F3", dark: "#FF0099" },
  { light: "#FFEEEE", dark: "#000" },
];

export function getColor(userColorConfig = {}) {
  console.log("Getting color",userColorConfig);
  let colorPallete = colors[userColorConfig.scheme] || colors[0];
  let theme = userColorConfig.theme || "light";
  return {
    text: theme === "light" ? colorPallete.dark : colorPallete.light,
    background: theme === "light" ? colorPallete.light : colorPallete.dark,
  };
}
