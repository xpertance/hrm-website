import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

interface ModuleItem {
    icon: string;
    title: string;
    description: string;
    category: string;
}

const MODULES: ModuleItem[] = [
    {
        icon: "",
        title: "Employee directory",
        description:
            "Centralized database for employee records, contact information, organizational charts, and personal profiles.",
        category: "Core HR",
    },
    {
        icon: "",
        title: "Payroll system",
        description:
            "Automated salary processing, tax compliance management, benefits distribution, and direct deposit handling.",
        category: "Finance",
    },
    {
        icon: "",
        title: "Attendance monitoring",
        description:
            "Real-time tracking of clock-ins, shift rotations, break times, and automated overtime calculations.",
        category: "Operations",
    },
    {
        icon: "",
        title: "Recruitment & onboarding",
        description:
            "Manage hiring pipelines, track applicants, and streamline the documentation process for new hires.",
        category: "Talent",
    },
    {
        icon: "",
        title: "Leave management",
        description:
            "Automated absence requests, balance tracking, and approval workflows integrated with the company calendar.",
        category: "Core HR",
    },
    {
        icon: "",
        title: "Finance & accounting",
        description:
            "General ledger tracking, complex expense reporting, budgeting tools, and comprehensive financial audits.",
        category: "Finance",
    },
    {
        icon: "",
        title: "Performance management",
        description:
            "Facilitate appraisals, set KPIs, manage continuous feedback loops, and track professional growth milestones.",
        category: "Talent",
    },
    {
        icon: "",
        title: "Billing system",
        description:
            "Comprehensive client invoicing, management of accounts receivable, and automated billing cycle tracking.",
        category: "Finance",
    },
    {
        icon: "",
        title: "Security & role access",
        description:
            "Fine-grained user permissions, security audit logs, multi-factor authentication, and data encryption settings.",
        category: "Admin",
    },
];

const CATEGORY_COLORS: Record<string, string> = {
    "Core HR": "#E8F5F3",
    Finance: "#E8F1FB",
    Operations: "#F0F4F8",
    Talent: "#FAF0E6",
    Admin: "#F3F0FA",
};

const CATEGORY_TEXT_COLORS: Record<string, string> = {
    "Core HR": Colors.primary,
    Finance: "#2563EB",
    Operations: Colors.accent,
    Talent: "#D97706",
    Admin: "#7C3AED",
};

const ModuleCard: React.FC<{ item: ModuleItem }> = ({ item }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <Pressable
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={[styles.card, hovered && styles.cardHover]}
        >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>

            <View style={styles.cardFooter}>
                <Pressable style={styles.learnMore}>
                    <Text style={styles.learnMoreText}>Learn more</Text>
                </Pressable>
                <View
                    style={[
                        styles.categoryTag,
                        {
                            backgroundColor:
                                CATEGORY_COLORS[item.category] || Colors.section,
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.categoryText,
                            {
                                color:
                                    CATEGORY_TEXT_COLORS[item.category] || Colors.textSecondary,
                            },
                        ]}
                    >
                        {item.category}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

const ModulesGrid: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={0}>
            <Container>
                <View style={styles.grid}>
                    {MODULES.map((mod) => (
                        <ModuleCard key={mod.title} item={mod} />
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "center",
    },
    card: {
        width: "calc(33.33% - 16px)" as any,
        minWidth: 300,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 12,
        padding: 28,
        justifyContent: "space-between",
        minHeight: 240,
        transition: "all 0.2s ease" as any,
    },
    cardHover: {
        borderColor: Colors.primary,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        transform: [{ translateY: -2 }],
    },
    iconWrap: {
        width: 48,
        height: 48,
        borderRadius: 10,
        backgroundColor: Colors.section,
        borderWidth: 1,
        borderColor: Colors.border,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    iconText: {
        fontSize: 22,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        marginBottom: 8,
        fontSize: 17,
        fontWeight: "600",
    },
    cardDesc: {
        ...Typography.body,
        color: Colors.textSecondary,
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 20,
        flex: 1,
    },
    cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    learnMore: {
        paddingVertical: 4,
    },
    learnMoreText: {
        ...Typography.button,
        color: Colors.primary,
        fontSize: 13,
        fontWeight: "500",
    },
    categoryTag: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.06)",
    },
    categoryText: {
        fontSize: 11,
        fontWeight: "600",
        letterSpacing: 0.5,
    },
});

export default ModulesGrid;
