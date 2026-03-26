import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigate, useLocation } from "react-router-dom";
import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";
import { Spacing } from "../theme/spacing";

const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "Modules", path: "/modules" },
    { label: "Benefits", path: "/benefits" },
    { label: "Who's it for?", path: "/audiences" },
    { label: "About us", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleNav = (path: string) => {
        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate(path);
            window.scrollTo(0, 0);
        }
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {/* Logo */}
                <Pressable onPress={() => handleNav("/")} style={styles.logoContainer}>
                    <View style={styles.logoIcon}>
                        <Text style={styles.logoIconText}>P</Text>
                    </View>
                    <Text style={styles.logoText}>PeopleStack</Text>
                </Pressable>

                {/* Nav Links */}
                <View style={styles.navLinks}>
                    {NAV_LINKS.map((link, index) => (
                        <Pressable
                            key={link.label}
                            onPress={() => handleNav(link.path)}
                            onHoverIn={() => setHoveredIndex(index)}
                            onHoverOut={() => setHoveredIndex(null)}
                            style={styles.navLinkPressable}
                        >
                            <Text style={[
                                styles.navLink,
                                (location.pathname === link.path || hoveredIndex === index) && styles.navLinkActive,
                            ]}>
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
        height: 72,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
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
        fontSize: 19,
        fontWeight: "700",
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
        color: Colors.textMuted,
        fontSize: 15,
        fontWeight: "500",
        // @ts-ignore
        transition: "all 0.2s ease",
    },
    navLinkActive: {
        color: Colors.primary,
    },
});

export default Navbar;

