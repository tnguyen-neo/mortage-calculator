import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

import { nextui } from "@nextui-org/react";

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    25: "#FCFCFD",
    50: "#F9FAFB",
    100: "#F2F4F7",
    200: "#EAECF0",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#475467",
    700: "#344054",
    800: "#1D2939",
    900: "#101828",
  },
  primary: {
    25: "#ecf4fe",
    50: "#e3effc",
    100: "#cfe3f9",
    200: "#a7cbf3",
    300: "#81b4ed",
    400: "#599ce7",
    500: "#3285E1",
    600: "#2d77cf",
    700: "#286abc",
    800: "#235caa",
    900: "#1e4e97",
  },
  error: {
    25: "#FFFBFA",
    50: "#FEF3F2",
    100: "#FEE4E2",
    200: "#FECDCA",
    300: "#FDA29B",
    400: "#F97066",
    500: "#F04438",
    600: "#D92020",
    700: "#B42318",
    800: "#912018",
    900: "#7A271A",
  },
  warning: {
    25: "#FFFCF5",
    50: "#FFFAEB",
    100: "#FEF0C7",
    200: "#FEDF89",
    300: "#FEC84B",
    400: "#FDB022",
    500: "#F79009",
    600: "#DC6803",
    700: "#B54708",
    800: "#93370D",
    900: "#7A2E0E",
  },
  success: {
    25: "#F6FEF9",
    50: "#ECFDF3",
    100: "#D1FADF",
    200: "#A6F4C5",
    300: "#6CE9A6",
    400: "#32D583",
    500: "#12B76A",
    600: "#039855",
    700: "#027A48",
    800: "#05603A",
    900: "#054F31",
  },
  moss: {
    25: "#FAFDF7",
    50: "#F5FBEE",
    100: "#E6F4D7",
    200: "#CEEAB0",
    300: "#ACDC79",
    400: "#86CB3C",
    500: "#669F2A",
    600: "#4F7A21",
    700: "#3F621A",
    800: "#335015",
    900: "#2B4212",
  },
  "green-light": {
    25: "#FAFEF5",
    50: "#F3FEE7",
    100: "#E4FBCC",
    200: "#D0F8AB",
    300: "#A6EF67",
    400: "#85E13A",
    500: "#66C61C",
    600: "#4CA30D",
    700: "#3B7C0F",
    800: "#326212",
    900: "#2B5314",
  },
  green: {
    25: "#F6FEF9",
    50: "#EDFCF2",
    100: "#D3F8DF",
    200: "#AAF0C4",
    300: "#73E2A3",
    400: "#3CCB7F",
    500: "#16B364",
    600: "#099250",
    700: "#087443",
    800: "#095C37",
    900: "#084C2E",
  },
  teal: {
    25: "#F6FEFC",
    50: "#F0FDF9",
    100: "#CCFBEF",
    200: "#99F6E0",
    300: "#5FE9D0",
    400: "#2ED3B7",
    500: "#15B79E",
    600: "#0E9384",
    700: "#107569",
    800: "#125D56",
    900: "#134E48",
  },
  cyan: {
    25: "#F5FEFF",
    50: "#ECFDFF",
    100: "#CFF9FE",
    200: "#A5F0FC",
    300: "#67E3F9",
    400: "#22CCEE",
    500: "#06AED4",
    600: "#088AB2",
    700: "#0E7090",
    800: "#155B75",
    900: "#164C63",
  },
  "blue-light": {
    25: "#F5FBFF",
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#B9E6FE",
    300: "#7CD4FD",
    400: "#36BFFA",
    500: "#0BA5EC",
    600: "#0086C9",
    700: "#026AA2",
    800: "#065986",
    900: "#0B4A6F",
  },
  blue: {
    25: "#ecf4fe",
    50: "#e3effc",
    100: "#cfe3f9",
    200: "#a7cbf3",
    300: "#81b4ed",
    400: "#599ce7",
    500: "#3285E1",
    600: "#2d77cf",
    700: "#286abc",
    800: "#235caa",
    900: "#1e4e97",
  },
  "blue-dark": {
    25: "#F5F8FF",
    50: "#EFF4FF",
    100: "#D1E0FF",
    200: "#B2CCFF",
    300: "#84ADFF",
    400: "#528BFF",
    500: "#2970FF",
    600: "#155EEF",
    700: "#004EEB",
    800: "#0040C1",
    900: "#00359E",
  },
  indigo: {
    25: "#F5F8FF",
    50: "#EEF4FF",
    100: "#E0EAFF",
    200: "#C7D7FE",
    300: "#A4BCFD",
    400: "#8098F9",
    500: "#6172F3",
    600: "#444CE7",
    700: "#3538CD",
    800: "#2D31A6",
    900: "#2D3282",
  },
  violet: {
    25: "#FBFAFF",
    50: "#F5F3FF",
    100: "#ECE9FE",
    200: "#DDD6FE",
    300: "#C3B5FD",
    400: "#A48AFB",
    500: "#875BF7",
    600: "#7839EE",
    700: "#6927DA",
    800: "#5720B7",
    900: "#491C96",
  },
  purple: {
    25: "#FAFAFF",
    50: "#F4F3FF",
    100: "#EBE9FE",
    200: "#D9D6FE",
    300: "#BDB4FE",
    400: "#9B8AFB",
    500: "#7A5AF8",
    600: "#6938EF",
    700: "#5925DC",
    800: "#4A1FB8",
    900: "#3E1C96",
  },
  fuchsia: {
    25: "#FEFAFF",
    50: "#FDF4FF",
    100: "#FBE8FF",
    200: "#F6D0FE",
    300: "#EEAAFD",
    400: "#E478FA",
    500: "#D444F1",
    600: "#BA24D5",
    700: "#9F1AB1",
    800: "#821890",
    900: "#6F1877",
  },
  pink: {
    25: "#FEF6FB",
    50: "#FDF2FA",
    100: "#FCE7F6",
    200: "#FCCEEE",
    300: "#FAA7E0",
    400: "#7670C7",
    500: "#EE46BC",
    600: "#DD2590",
    700: "#C11574",
    800: "#9E165F",
    900: "#851651",
  },
  rose: {
    25: "#FFF5F6",
    50: "#FFF1F3",
    100: "#FFE4E8",
    200: "#FECDD6",
    300: "#FEA3B4",
    400: "#FD6F8E",
    500: "#F63D68",
    600: "#E31B54",
    700: "#C01048",
    800: "#A11043",
    900: "#89123E",
  },
  "orange-dark": {
    25: "#FFF9F5",
    50: "#FFF4ED",
    100: "#FFE6D5",
    200: "#FFD6AE",
    300: "#FF9C66",
    400: "#FF692E",
    500: "#FF4405",
    600: "#E62E05",
    700: "#BC1B06",
    800: "#97180C",
    900: "#771A0D",
  },
  orange: {
    25: "#FEFAF5",
    50: "#FEF6EE",
    100: "#FDEAD7",
    200: "#F9DBAF",
    300: "#F7B27A",
    400: "#F38744",
    500: "#EF6820",
    600: "#E04F16",
    700: "#B93815",
    800: "#932F19",
    900: "#772917",
  },
  yellow: {
    25: "#FEFDF0",
    50: "#FEFBE8",
    100: "#FEF7C3",
    200: "#FEEE95",
    300: "#FDE272",
    400: "#FAC515",
    500: "#EAAA08",
    600: "#CA8504",
    700: "#A15C07",
    800: "#854A0E",
    900: "#713B12",
  },
  transparent: "#00000000",
};

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  plugins: [typography, nextui()],
} satisfies Config;
