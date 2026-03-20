import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const STATS = [
    { value: "ACCURATE", label: "TAX COMPLIANCE" },
    { value: "FAST", label: "PAYROLL PROCESSING" },
];

const ErrorReductionSection: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80}>
            <Container>
                <View style={styles.row}>
                    {/* Left image placeholder */}
                    <View style={styles.imageCol}>
                        <View style={styles.imagePlaceholder}>
                            <View style={styles.chartLine1} />
                            <View style={styles.chartLine2} />
                            <View style={styles.chartLine3} />
                            <View style={styles.dataOverlay}>
                                <View style={styles.dataRow}>
                                    <View style={[styles.dataBar, { width: "70%" }]} />
                                </View>
                                <View style={styles.dataRow}>
                                    <View style={[styles.dataBar, { width: "85%" }]} />
                                </View>
                                <View style={styles.dataRow}>
                                    <View style={[styles.dataBar, { width: "55%" }]} />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Right text */}
                    <View style={styles.textCol}>
                        <Text style={styles.heading}>
                            Improved Payroll Accuracy
                        </Text>
                        <Text style={styles.desc}>
                            Manual data entry is the leading cause of payroll discrepancies. Our automated engine syncs directly with attendance and leave records to ensure precision every single month.
                        </Text>

                        <View style={styles.statsRow}>
                            {STATS.map((stat, i) => (
                                <View key={i} style={styles.statCard}>
                                    <Text style={styles.statValue}>{stat.value}</Text>
                                    <Text style={styles.statLabel}>{stat.label}</Text>
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
        padding: 24,
        justifyContent: "flex-end",
        position: "relative",
    },
    chartLine1: {
        position: "absolute",
        top: 40,
        left: 30,
        right: 30,
        height: 2,
        backgroundColor: Colors.muted,
    },
    chartLine2: {
        position: "absolute",
        top: 90,
        left: 30,
        right: 30,
        height: 2,
        backgroundColor: Colors.muted,
    },
    chartLine3: {
        position: "absolute",
        top: 140,
        left: 30,
        right: 30,
        height: 2,
        backgroundColor: Colors.muted,
    },
    dataOverlay: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 16,
        gap: 10,
        // @ts-ignore
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    },
    dataRow: {
        height: 10,
    },
    dataBar: {
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.softPrimary,
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
        marginBottom: 32,
        lineHeight: 26,
    },
    statsRow: {
        flexDirection: "row",
        gap: 20,
    },
    statCard: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.muted,
        borderRadius: 12,
        padding: 20,
        borderLeftWidth: 3,
        borderLeftColor: Colors.primary,
    },
    statValue: {
        ...Typography.h3,
        color: Colors.primaryDark,
        fontSize: 28,
        fontWeight: "800",
        marginBottom: 4,
    },
    statLabel: {
        ...Typography.caption,
        color: Colors.textMuted,
        fontSize: 11,
        letterSpacing: 1.5,
    },
});

export default ErrorReductionSection;
