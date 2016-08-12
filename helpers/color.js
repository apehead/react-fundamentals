export function getRgbaColor({ red, green, blue, alpha }) {
  return `rgba(${red},${green},${blue},${alpha})`;
}

export function toHex(c) {
  const hex = parseInt(c, 10).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

export function getHexColor({ red, green, blue }) {
  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}
