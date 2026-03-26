import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const STEPS = [
    {
        title: "Employee data added",
        desc: "Securely onboard and centralize all employee records in one place.",
    },
    {
        title: "Attendance tracking",
        desc: "Real-time logs for clock-ins, leave, and time tracking sync automatically.",
    },
    {
        title: "Payroll processing",
        desc: "Accurate engine calculates wages, taxes, and deductions instantly.",
    },
    {
        title: "Payslip generation",
        desc: "Automatic disbursements and secure portal access for every employee.",
    },
    {
        title: "Insights monitoring",
        desc: "Track workforce efficiency and trends via actionable dashboards.",
    },
];

const SystemWorkflowSection: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={80} id="workflow">
            <Container>
                <Text style={styles.heading}>How PeopleStack Works</Text>
                <Text style={styles.subtext}>
                    A streamlined workflow ensuring complete efficiency and accuracy.
                </Text>

                <View style={styles.stepsGrid}>
                    {STEPS.map((step, index) => (
                        <View key={index} style={styles.stepBox}>
                            <View style={styles.stepHeader}>
                                <View style={styles.circle}>
                                    <Text style={styles.number}>{index + 1}</Text>
                                </View>
                                {index < STEPS.length - 1 && <View style={styles.line} />}
                            </View>
                            <Text style={styles.stepTitle}>{step.title}</Text>
                            <Text style={styles.stepDesc}>{step.desc}</Text>
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
        fontSize: 32,
        marginBottom: 12,
        textAlign: "center",
    },
    subtext: {
        ...Typography.body,
        color: Colors.textMuted,
        marginBottom: 60,
        textAlign: "center",
        fontSize: 16,
    },
    stepsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 20,
    },
    stepBox: {
        flex: 1,
        minWidth: 180,
        alignItems: "center",
        textAlign: "center",
    },
    stepHeader: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "auto",
        zIndex: 2,
    },
    number: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: "700",
    },
    line: {
        position: "absolute",
        right: -10,
        top: 22,
        width: "100%",
        height: 2,
        backgroundColor: Colors.primary,
        opacity: 0.2,
        zIndex: 1,
    },
    stepTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 8,
        textAlign: "center",
    },
    stepDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        lineHeight: 20,
        fontSize: 14,
        textAlign: "center",
    },
});

export default SystemWorkflowSection;
