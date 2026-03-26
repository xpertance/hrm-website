import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const FEATURES = [
    {
        title: "Centralized database",
        desc: "One source of truth for all employee records, contracts, and sensitive documents with secure access control.",
    },
    {
        title: "Automated payroll",
        desc: "Run automated payroll in minutes with systematic calculations and direct disbursements.",
    },
    {
        title: "Attendance tracking",
        desc: "Real-time tracking for remote and on-site teams with simplified reporting dashboard.",
    },
    {
        title: "Performance monitoring",
        desc: "Set KPIs, track progress, and conduct appraisals with integrated feedback loops.",
    },
    {
        title: "Compliance management",
        desc: "Stay aligned with labor laws and statutory requirements through automated updates.",
    },
    {
        title: "Loan management",
        desc: "Manage employee loans, salary advances, and repayments with automated deductions.",
    },
];

const WhyChooseSection: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80} id="why-choose">
            <Container>
                <Text style={styles.heading}>Why choose PeopleStack?</Text>
                <Text style={styles.subtext}>
                    We provide a platform that scales with your growth. Focus on workforce efficiency and eliminate manual overhead with our automated suite.
                </Text>

                <View style={styles.grid}>
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const FeatureCard: React.FC<{ title: string; desc: string }> = ({
    title,
    desc,
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Pressable
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={[styles.card, hovered && styles.cardHovered]}
        >
            <View style={styles.cardHeader}>
                <View style={styles.indicator} />
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
            <Text style={styles.cardDesc}>{desc}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        marginBottom: 12,
        fontSize: 32,
    },
    subtext: {
        ...Typography.body,
        color: Colors.textMuted,
        marginBottom: 48,
        lineHeight: 26,
        fontSize: 16,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 24,
    },
    card: {
        width: "calc(33.333% - 16px)" as any,
        minWidth: 280,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 12,
        padding: 28,
        gap: 12,
        // @ts-ignore
        transition: "all 0.25s ease",
    },
    cardHovered: {
        borderColor: Colors.primary,
        transform: [{ translateY: -4 }],
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 15,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 8,
    },
    indicator: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: Colors.primary,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 18,
        fontWeight: "600",
    },
    cardDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        lineHeight: 22,
        fontSize: 14,
    },
});

export default WhyChooseSection;
