import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const UVP_ITEMS = [
    {
        title: "Unified HR + Payroll + Workforce",
        desc: "Seamlessly combine human resources, automated payroll, and workforce management in one software.",
    },
    {
        title: "Centralized data platform",
        desc: "Keep all employee data safely stored in a single platform, easily accessible but highly secure.",
    },
    {
        title: "Smart insights",
        desc: "Make informed decisions with real-time workforce trends, cost analysis, and actionable metrics.",
    },
    {
        title: "Scalable architecture",
        desc: "Our platform grows as your company does, providing speed and reliability at any team size.",
    },
    {
        title: "Simplified workflows",
        desc: "Eliminate repetitive tasks and approve HR requests confidently with built-in automation.",
    },
];

const UniqueValueSection: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80} id="unique-value">
            <Container>
                <Text style={styles.heading}>What Makes PeopleStack Different</Text>
                <View style={styles.grid}>
                    {UVP_ITEMS.map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const FeatureCard: React.FC<{ title: string; desc: string }> = ({
    title,
    desc,
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Pressable
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={[styles.card, hovered && styles.cardHovered]}
        >
            <View style={styles.accentBar} />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDesc}>{desc}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        fontSize: 32,
        marginBottom: 50,
        textAlign: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 24,
    },
    card: {
        width: "calc(33.333% - 16px)" as any,
        minWidth: 280,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 16,
        padding: 30,
        // @ts-ignore
        transition: "all 0.3s ease",
        shadowColor: "#000",
        shadowOpacity: 0.02,
        shadowRadius: 10,
    },
    cardHovered: {
        borderColor: Colors.primary,
        transform: [{ scale: 1.02 }],
        shadowOpacity: 0.1,
        shadowRadius: 20,
    },
    accentBar: {
        width: 40,
        height: 4,
        backgroundColor: Colors.primary,
        borderRadius: 2,
        marginBottom: 20,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 12,
    },
    cardDesc: {
        ...Typography.body,
        color: Colors.textMuted,
        lineHeight: 24,
        fontSize: 15,
    },
});

export default UniqueValueSection;
