import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigate, useLocation } from "react-router-dom";
import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";
import { Spacing } from "../theme/spacing";

const NAV_LINKS = [
    { label: "Features", path: "/features" },
    { label: "Modules", path: "/modules" },
    { label: "Benefits", path: "/benefits" },
    { label: "About us", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {/* Logo */}
                <Pressable onPress={() => navigate("/")} style={styles.logoContainer}>
                    <View style={styles.logoIcon}>
                        <Text style={styles.logoIconText}>X</Text>
                    </View>
                    <Text style={styles.logoText}>Xpertance</Text>
                </Pressable>

                {/* Nav Links */}
                <View style={styles.navLinks}>
                    {NAV_LINKS.map((link, index) => (
                        <Pressable
                            key={link.label}
                            onPress={() => navigate(link.path)}
                            onHoverIn={() => setHoveredIndex(index)}
                            onHoverOut={() => setHoveredIndex(null)}
                            style={styles.navLinkPressable}
                        >
                            <Text
                                style={[
                                    styles.navLink,
                                    location.pathname === link.path && styles.navLinkActive,
                                    hoveredIndex === index && styles.navLinkHover,
                                ]}
                            >
                                {link.label}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.background,
        borderBottomWidth: 1,
        borderBottomColor: Colors.muted,
        position: "sticky" as any,
        top: 0,
        zIndex: 100,
    },
    container: {
        maxWidth: Spacing.containerMax,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingHorizontal: Spacing.containerPadding,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    logoIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    logoIconText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "700",
    },
    logoText: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 18,
    },
    navLinks: {
        flexDirection: "row",
        alignItems: "center",
        gap: 32,
    },
    navLinkPressable: {
        paddingVertical: 4,
    },
    navLink: {
        ...Typography.nav,
        color: Colors.accent,
    },
    navLinkActive: {
        color: Colors.primaryDark,
        fontWeight: "600",
    },
    navLinkHover: {
        color: Colors.primary,
    },
    rightActions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    loginBtn: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    loginText: {
        ...Typography.nav,
        color: Colors.accent,
    },
    ctaBtn: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    ctaBtnHover: {
        backgroundColor: "#0a5f58",
    },
    ctaText: {
        ...Typography.button,
        color: Colors.white,
        fontSize: 14,
    },
});

export default Navbar;
