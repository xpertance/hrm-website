import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const STEPS = [
    {
        title: "Employee data is added",
        desc: "Onboard employees to the platform securely.",
    },
    {
        title: "Attendance is recorded",
        desc: "Leave tracking and time logs happen automatically.",
    },
    {
        title: "Payroll is calculated",
        desc: "Wages sync with stored organizational policies.",
    },
    {
        title: "Payslips are generated",
        desc: "Disbursements and reporting occur seamlessly.",
    },
    {
        title: "Monitor insights",
        desc: "HR tracks trends via clear dashboards.",
    },
];

const SystemWorkflowSection: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={80}>
            <Container>
                <Text style={styles.heading}>How Xpertance Works</Text>
                <Text style={styles.subtext}>
                    A streamlined workflow ensuring complete efficiency.
                </Text>

                <View style={styles.stepsContainer}>
                    {STEPS.map((step, index) => (
                        <View key={index} style={styles.stepItem}>
                            <View style={styles.stepNumberCircle}>
                                <Text style={styles.stepNumberText}>{index + 1}</Text>
                            </View>
                            <View style={styles.stepContent}>
                                <Text style={styles.stepTitle}>{step.title}</Text>
                                <Text style={styles.stepDesc}>{step.desc}</Text>
                            </View>
                            {index < STEPS.length - 1 && (
                                <View style={styles.stepConnector} />
                            )}
                        </View>
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        marginBottom: 12,
        textAlign: "center",
    },
    subtext: {
        ...Typography.body,
        color: Colors.textMuted,
        marginBottom: 48,
        lineHeight: 26,
        textAlign: "center",
        maxWidth: 600,
        marginHorizontal: "auto",
    },
    stepsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 20,
    },
    stepItem: {
        flex: 1,
        minWidth: 160,
        alignItems: "center",
        position: "relative",
    },
    stepNumberCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
        zIndex: 2,
    },
    stepNumberText: {
        ...Typography.h4,
        color: Colors.white,
    },
    stepContent: {
        alignItems: "center",
        textAlign: "center",
    },
    stepTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 15,
        marginBottom: 8,
        textAlign: "center",
    },
    stepDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        textAlign: "center",
        lineHeight: 20,
    },
    stepConnector: {
        display: "none", // For small screens
    },
});

export default SystemWorkflowSection;
