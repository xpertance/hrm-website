import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const BENEFITS = [
    "Elimination of manual data synchronization errors",
    "Holistic employee lifecycle management from hire to retire",
    "Predictive insights that drive organizational health",
];

const UnifiedEcosystem: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80}>
            <Container>
                <View style={styles.row}>
                    {/* Left image placeholder */}
                    <View style={styles.imageCol}>
                        <View style={styles.imagePlaceholder}>
                            <View style={styles.personGroup}>
                                <View style={[styles.person, { backgroundColor: "rgba(15,117,109,0.3)" }]} />
                                <View style={[styles.person, { backgroundColor: "rgba(15,117,109,0.5)", marginLeft: -20, zIndex: 1 }]} />
                                <View style={[styles.person, { backgroundColor: "rgba(15,117,109,0.7)", marginLeft: -20, zIndex: 2 }]} />
                            </View>
                            <View style={styles.meetingTable} />
                        </View>
                    </View>

                    {/* Right text */}
                    <View style={styles.textCol}>
                        <Text style={styles.heading}>
                            A Unified Human Capital Management Ecosystem
                        </Text>
                        <Text style={styles.desc}>
                            Most HR tools are silos. We envisioned a world where payroll isn't a standalone chore, but the pulse of a larger organism. Our ecosystem integrates benefits, performance, recruitment, and compliance into a single source of truth.
                        </Text>
                        <View style={styles.bullets}>
                            {BENEFITS.map((item, i) => (
                                <View key={i} style={styles.bulletRow}>
                                    <View style={styles.checkCircle}>
                                        <Text style={styles.checkMark}>✓</Text>
                                    </View>
                                    <Text style={styles.bulletText}>{item}</Text>
                                </View>
                            ))}
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
    imageCol: {
        flex: 1,
        alignItems: "center",
    },
    imagePlaceholder: {
        width: "100%",
        maxWidth: 420,
        height: 300,
        borderRadius: 16,
        backgroundColor: Colors.section,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    personGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    person: {
        width: 80,
        height: 100,
        borderRadius: 12,
    },
    meetingTable: {
        width: "70%",
        height: 16,
        borderRadius: 8,
        backgroundColor: Colors.muted,
    },
    textCol: {
        flex: 1,
        maxWidth: 480,
    },
    heading: {
        ...Typography.h3,
        color: Colors.primaryDark,
        marginBottom: 16,
        lineHeight: 38,
    },
    desc: {
        ...Typography.body,
        color: Colors.textMuted,
        marginBottom: 28,
        lineHeight: 26,
    },
    bullets: {
        gap: 16,
    },
    bulletRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    checkCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.softPrimary,
        alignItems: "center",
        justifyContent: "center",
    },
    checkMark: {
        color: Colors.primary,
        fontWeight: "700",
        fontSize: 13,
    },
    bulletText: {
        ...Typography.body,
        color: Colors.primaryDark,
        fontSize: 15,
        flex: 1,
    },
});

export default UnifiedEcosystem;
