/**
 * MMTW Design Tokens — extracted from official brand logo
 *
 * Logo palette: black bg, flame orange, golden yellow,
 * white typography, navy globe, forest green, slate grey.
 */
export const colors = {
  black: "#000000",
  dark: "#0a0a0a",
  gray: "#141414",
  slate: "#a0a0a0",
  white: "#ffffff",
  flame: "#f37021",
  gold: "#ffba08",
  flameDim: "#c45a1a",
  navy: "#2b4162",
  forest: "#4a5d4e",
} as const;

export const shadows = {
  flame: "0 0 40px rgba(243, 112, 33, 0.35)",
  flameLg: "0 0 80px rgba(243, 112, 33, 0.25), 0 0 120px rgba(255, 186, 8, 0.1)",
  gold: "0 0 30px rgba(255, 186, 8, 0.2)",
} as const;
