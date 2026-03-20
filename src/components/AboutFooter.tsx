import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-dom";
import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";
import { Spacing } from "../theme/spacing";

const AboutFooter: React.FC = () => {
    const navigate = useNavigate();

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.row}>
                    {/* Logo */}
                    <Pressable onPress={() => navigate("/")} style={styles.logoContainer}>
                        <View style={styles.logoIcon}>
                            <Text style={styles.logoIconText}>H</Text>
                        </View>
                        <Text style={styles.logoText}>HRPayroll</Text>
                    </Pressable>

                    {/* Center links */}
                    <View style={styles.links}>
                        {["Privacy Policy", "Terms of Service", "Security"].map((label) => (
                            <Pressable key={label} onPress={() => { }}>
                                <Text style={styles.linkText}>{label}</Text>
                            </Pressable>
                        ))}
                    </View>

                    {/* Right copyright */}
                    <Text style={styles.copyright}>
                        © 2024 HRPayroll HCM Systems Inc. All rights reserved.
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        borderTopWidth: 1,
        borderTopColor: Colors.muted,
        paddingVertical: 24,
        backgroundColor: Colors.background,
    },
    container: {
        maxWidth: Spacing.containerMax,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingHorizontal: Spacing.containerPadding,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    logoIcon: {
        width: 24,
        height: 24,
        borderRadius: 6,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    logoIconText: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: "700",
    },
    logoText: {
        ...Typography.label,
        color: Colors.primaryDark,
    },
    links: {
        flexDirection: "row",
        gap: 24,
    },
    linkText: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        fontSize: 13,
    },
    copyright: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        fontSize: 12,
    },
});

export default AboutFooter;
