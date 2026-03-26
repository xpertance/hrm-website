import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const INDUSTRIES = [
    "Tech Startups", "Consulting", "Manufacturing", "Services",
];

const TrustedStrip: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={40}>
            <Container>
                <Text style={styles.label}>
                    Industries We Serve
                </Text>
                <View style={styles.strip}>
                    {INDUSTRIES.map((name, i) => (
                        <View key={i} style={styles.industryBox}>
                            <Text style={styles.industryText}>{name}</Text>
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
        marginBottom: 32,
        fontSize: 14,
        letterSpacing: 1.5,
        fontWeight: "600",
    },
    strip: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
        flexWrap: "wrap",
    },
    industryBox: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: Colors.section,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    industryText: {
        ...Typography.body,
        fontSize: 14,
        color: Colors.primaryDark,
        fontWeight: "500",
    },
});

export default TrustedStrip;
