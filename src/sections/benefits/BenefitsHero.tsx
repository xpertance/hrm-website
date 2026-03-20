import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";
import Button from "../../components/Button";

const BenefitsHero: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={60}>
            <Container>
                <View style={styles.row}>
                    {/* Left text */}
                    <View style={styles.left}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeIcon}>⚡</Text>
                            <Text style={styles.badgeText}>EFFICIENCY REIMAGINED</Text>
                        </View>

                        <Text style={styles.heading}>
                            Transform Your{"\n"}Payroll into a{"\n"}
                            <Text style={styles.headingHighlight}>Strategic{"\n"}Advantage</Text>
                        </Text>

                        <Text style={styles.subtitle}>
                            Stop losing hours to manual data entry. HRPayroll automates your
                            back-office ecosystem so you can focus on building
                            high-performance teams.
                        </Text>

                        <View style={styles.buttons}>
                            <Button
                                label="Start Free Trial"
                                onPress={() => { }}
                                variant="primary"
                                size="lg"
                            />
                            <Pressable style={styles.demoBtn}>
                                <Text style={styles.demoBtnIcon}>▶</Text>
                                <Text style={styles.demoBtnText}>Watch Product Demo</Text>
                            </Pressable>
                        </View>
                    </View>

                    {/* Right - Dashboard Preview */}
                    <View style={styles.right}>
                        <View style={styles.dashboardPreview}>
                            <View style={styles.dashboardTopBar}>
                                <View style={styles.dotRow}>
                                    <View style={[styles.dot, { backgroundColor: "#EF4444" }]} />
                                    <View style={[styles.dot, { backgroundColor: "#F59E0B" }]} />
                                    <View style={[styles.dot, { backgroundColor: "#10B981" }]} />
                                </View>
                            </View>

                            <View style={styles.dashboardBody}>
                                <View style={styles.dashRow}>
                                    <View style={[styles.dashBlock, { flex: 2, height: 24, backgroundColor: Colors.section }]} />
                                    <View style={[styles.dashBlock, { flex: 1, height: 24, backgroundColor: Colors.section }]} />
                                </View>
                                <View style={styles.dashRow}>
                                    <View style={[styles.dashBlock, { flex: 1, height: 60, backgroundColor: "rgba(15,117,109,0.08)" }]} />
                                    <View style={[styles.dashBlock, { flex: 1, height: 60, backgroundColor: Colors.section }]} />
                                    <View style={[styles.dashBlock, { flex: 1, height: 60, backgroundColor: Colors.section }]} />
                                </View>
                                <View style={[styles.dashBlock, { height: 80, backgroundColor: "rgba(15,117,109,0.05)" }]} />
                            </View>

                            <View style={styles.dashboardLabel}>
                                <Text style={styles.labelText}>Live Dashboard Preview</Text>
                                <View style={styles.playCircle}>
                                    <Text style={styles.playIcon}>▶</Text>
                                </View>
                            </View>
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
    left: {
        flex: 1,
        maxWidth: 480,
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        backgroundColor: "#E8F5F3",
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginBottom: Spacing.xl,
    },
    badgeIcon: {
        fontSize: 12,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: "600",
        color: Colors.primary,
        letterSpacing: 1,
    },
    heading: {
        ...Typography.h1,
        color: Colors.primaryDark,
        fontSize: 44,
        lineHeight: 54,
        marginBottom: Spacing.lg,
    },
    headingHighlight: {
        color: Colors.primary,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        lineHeight: 26,
        marginBottom: Spacing["2xl"],
        maxWidth: 400,
    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    demoBtn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.white,
    },
    demoBtnIcon: {
        fontSize: 12,
        color: Colors.textSecondary,
    },
    demoBtnText: {
        ...Typography.button,
        color: Colors.primaryDark,
        fontSize: 14,
    },
    right: {
        flex: 1,
    },
    dashboardPreview: {
        backgroundColor: Colors.section,
        borderRadius: 12,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: Colors.border,
    },
    dashboardTopBar: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    dotRow: {
        flexDirection: "row",
        gap: 6,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    dashboardBody: {
        padding: 20,
        gap: 16,
    },
    dashRow: {
        flexDirection: "row",
        gap: 12,
    },
    dashBlock: {
        borderRadius: 8,
    },
    dashboardLabel: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "rgba(15,23,42,0.85)",
        margin: 12,
        borderRadius: 8,
    },
    labelText: {
        color: Colors.white,
        fontSize: 13,
        fontWeight: "500",
    },
    playCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(255,255,255,0.2)",
        alignItems: "center",
        justifyContent: "center",
    },
    playIcon: {
        color: Colors.white,
        fontSize: 12,
    },
});

export default BenefitsHero;
