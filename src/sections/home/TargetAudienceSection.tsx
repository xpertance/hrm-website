import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const AUDIENCE = [
    {
        title: "HR teams",
        desc: "Simplify day-to-day HR administrative tasks and focus on core initiatives.",
    },
    {
        title: "Growing startups",
        desc: "Set up professional HR and payroll workflows from day one.",
    },
    {
        title: "Mid-sized companies",
        desc: "Scale your workforce without adding unnecessary overhead costs.",
    },
    {
        title: "Enterprise HR departments",
        desc: "Manage complex organizational structures and compliance needs natively.",
    },
    {
        title: "Distributed teams",
        desc: "Support remote or multi-location workforces with a single platform.",
    },
];

const TargetAudienceSection: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={80}>
            <Container>
                <Text style={styles.heading}>Who is it for?</Text>
                <Text style={styles.subtext}>
                    Xpertance is the ideal solution for modern organizations striving for efficiency.
                </Text>

                <View style={styles.grid}>
                    {AUDIENCE.map((item, index) => (
                        <AudienceCard key={index} {...item} />
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const AudienceCard: React.FC<{ title: string; desc: string }> = ({
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
            <View style={styles.textContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDesc}>{desc}</Text>
            </View>
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
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        minWidth: 320,
        maxWidth: 400,
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.muted,
        borderRadius: 12,
        padding: 24,
        gap: 16,
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
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.softPrimary,
        alignItems: "center",
        justifyContent: "center",
    },
    iconText: {
        fontSize: 24,
    },
    textContent: {
        flex: 1,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 16,
        marginBottom: 4,
    },
    cardDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        lineHeight: 20,
    },
});

export default TargetAudienceSection;
