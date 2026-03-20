import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const UVP_ITEMS = [
    {
        icon: "🔗",
        title: "Unified HR + Payroll",
        desc: "Seamlessly combine human resources, automated payroll, and workforce management.",
    },
    {
        icon: "📂",
        title: "Centralized Data Platform",
        desc: "Keep all employee data safely stored in a single platform, easily accessible but highly secure.",
    },
    {
        icon: "📈",
        title: "Smart Reporting & Insights",
        desc: "Make informed decisions with real-time workforce trends, cost analysis, and actionable metrics.",
    },
    {
        icon: "🚀",
        title: "Scalable Architecture",
        desc: "Our platform grows as your company does, providing speed and reliability at any team size.",
    },
    {
        icon: "⚡",
        title: "Simplified Workflows",
        desc: "Eliminate repetitive tasks and approve HR requests confidently with built-in automation.",
    },
];

const UniqueValueSection: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80}>
            <Container>
                <Text style={styles.heading}>What Makes Xpertance Different</Text>
                <Text style={styles.subtext}>
                    Discover the unique value we bring to modern businesses compared to traditional solutions.
                </Text>

                <View style={styles.grid}>
                    {UVP_ITEMS.map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const FeatureCard: React.FC<{ icon: string; title: string; desc: string }> = ({
    icon,
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
            <View style={styles.iconCircle}>
                <Text style={styles.iconText}>{icon}</Text>
            </View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDesc}>{desc}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        marginBottom: 12,
        textAlign: "center",
    },
    subtext: {
        ...Typography.body,
        color: Colors.textMuted,
        marginBottom: 48,
        lineHeight: 26,
        textAlign: "center",
        maxWidth: 600,
        marginHorizontal: "auto",
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
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.muted,
        borderRadius: 12,
        padding: 28,
        gap: 12,
        // @ts-ignore
        transitionProperty: "box-shadow, border-color",
        transitionDuration: "0.25s",
    },
    cardHovered: {
        borderColor: Colors.primary,
        // @ts-ignore
        boxShadow: "0 4px 20px rgba(15,117,109,0.08)",
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.softPrimary,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 4,
    },
    iconText: {
        fontSize: 20,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 16,
    },
    cardDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        lineHeight: 22,
    },
});

export default UniqueValueSection;
