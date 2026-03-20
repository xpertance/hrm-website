import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const STARTUP_FEATURES = [
    { title: "Onboarding", desc: "Self-service portals" },
    { title: "Equity", desc: "Cap table integration" },
];

const ENTERPRISE_FEATURES = [
    { title: "Global Tax", desc: "120+ Countries" },
    { title: "SSO & API", desc: "Enterprise security" },
];

const BuiltForEveryStage: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80}>
            <Container>
                <View style={styles.center}>
                    <Text style={styles.heading}>Built for Every Stage</Text>
                    <Text style={styles.subtext}>
                        From your first 10 hires to 10,000 global employees, our architecture scales with your ambition.
                    </Text>
                </View>

                <View style={styles.cardsRow}>
                    {/* Startups Card */}
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <View style={[styles.iconWrap, { backgroundColor: Colors.softPrimary }]}>
                                <Text style={styles.iconEmoji}>🚀</Text>
                            </View>
                            <View>
                                <Text style={styles.cardTitle}>For Startups</Text>
                                <Text style={styles.cardSubtitle}>Speed & Agility</Text>
                            </View>
                        </View>
                        <Text style={styles.cardDesc}>
                            Startups need to move fast without getting bogged down by compliance. We offer automated onboarding, simple payroll, and essential benefits to help you win the talent war early.
                        </Text>
                        <View style={styles.featureRow}>
                            {STARTUP_FEATURES.map((f, i) => (
                                <View key={i} style={styles.featureItem}>
                                    <Text style={styles.featureTitle}>{f.title}</Text>
                                    <Text style={styles.featureDesc}>{f.desc}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Enterprise Card */}
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <View style={[styles.iconWrap, { backgroundColor: Colors.softAccent }]}>
                                <Text style={styles.iconEmoji}>🏢</Text>
                            </View>
                            <View>
                                <Text style={styles.cardTitle}>For Enterprises</Text>
                                <Text style={styles.cardSubtitle}>Compliance & Scale</Text>
                            </View>
                        </View>
                        <Text style={styles.cardDesc}>
                            Global enterprises face complex multi-region compliance, custom reporting, and deep ERP integrations. Our platform handles the scale while maintaining a simple user experience.
                        </Text>
                        <View style={styles.featureRow}>
                            {ENTERPRISE_FEATURES.map((f, i) => (
                                <View key={i} style={styles.featureItem}>
                                    <Text style={styles.featureTitle}>{f.title}</Text>
                                    <Text style={styles.featureDesc}>{f.desc}</Text>
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
    center: {
        alignItems: "center",
        marginBottom: 48,
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        textAlign: "center",
        marginBottom: 12,
    },
    subtext: {
        ...Typography.body,
        color: Colors.textMuted,
        textAlign: "center",
        maxWidth: 520,
    },
    cardsRow: {
        flexDirection: "row",
        gap: 24,
        flexWrap: "wrap",
    },
    card: {
        flex: 1,
        minWidth: 300,
        borderWidth: 1,
        borderColor: Colors.muted,
        borderRadius: 16,
        padding: 32,
        gap: 20,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
    },
    iconWrap: {
        width: 44,
        height: 44,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    iconEmoji: {
        fontSize: 22,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 18,
    },
    cardSubtitle: {
        ...Typography.bodySm,
        color: Colors.primary,
        fontWeight: "500",
    },
    cardDesc: {
        ...Typography.body,
        color: Colors.textMuted,
        lineHeight: 26,
    },
    featureRow: {
        flexDirection: "row",
        gap: 20,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: Colors.muted,
    },
    featureItem: {
        flex: 1,
    },
    featureTitle: {
        ...Typography.label,
        color: Colors.primaryDark,
        marginBottom: 4,
    },
    featureDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        fontSize: 13,
    },
});

export default BuiltForEveryStage;
