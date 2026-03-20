import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

const FEATURES = [
    {
        icon: "🗄️",
        title: "Centralized Database",
        desc: "One source of truth for all employee records, contracts, and sensitive documents with bank-grade security.",
    },
    {
        icon: "⚙️",
        title: "Automated Payroll",
        desc: "Run automated payroll in minutes with automatic tax calculations and direct bank disbursements.",
    },
    {
        icon: "📍",
        title: "Attendance Tracking",
        desc: "Real-time tracking with geo-fencing and biometric integration for remote and on-site teams.",
    },
    {
        icon: "📊",
        title: "Performance Monitoring",
        desc: "Set KPIs, track progress, and conduct seamless appraisals with integrated feedback loops.",
    },
    {
        icon: "✅",
        title: "Compliance Management",
        desc: "Stay compliant with local labor laws and statutory requirements automatically updated in-app.",
    },
    {
        icon: "🏦",
        title: "Loan Management",
        desc: "Manage employee loans, salary advances, and repayments with automated payroll deductions.",
    },
];

const WhyChooseSection: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80}>
            <Container>
                <Text style={styles.heading}>Why Choose Xpertance?</Text>
                <Text style={styles.subtext}>
                    We built a platform that scales with your growth. Focus on workforce efficiency{"\n"}and eliminate manual overhead with our automated suite.
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

const FeatureCard: React.FC<{ icon: string; title: string; desc: string }> = ({
    icon,
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
            <View style={styles.iconCircle}>
                <Text style={styles.iconText}>{icon}</Text>
            </View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDesc}>{desc}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        marginBottom: 12,
    },
    subtext: {
        ...Typography.body,
        color: Colors.textMuted,
        marginBottom: 48,
        lineHeight: 26,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 24,
    },
    card: {
        width: "calc(33.333% - 16px)" as any,
        minWidth: 280,
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.muted,
        borderRadius: 12,
        padding: 28,
        gap: 12,
        // @ts-ignore
        transitionProperty: "box-shadow, border-color",
        transitionDuration: "0.25s",
    },
    cardHovered: {
        borderColor: Colors.primary,
        // @ts-ignore
        boxShadow: "0 4px 20px rgba(15,117,109,0.08)",
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.softPrimary,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 4,
    },
    iconText: {
        fontSize: 20,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 16,
    },
    cardDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        lineHeight: 22,
    },
});

export default WhyChooseSection;
