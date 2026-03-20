import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";
import Button from "../../components/Button";

const FeaturesHero: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={64}>
            <Container>
                <View style={styles.center}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Platform overview</Text>
                    </View>

                    <Text style={styles.heading}>
                        The complete suite for{"\n"}
                        <Text style={styles.highlight}>modern workforce</Text> management
                    </Text>

                    <Text style={styles.subtitle}>
                        One unified platform to handle everything from hire to retire.
                        Eliminate manual{"\n"}paperwork and fragmented tools.
                    </Text>

                    <View style={styles.buttons}>
                        <Button
                            label="Start free trial"
                            onPress={() => { }}
                            variant="primary"
                            size="lg"
                        />
                        <Button
                            label="View product tour"
                            onPress={() => { }}
                            variant="outline"
                            size="lg"
                        />
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    center: {
        alignItems: "center",
    },
    badge: {
        backgroundColor: Colors.section,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginBottom: Spacing.xl,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: "600",
        color: Colors.textMuted,
        letterSpacing: 1.5,
    },
    heading: {
        ...Typography.h1,
        color: Colors.primaryDark,
        fontSize: 46,
        lineHeight: 58,
        textAlign: "center",
        marginBottom: Spacing.lg,
    },
    highlight: {
        color: Colors.primary,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        textAlign: "center",
        lineHeight: 26,
        marginBottom: Spacing["2xl"],
    },
    buttons: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
    },
});

export default FeaturesHero;
