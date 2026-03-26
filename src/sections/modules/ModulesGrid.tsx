import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

interface ModuleItem {
    title: string;
    description: string;
    category: string;
}

const MODULES: ModuleItem[] = [
    {
        title: "Employee Directory",
        description: "Centralized database for employee records, contact information, and organizational profiles.",
        category: "Core HR",
    },
    {
        title: "Payroll System",
        description: "Automated salary processing, tax compliance management, and benefits distribution.",
        category: "Finance",
    },
    {
        title: "Attendance Monitoring",
        description: "Real-time tracking of clock-ins, shift rotations, and automated overtime calculations.",
        category: "Operations",
    },
    {
        title: "Recruitment & Onboarding",
        description: "Manage hiring pipelines, track applicants, and streamline documentation for new hires.",
        category: "Talent",
    },
    {
        title: "Leave Management",
        description: "Automated absence requests, balance tracking, and approval workflows integrated with calendar.",
        category: "Core HR",
    },
    {
        title: "Finance & Accounting",
        description: "General ledger tracking, expense reporting, and comprehensive financial audits.",
        category: "Finance",
    },
    {
        title: "Performance Management",
        description: "Facilitate appraisals, set KPIs, and manage continuous feedback loops for growth.",
        category: "Talent",
    },
    {
        title: "Billing System",
        description: "Invoicing, management of accounts receivable, and automated billing cycle tracking.",
        category: "Finance",
    },
    {
        title: "Security & Role Access",
        description: "Fine-grained permissions, security audit logs, and multi-factor authentication settings.",
        category: "Admin",
    },
    {
        title: "Asset Management",
        description: "Track organizational equipment, inventory assignments, and maintenance schedules.",
        category: "Operations",
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

            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.description}</Text>
            </View>

            <Pressable style={styles.learnMore}>
                <Text style={styles.learnMoreText}>Explore Feature →</Text>
            </Pressable>
        </Pressable>
    );
};

const ModulesGrid: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80} id="modules">
            <Container>
                <View style={styles.gridHeader}>
                    <Text style={styles.heading}>PeopleStack Modules</Text>
                    <Text style={styles.sub}>
                        Comprehensive tools designed for modern workforce management.
                    </Text>
                </View>
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
    gridHeader: {
        alignItems: "center",
        marginBottom: 60,
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        fontSize: 32,
        marginBottom: 16,
    },
    sub: {
        ...Typography.body,
        color: Colors.textMuted,
        fontSize: 16,
    },
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
        borderRadius: 16,
        padding: 32,
        justifyContent: "space-between",
        minHeight: 280,
        // @ts-ignore
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    cardHover: {
        borderColor: Colors.primary,
        transform: [{ translateY: -6 }, { scale: 1.01 }],
        shadowColor: Colors.primaryDark,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.1,
        shadowRadius: 24,
    },
    categoryTag: {
        alignSelf: "flex-start",
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginBottom: 24,
    },
    categoryText: {
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 0.5,
        textTransform: "uppercase",
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        marginBottom: 12,
        fontSize: 20,
        fontWeight: "700",
    },
    cardDesc: {
        ...Typography.body,
        color: Colors.textSecondary,
        fontSize: 15,
        lineHeight: 24,
        marginBottom: 24,
    },
    learnMore: {
        paddingVertical: 8,
    },
    learnMoreText: {
        ...Typography.button,
        color: Colors.primary,
        fontSize: 14,
        fontWeight: "600",
    },
});

export default ModulesGrid;
