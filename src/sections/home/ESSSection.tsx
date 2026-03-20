import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const BULLETS = [
    "Download payslips in one click",
    "Seamless leave application workflow",
    "Mobile-friendly interface",
];

const ESSSection: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={80}>
            <Container>
                <View style={styles.row}>
                    {/* Left text */}
                    <View style={styles.textCol}>
                        <Text style={styles.heading}>
                            Employee Self-Service (ESS){"\n"}Portal
                        </Text>
                        <Text style={styles.desc}>
                            Empower your workforce with our intuitive ESS portal. Employees can view payslips, request leave, update personal details, and track their performance without HR intervention.
                        </Text>
                        <View style={styles.bullets}>
                            {BULLETS.map((item, i) => (
                                <View key={i} style={styles.bulletRow}>
                                    <Text style={styles.checkIcon}>✓</Text>
                                    <Text style={styles.bulletText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Right image placeholder */}
                    <View style={styles.imageCol}>
                        <View style={styles.imagePlaceholder}>
                            <View style={styles.imageOverlay}>
                                <Text style={styles.overlayLabel}>SALARY SUMMARY</Text>
                                <View style={styles.overlayStat}>
                                    <View style={[styles.overlayBar, { width: "80%" }]} />
                                    <View style={[styles.overlayBar, { width: "60%" }]} />
                                    <View style={[styles.overlayBar, { width: "90%" }]} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 60,
    },
    textCol: {
        flex: 1,
        maxWidth: 480,
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        fontSize: 32,
        lineHeight: 42,
        marginBottom: 16,
    },
    desc: {
        ...Typography.body,
        color: Colors.textMuted,
        marginBottom: 28,
        lineHeight: 26,
    },
    bullets: {
        gap: 14,
    },
    bulletRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    checkIcon: {
        color: Colors.primary,
        fontWeight: "600",
        fontSize: 16,
    },
    bulletText: {
        ...Typography.body,
        color: Colors.primaryDark,
        fontWeight: "500",
        fontSize: 15,
    },
    imageCol: {
        flex: 1,
        alignItems: "center",
    },
    imagePlaceholder: {
        width: "100%",
        maxWidth: 420,
        height: 300,
        borderRadius: 16,
        backgroundColor: "#1a3a4f",
        overflow: "hidden",
        justifyContent: "flex-end",
        padding: 20,
        // @ts-ignore
        background: "linear-gradient(135deg, #0F756D 0%, #1e3a5f 60%, #2d1f3f 100%)",
    },
    imageOverlay: {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderRadius: 12,
        padding: 16,
        // @ts-ignore
        backdropFilter: "blur(8px)",
    },
    overlayLabel: {
        ...Typography.caption,
        color: "rgba(255,255,255,0.8)",
        fontSize: 10,
        letterSpacing: 1.5,
        marginBottom: 10,
    },
    overlayStat: {
        gap: 8,
    },
    overlayBar: {
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,0.25)",
    },
});

export default ESSSection;
