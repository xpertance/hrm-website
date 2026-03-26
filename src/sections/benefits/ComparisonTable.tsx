import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

interface ComparisonRow {
    feature: string;
    manual: string;
    peoplestack: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
    {
        feature: "Data management",
        manual: "Spreadsheets & paper",
        peoplestack: "Unified cloud database",
    },
    {
        feature: "Calculation speed",
        manual: "2-3 business days",
        peoplestack: "Instant (seconds)",
    },
    {
        feature: "Tax compliance",
        manual: "Manual filing risks",
        peoplestack: "Auto-calculated & filed",
    },
    {
        feature: "Employee access",
        manual: "HR request required",
        peoplestack: "24/7 mobile self-service",
    },
    {
        feature: "Reporting",
        manual: "Delayed & static",
        peoplestack: "Real-time visual analytics",
    },
];

const ComparisonTable: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={80}>
            <Container>
                <View style={styles.header}>
                    <Text style={styles.heading}>
                        Manual HR vs. <Text style={styles.highlight}>PeopleStack</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                        See how the switch to automation transforms your daily operations.
                    </Text>
                </View>

                <View style={styles.tableWrap}>
                    {/* Table header */}
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={styles.colFeature}>
                            <Text style={styles.colHeaderText}>Feature comparison</Text>
                        </View>
                        <View style={styles.colManual}>
                            <Text style={styles.colHeaderText}>Manual process</Text>
                        </View>
                        <View style={styles.colHR}>
                            <Text style={[styles.colHeaderText, { color: Colors.primary }]}>
                                PeopleStack
                            </Text>
                        </View>
                    </View>

                    {/* Table rows */}
                    {COMPARISON_DATA.map((row, idx) => (
                        <View
                            key={row.feature}
                            style={[
                                styles.tableRow,
                                idx < COMPARISON_DATA.length - 1 && styles.tableRowBorder,
                            ]}
                        >
                            <View style={styles.colFeature}>
                                <Text style={styles.featureText}>{row.feature}</Text>
                            </View>
                            <View style={styles.colManual}>
                                <Text style={styles.manualText}>{row.manual}</Text>
                            </View>
                            <View style={styles.colHR}>
                                <View style={styles.checkRow}>
                                    <Text style={styles.checkIcon}>✓</Text>
                                    <Text style={styles.hrText}>{(row as any).peoplestack}</Text>
                                </View>
                            </View>
                        </View>
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
        marginBottom: Spacing.md,
        fontSize: 30,
        fontWeight: "700",
    },
    highlight: {
        color: Colors.primary,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        textAlign: "center",
    },
    tableWrap: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        overflow: "hidden",
        maxWidth: 800,
        alignSelf: "center",
        width: "100%",
    },
    tableRow: {
        flexDirection: "row",
        paddingVertical: 18,
        paddingHorizontal: 28,
        alignItems: "center",
    },
    tableRowBorder: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    tableHeader: {
        backgroundColor: Colors.section,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        paddingVertical: 14,
    },
    colFeature: {
        flex: 1.2,
    },
    colManual: {
        flex: 1,
    },
    colHR: {
        flex: 1.3,
    },
    colHeaderText: {
        fontSize: 11,
        fontWeight: "700",
        color: Colors.textMuted,
        letterSpacing: 1,
    },
    featureText: {
        ...Typography.body,
        color: Colors.primaryDark,
        fontWeight: "600",
        fontSize: 14,
    },
    manualText: {
        ...Typography.body,
        color: Colors.textSecondary,
        fontSize: 14,
    },
    checkRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    checkIcon: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: "700",
    },
    hrText: {
        ...Typography.body,
        color: Colors.primary,
        fontWeight: "500",
        fontSize: 14,
    },
});

export default ComparisonTable;
