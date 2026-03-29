/** Accent backgrounds for work cards (hover / title layer). */
export const HOME_PAGE_CARD_PALETTE = [
  "#FFFFFF",
  "#2CFF05",
  "#DDDDDD",
  "#000000",
] as const;

export type HomePageCardPaletteColor = (typeof HOME_PAGE_CARD_PALETTE)[number];

function parseHexRgb(hex: string): { r: number; g: number; b: number } | null {
  const normalized = hex.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) return null;
  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

/** WCAG relative luminance → pick near-black or near-white for readable text. */
export function getContrastingTextColor(backgroundHex: string): string {
  const rgb = parseHexRgb(backgroundHex);
  if (!rgb) return "#0a0a0a";

  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };

  const R = toLinear(rgb.r);
  const G = toLinear(rgb.g);
  const B = toLinear(rgb.b);
  const L = 0.2126 * R + 0.7152 * G + 0.0722 * B;

  return L > 0.55 ? "#0a0a0a" : "#fafafa";
}
