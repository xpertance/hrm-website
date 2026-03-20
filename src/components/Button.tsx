import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
    label: string;
    onPress?: () => void;
    variant?: ButtonVariant;
    size?: "sm" | "md" | "lg";
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onPress,
    variant = "primary",
    size = "md",
    style,
    textStyle,
}) => {
    const sizeStyles = SIZE_STYLES[size];

    return (
        <Pressable
            onPress={onPress}
            style={({ hovered }: any) => [
                styles.base,
                sizeStyles.wrapper,
                VARIANT_STYLES[variant].wrapper,
                hovered && VARIANT_HOVER[variant],
                style,
            ]}
        >
            <Text
                style={[
                    styles.text,
                    sizeStyles.text,
                    VARIANT_STYLES[variant].text,
                    textStyle,
                ]}
            >
                {label}
            </Text>
        </Pressable>
    );
};

const SIZE_STYLES: Record<string, any> = {
    sm: {
        wrapper: { paddingVertical: 8, paddingHorizontal: 16 },
        text: { fontSize: 13 },
    },
    md: {
        wrapper: { paddingVertical: 12, paddingHorizontal: 24 },
        text: { fontSize: 15 },
    },
    lg: {
        wrapper: { paddingVertical: 14, paddingHorizontal: 32 },
        text: { fontSize: 16 },
    },
};

const VARIANT_STYLES: Record<string, any> = {
    primary: {
        wrapper: {
            backgroundColor: Colors.primary,
        },
        text: {
            color: Colors.white,
        },
    },
    secondary: {
        wrapper: {
            backgroundColor: Colors.primaryDark,
        },
        text: {
            color: Colors.white,
        },
    },
    outline: {
        wrapper: {
            backgroundColor: Colors.white,
            borderWidth: 1.5,
            borderColor: Colors.primaryDark,
        },
        text: {
            color: Colors.primaryDark,
        },
    },
    ghost: {
        wrapper: {
            backgroundColor: "transparent",
        },
        text: {
            color: Colors.primary,
        },
    },
};

const VARIANT_HOVER: Record<string, ViewStyle> = {
    primary: { backgroundColor: "#0a5f58" },
    secondary: { backgroundColor: "#1e293b" },
    outline: { backgroundColor: Colors.section },
    ghost: { backgroundColor: Colors.softPrimary },
};

const styles = StyleSheet.create({
    base: {
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        // @ts-ignore web transition
        transitionProperty: "background-color, transform",
        transitionDuration: "0.2s",
        cursor: "pointer" as any,
    },
    text: {
        ...Typography.button,
    },
});

export default Button;
