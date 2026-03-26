import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

const ModulesHero: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={48}>
            <Container>
                <View style={styles.row}>
                    <View style={styles.left}>
                        <Text style={styles.heading}>HR & Payroll Modules</Text>
                        <Text style={styles.subtitle}>
                            A centralized hub for managing all your organizational functional
                            areas efficiently.
                        </Text>
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    left: {
        flex: 1,
        maxWidth: 520,
    },
    heading: {
        ...Typography.h1,
        color: Colors.primaryDark,
        marginBottom: Spacing.sm,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        lineHeight: 26,
    },
});

export default ModulesHero;
