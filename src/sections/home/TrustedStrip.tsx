import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

const TRUSTED = [
    "COMPANY", "ENTERPRISE", "STARTUP", "TECHCORP", "FINSERV",
    "GLOBALHR", "PAYTECH",
];

const TrustedStrip: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={40}>
            <Container>
                <Text style={styles.label}>
                    DESIGNED FOR MODERN BUSINESSES
                </Text>
                <View style={styles.strip}>
                    {TRUSTED.map((name, i) => (
                        <View key={i} style={styles.companyPlaceholder}>
                            <View style={styles.placeholderBar} />
                        </View>
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    label: {
        ...Typography.caption,
        color: Colors.textMuted,
        textAlign: "center",
        marginBottom: 24,
        fontSize: 12,
        letterSpacing: 2,
    },
    strip: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        flexWrap: "wrap",
    },
    companyPlaceholder: {
        alignItems: "center",
    },
    placeholderBar: {
        width: 80,
        height: 12,
        borderRadius: 4,
        backgroundColor: Colors.muted,
    },
});

export default TrustedStrip;
