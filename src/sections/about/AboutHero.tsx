import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const AboutHero: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={80}>
            <Container>
                <View style={styles.center}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Our vision</Text>
                    </View>
                    <Text style={styles.heading}>
                        Beyond Payroll: The Complete{"\n"}
                        <Text style={styles.headingHighlight}>HCM Ecosystem</Text>
                    </Text>
                    <Text style={styles.paragraph}>
                        We're revolutionizing how startups and global enterprises manage their most valuable asset: people. Building a seamless environment where talent thrives and operations disappear.
                    </Text>
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
        backgroundColor: Colors.primary,
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 20,
        marginBottom: 24,
    },
    badgeText: {
        ...Typography.caption,
        color: Colors.white,
        fontSize: 11,
        letterSpacing: 1.5,
    },
    heading: {
        ...Typography.h1,
        color: Colors.primaryDark,
        textAlign: "center",
        fontSize: 44,
        lineHeight: 56,
        marginBottom: 20,
    },
    headingHighlight: {
        color: Colors.primary,
    },
    paragraph: {
        ...Typography.bodyLarge,
        color: Colors.textMuted,
        textAlign: "center",
        maxWidth: 600,
        lineHeight: 28,
    },
});

export default AboutHero;
