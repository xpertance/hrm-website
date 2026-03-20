import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";
import Button from "../../components/Button";

const FeaturesCTA: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80}>
            <Container>
                <View style={styles.center}>
                    <Text style={styles.heading}>Ready to transform your HR?</Text>
                    <Text style={styles.subtitle}>
                        Join over 5,000+ companies that trust HRPayroll to manage their most
                        valuable asset: their{"\n"}people.
                    </Text>
                    <View style={styles.buttons}>
                        <Button
                            label="Schedule a Free Demo"
                            onPress={() => { }}
                            variant="primary"
                            size="lg"
                        />
                        <Button
                            label="Compare Plans"
                            onPress={() => { }}
                            variant="outline"
                            size="lg"
                        />
                    </View>
                    <Text style={styles.footnote}>
                        No credit card required • 14-day free trial • Cancel anytime
                    </Text>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    center: {
        alignItems: "center",
        paddingVertical: 40,
    },
    heading: {
        ...Typography.h1,
        color: Colors.primaryDark,
        textAlign: "center",
        fontSize: 36,
        marginBottom: Spacing.base,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        textAlign: "center",
        lineHeight: 24,
        marginBottom: Spacing.xl,
    },
    buttons: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        marginBottom: Spacing.lg,
    },
    footnote: {
        ...Typography.caption,
        color: Colors.textMuted,
        fontSize: 13,
    },
});

export default FeaturesCTA;
