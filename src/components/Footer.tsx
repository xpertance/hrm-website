import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-dom";
import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";
import { Spacing } from "../theme/spacing";

const FOOTER_LINKS = {
    product: {
        title: "Product",
        links: ["Payroll Automation", "Attendance Management", "Employee Records", "ESS Portal", "Integrations"],
    },
    company: {
        title: "Company",
        links: ["About Us", "Careers", "Partners", "Press Kit", "Contact"],
    },
    legal: {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
    },
};

const Footer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.topRow}>
                    {/* Brand column */}
                    <View style={styles.brandCol}>
                        <Pressable onPress={() => navigate("/")} style={styles.logoContainer}>
                            <View style={styles.logoIcon}>
                                <Text style={styles.logoIconText}>X</Text>
                            </View>
                            <Text style={styles.logoText}>Xpertance</Text>
                        </Pressable>
                        <Text style={styles.brandDesc}>
                            The all-in-one HR and payroll platform designed to help modern companies grow faster and manage better.
                        </Text>
                    </View>

                    {/* Link columns */}
                    {Object.values(FOOTER_LINKS).map((section) => (
                        <View key={section.title} style={styles.linkCol}>
                            <Text style={styles.linkTitle}>{section.title}</Text>
                            {section.links.map((link) => (
                                <Pressable key={link} onPress={() => { }}>
                                    <Text style={styles.linkText}>{link}</Text>
                                </Pressable>
                            ))}
                        </View>
                    ))}
                </View>

                {/* Bottom bar */}
                <View style={styles.bottomBar}>
                    <Text style={styles.copyright}>
                        © 2024 Xpertance SaaS. All rights reserved.
                    </Text>
                    <View style={styles.bottomLinks}>
                        {["Privacy", "Terms", "Cookies"].map((item) => (
                            <Pressable key={item} onPress={() => { }}>
                                <Text style={styles.bottomLinkText}>{item}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.background,
        borderTopWidth: 1,
        borderTopColor: Colors.muted,
        paddingTop: 60,
        paddingBottom: 24,
    },
    container: {
        maxWidth: Spacing.containerMax,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingHorizontal: Spacing.containerPadding,
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 40,
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: Colors.muted,
    },
    brandCol: {
        flex: 1,
        minWidth: 220,
        maxWidth: 280,
        gap: 16,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    logoIcon: {
        width: 28,
        height: 28,
        borderRadius: 6,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    logoIconText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: "700",
    },
    logoText: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 16,
    },
    brandDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        lineHeight: 22,
    },
    socialRow: {
        flexDirection: "row",
        gap: 12,
    },
    socialIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.muted,
        alignItems: "center",
        justifyContent: "center",
    },
    socialIconText: {
        fontSize: 12,
        color: Colors.accent,
    },
    linkCol: {
        minWidth: 140,
        gap: 12,
    },
    linkTitle: {
        ...Typography.caption,
        color: Colors.primaryDark,
        fontWeight: "700",
        fontSize: 13,
        marginBottom: 4,
    },
    linkText: {
        ...Typography.bodySm,
        color: Colors.textMuted,
    },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 24,
        flexWrap: "wrap",
        gap: 16,
    },
    copyright: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        fontSize: 13,
    },
    bottomLinks: {
        flexDirection: "row",
        gap: 24,
    },
    bottomLinkText: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        fontSize: 13,
    },
});

export default Footer;
