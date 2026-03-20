import type { TextStyle } from "react-native";

const fontFamily = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export const Typography: Record<string, TextStyle> = {
    h1: {
        fontFamily,
        fontSize: 48,
        fontWeight: "800",
        lineHeight: 56,
        letterSpacing: -1,
    },
    h2: {
        fontFamily,
        fontSize: 36,
        fontWeight: "700",
        lineHeight: 44,
        letterSpacing: -0.5,
    },
    h3: {
        fontFamily,
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 36,
    },
    h4: {
        fontFamily,
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 30,
    },
    h5: {
        fontFamily,
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 26,
    },
    body: {
        fontFamily,
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 26,
    },
    bodyLarge: {
        fontFamily,
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 28,
    },
    bodySm: {
        fontFamily,
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 22,
    },
    caption: {
        fontFamily,
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 16,
        letterSpacing: 1,
        textTransform: "uppercase",
    },
    label: {
        fontFamily,
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 20,
    },
    nav: {
        fontFamily,
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 20,
    },
    button: {
        fontFamily,
        fontSize: 15,
        fontWeight: "600",
        lineHeight: 20,
    },
};
