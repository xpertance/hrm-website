import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

interface OutcomeItem {
    icon: string;
    title: string;
    description: string;
    stat: string;
}

const OUTCOMES: OutcomeItem[] = [
    {
        icon: "⏱",
        title: "Reduce Time",
        description:
            "Process complex payroll runs 80% faster with automated engine logic.",
        stat: "Avg. Saving: 12hrs/week",
    },
    {
        icon: "✅",
        title: "Eliminate Errors",
        description:
            "99.9% accuracy guaranteed with built-in federal and state compliance checks.",
        stat: "0% Manual Correction",
    },
    {
        icon: "🚀",
        title: "Productivity",
        description:
            "Empower teams with self-service portals, reducing HR inquiry tickets.",
        stat: "+45% Team Capacity",
    },
    {
        icon: "👁",
        title: "Transparency",
        description:
            "Real-time audit trails for every payroll modification and tax filing.",
        stat: "Full Traceability",
    },
    {
        icon: "📊",
        title: "Better Visibility",
        description:
            "One-click executive reporting on labor costs, churn, and forecasting.",
        stat: "CFO-Ready Data",
    },
];

const OutcomeCard: React.FC<{ item: OutcomeItem }> = ({ item }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <Pressable
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={[styles.card, hovered && styles.cardHover]}
        >
            <View style={styles.iconWrap}>
                <Text style={styles.iconText}>{item.icon}</Text>
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
            <Text style={styles.cardStat}>{item.stat}</Text>
        </Pressable>
    );
};

const OutcomesSection: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80}>
            <Container>
                <View style={styles.header}>
                    <Text style={styles.heading}>Drive Meaningful Business Outcomes</Text>
                    <Text style={styles.subtitle}>
                        Modern enterprises require more than just a calculator. They need a
                        strategic engine{"\n"}that delivers measurable ROI.
                    </Text>
                </View>

                <View style={styles.grid}>
                    {OUTCOMES.map((item) => (
                        <OutcomeCard key={item.title} item={item} />
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginBottom: Spacing["4xl"],
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        textAlign: "center",
        marginBottom: Spacing.base,
        fontSize: 30,
        fontWeight: "700",
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        textAlign: "center",
        lineHeight: 24,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
        justifyContent: "center",
    },
    card: {
        width: "calc(20% - 16px)" as any,
        minWidth: 190,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 12,
        padding: 24,
        transition: "all 0.2s ease" as any,
    },
    cardHover: {
        borderColor: Colors.primary,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        transform: [{ translateY: -2 }],
    },
    iconWrap: {
        width: 44,
        height: 44,
        borderRadius: 10,
        backgroundColor: Colors.section,
        borderWidth: 1,
        borderColor: Colors.border,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
    iconText: {
        fontSize: 20,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 8,
    },
    cardDesc: {
        ...Typography.caption,
        color: Colors.textSecondary,
        fontSize: 13,
        lineHeight: 20,
        marginBottom: 16,
    },
    cardStat: {
        fontSize: 13,
        fontWeight: "600",
        color: Colors.primary,
        textDecorationLine: "underline",
    },
});

export default OutcomesSection;
