import { defineConfig } from "@chakra-ui/react";

const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        beige: { value: "#F7F3E8" },
        paper: { value: "#F0EDE5" },
        navy: { value: "#2C3E5A" },
        slate: { value: "#4A6572" },
        coral: { value: "#E87A5D" },
        coralDark: { value: "#D36A4C" },
        moss: { value: "#6A7F5F" },
        border: { value: "#D8D2C3" },
        link: { value: "#1A6EA0" },
        linkHover: { value: "#0F4C75" },
        sidebar: { value: "#F5F1E6" },
      },
      fonts: {
        heading: { value: "Geist, sans-serif" },
        body: { value: "Geist, sans-serif" },
        mono: { value: "Geist Mono, monospace" },
      },
      radii: {
        small: { value: "4px" },
        medium: { value: "8px" },
        large: { value: "12px" },
        xlarge: { value: "16px" },
        xxlarge: { value: "24px" },
        full: { value: "9999px" },
      },
      fontWeights: {
        regular: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" },
      },
      fontSizes: {
        xs: { value: "12px" },
        sm: { value: "14px" },
        md: { value: "16px" },
        lg: { value: "18px" },
        xl: { value: "20px" },
        "2xl": { value: "24px" },
        "3xl": { value: "30px" },
        "4xl": { value: "36px" },
      },
      spacing: {
        "0": { value: "0px" },
        "1": { value: "4px" },
        "2": { value: "8px" },
        "3": { value: "12px" },
        "4": { value: "16px" },
        "5": { value: "20px" },
        "6": { value: "24px" },
        "8": { value: "32px" },
        "10": { value: "40px" },
        "12": { value: "48px" },
        "16": { value: "64px" },
      },
    },

    semanticTokens: {
      colors: {
        "bg-body": { value: "{colors.beige}" },
        "bg-card": { value: "{colors.paper}" },
        "bg-sidebar": { value: "{colors.sidebar}" },
        "text-primary": { value: "{colors.slate}" },
        "text-secondary": { value: "{colors.moss}" },
        "text-heading": { value: "{colors.navy}" },
        "accent-primary": { value: "{colors.coral}" },
        "accent-primary-hover": { value: "{colors.coralDark}" },
        "border-default": { value: "{colors.border}" },
        "link-default": { value: "{colors.link}" },
        "link-hover": { value: "{colors.linkHover}" },
      },
      radii: {
        button: { value: "{radii.medium}" },
        card: { value: "{radii.xlarge}" },
        input: { value: "{radii.small}" },
      },
      spacing: {
        "container-padding": { value: "{spacing.4}" },
        "section-gap": { value: "{spacing.8}" },
      },
    },
  },
});

export default theme;
