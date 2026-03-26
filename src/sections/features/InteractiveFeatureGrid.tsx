import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";
import {
    EmployeeManagement,
    PayrollCompliance,
    AttendanceLeave,
    ESSPortal,
    FinanceLedgers,
    PerformanceReviews,
} from "./FeatureModules";

const MODULES = [
    {
        id: "emp",
        title: "Employee Management",
        desc: "Centralized digital records & org charts.",
        icon: "",
        component: EmployeeManagement,
    },
    {
        id: "payroll",
        title: "Automated Payroll",
        desc: "Stress-free compliance & tax filings.",
        icon: "",
        component: PayrollCompliance,
    },
    {
        id: "attendance",
        title: "Attendance & Leave",
        desc: "Smart workflows & biometric logs.",
        icon: "",
        component: AttendanceLeave,
    },
    {
        id: "ess",
        title: "ESS Portal",
        desc: "Self-service mobile & web access.",
        icon: "",
        component: ESSPortal,
    },
    {
        id: "finance",
        title: "Finance & Ledgers",
        desc: "Operational expenses & journals.",
        icon: "",
        component: FinanceLedgers,
    },
    {
        id: "performance",
        title: "Performance Reviews",
        desc: "OKRs, 360 feedback & growth.",
        icon: "",
        component: PerformanceReviews,
    },
];

const InteractiveFeatureGrid: React.FC = () => {
    const [activeId, setActiveId] = useState(MODULES[0].id);
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const handleSelect = (id: string) => {
        setActiveId(id);
    };

    const ActiveComponent = MODULES.find(m => m.id === activeId)?.component || EmployeeManagement;

    return (
        <>
        <Section background={Colors.background} paddingVertical={60} id="features">
            <Container>
                <View style={styles.header}>
                    <Text style={styles.heading}>Core Platform Modules</Text>
                    <Text style={styles.subHeading}>
                        Everything you need to manage your workforce, all in one connected ecosystem.
                    </Text>
                </View>

                {/* Grid of Cards */}
                <View style={styles.grid}>
                    {MODULES.map((mod) => {
                        const isActive = activeId === mod.id;
                        const isHovered = hoveredId === mod.id;

                        return (
                            <Pressable
                                key={mod.id}
                                onPress={() => handleSelect(mod.id)}
                                onHoverIn={() => setHoveredId(mod.id)}
                                onHoverOut={() => setHoveredId(null)}
                                style={[
                                    styles.card,
                                    isActive && styles.activeCard,
                                    isHovered && !isActive && styles.hoverCard,
                                ]}
                            >
                                <View style={[styles.iconBox, isActive && styles.activeIconBox]}>
                                    <Text style={styles.icon}>{mod.icon}</Text>
                                </View>
                                <View style={styles.cardContent}>
                                    <Text style={[styles.cardTitle, isActive && styles.activeCardTitle]}>
                                        {mod.title}
                                    </Text>
                                    <Text style={styles.cardDesc} numberOfLines={2}>
                                        {mod.desc}
                                    </Text>
                                </View>
                                {isActive && <View style={styles.activeIndicator} />}
                            </Pressable>
                        );
                    })}
                </View>
            </Container>
        </Section>
        <ActiveComponent />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginBottom: 48,
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        fontSize: 32,
        marginBottom: 12,
    },
    subHeading: {
        ...Typography.bodyLarge,
        color: Colors.textMuted,
        textAlign: "center",
        maxWidth: 600,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
        marginBottom: 40,
    },
    card: {
        flex: 1,
        minWidth: 280,
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 24,
        borderWidth: 1,
        borderColor: Colors.border,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        position: "relative",
        // @ts-ignore
        transition: "all 0.3s ease",
    },
    activeCard: {
        borderColor: Colors.primary,
        backgroundColor: Colors.softPrimary,
        transform: [{ translateY: -4 }],
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 16,
    },
    hoverCard: {
        borderColor: Colors.primary,
        transform: [{ translateY: -2 }],
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: Colors.section,
        alignItems: "center",
        justifyContent: "center",
    },
    activeIconBox: {
        backgroundColor: Colors.primary,
    },
    icon: {
        fontSize: 22,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 4,
    },
    activeCardTitle: {
        color: Colors.primary,
    },
    cardDesc: {
        ...Typography.caption,
        color: Colors.textSecondary,
        fontSize: 13,
        lineHeight: 18,
    },
    activeIndicator: {
        position: "absolute",
        bottom: -1,
        left: "30%",
        right: "30%",
        height: 3,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    detailWrapper: {
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        marginTop: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
    },
});

export default InteractiveFeatureGrid;
