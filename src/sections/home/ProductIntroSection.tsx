import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const HIGHLIGHTS = [
    "Simplify complex employee operations",
    "Automate end-to-end payroll processing",
    "Enhance overall workforce visibility",
    "Streamline compliance and reporting",
];

const ProductIntroSection: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80} id="features">
            <Container>
                <View style={styles.centerCol}>
                    <Text style={styles.heading}>What is Xpertance?</Text>
                    <Text style={styles.desc}>
                        Xpertance is a modern HR management platform designed to simplify employee operations, payroll processes, and workforce visibility. We provide an intuitive system that unifies all your HR needs into one seamless experience.
                    </Text>

                    <View style={styles.bulletsGrid}>
                        {HIGHLIGHTS.map((item, i) => (
                            <View key={i} style={styles.bulletRow}>
                                <View style={styles.iconCircle}>
                                    <Text style={styles.checkIcon}>✓</Text>
                                </View>
                                <Text style={styles.bulletText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    centerCol: {
        alignItems: "center",
        maxWidth: 800,
        marginHorizontal: "auto",
        textAlign: "center",
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        fontSize: 36,
        marginBottom: 20,
        textAlign: "center",
    },
    desc: {
        ...Typography.body,
        color: Colors.textMuted,
        marginBottom: 40,
        lineHeight: 28,
        textAlign: "center",
        fontSize: 18,
    },
    bulletsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
    },
    bulletRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.section,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        gap: 12,
        minWidth: 300,
    },
    iconCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.softPrimary,
        alignItems: "center",
        justifyContent: "center",
    },
    checkIcon: {
        color: Colors.primary,
        fontWeight: "600",
        fontSize: 14,
    },
    bulletText: {
        ...Typography.body,
        color: Colors.primaryDark,
        fontWeight: "500",
        fontSize: 15,
    },
});

export default ProductIntroSection;
