import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import Button from "../../components/Button";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

const HeroSection: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <Section background={Colors.background} paddingVertical={60}>
            <Container>
                {/* Badge */}
                <View style={styles.badgeRow}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>New: Automated tax filing features</Text>
                    </View>
                </View>

                <View style={styles.heroRow}>
                    {/* Left text */}
                    <View style={styles.heroLeft}>
                        <Text style={styles.heroHeadline}>
                            PeopleStack{"\n"}
                            <Text style={styles.heroHighlight}>Modern workforce & HR{"\n"}management platform</Text>
                        </Text>
                        <Text style={styles.heroSubtext}>
                            Xpertance offers PeopleStack, a comprehensive platform designed to simplify employee operations, payroll processes, and organizational visibility. Manage your team with confidence and precision.
                        </Text>
                        <View style={styles.heroBtns}>
                            <Button label="Get started" variant="primary" size="md" onPress={() => scrollToSection("features")} />
                            <Button label="Book demo" variant="outline" size="md" onPress={() => scrollToSection("contact")} />
                        </View>
                    </View>

                    {/* Right image */}
                    <View style={styles.heroRight}>
                        <View style={styles.dashboardMock}>
                            <View style={styles.dashboardTopBar}>
                                <View style={styles.dotRow}>
                                    <View style={[styles.dot, { backgroundColor: "#EF4444" }]} />
                                    <View style={[styles.dot, { backgroundColor: "#F59E0B" }]} />
                                    <View style={[styles.dot, { backgroundColor: "#22C55E" }]} />
                                </View>
                            </View>
                            <View style={styles.dashboardBody}>
                                <View style={styles.dashSidebar}>
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <View key={i} style={styles.sidebarItem} />
                                    ))}
                                </View>
                                <View style={styles.dashContent}>
                                    <View style={styles.dashCardRow}>
                                        <View style={[styles.dashCard, { backgroundColor: "rgba(15,117,109,0.15)" }]} />
                                        <View style={[styles.dashCard, { backgroundColor: "rgba(100,116,139,0.12)" }]} />
                                    </View>
                                    <View style={styles.dashChart} />
                                    <View style={styles.dashTable}>
                                        {[1, 2, 3].map(i => (
                                            <View key={i} style={styles.tableRow} />
                                        ))}
                                    </View>
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
    badgeRow: {
        marginBottom: 20,
    },
    badge: {
        alignSelf: "flex-start",
        backgroundColor: Colors.softPrimary,
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
    },
    badgeText: {
        ...Typography.caption,
        color: Colors.primary,
        fontSize: 11,
        letterSpacing: 0.8,
    },
    heroRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 60,
        paddingBottom: 40,
    },
    heroLeft: {
        flex: 1,
        maxWidth: 520,
    },
    heroHeadline: {
        ...Typography.h1,
        color: Colors.primaryDark,
        fontSize: 52,
        lineHeight: 62,
        marginBottom: 20,
    },
    heroHighlight: {
        color: Colors.primary,
    },
    heroSubtext: {
        ...Typography.body,
        color: Colors.textMuted,
        marginBottom: 32,
        lineHeight: 28,
        fontSize: 18,
    },
    heroBtns: {
        flexDirection: "row",
        gap: 16,
    },
    heroRight: {
        flex: 1,
        maxWidth: 500,
        alignItems: "center",
    },
    dashboardMock: {
        width: "100%",
        maxWidth: 420,
        backgroundColor: Colors.primaryDark,
        borderRadius: 12,
        overflow: "hidden",
        // @ts-ignore
        boxShadow: "0 20px 60px rgba(15,23,42,0.3)",
    },
    dashboardTopBar: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.08)",
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
        flexDirection: "row",
        minHeight: 220,
    },
    dashSidebar: {
        width: 48,
        backgroundColor: "rgba(255,255,255,0.04)",
        paddingVertical: 14,
        gap: 12,
        alignItems: "center",
    },
    sidebarItem: {
        width: 24,
        height: 24,
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,0.1)",
    },
    dashContent: {
        flex: 1,
        padding: 16,
        gap: 12,
    },
    dashCardRow: {
        flexDirection: "row",
        gap: 10,
    },
    dashCard: {
        flex: 1,
        height: 40,
        borderRadius: 6,
    },
    dashChart: {
        height: 50,
        backgroundColor: "rgba(15,117,109,0.2)",
        borderRadius: 6,
    },
    dashTable: {
        gap: 6,
    },
    tableRow: {
        height: 16,
        backgroundColor: "rgba(255,255,255,0.06)",
        borderRadius: 3,
    },
});

export default HeroSection;
