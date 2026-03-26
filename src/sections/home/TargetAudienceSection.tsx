import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const AUDIENCE = [
    { title: "HR Teams", desc: "Empower your HR department with tools for core operations and employee engagement." },
    { title: "Startups", desc: "Scale your workforce quickly with an agile and easy-to-deploy setup." },
    { title: "Mid-sized Companies", desc: "Unify payroll and HR functions to streamline internal operations and growth." },
    { title: "Enterprises", desc: "Robust, scalable infrastructure for complex workforce and multi-role access management." },
    { title: "Distributed Teams", desc: "Manage remote and global employees with unified data and payroll processing." },
];

const TargetAudienceSection: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={80} id="audiences">
            <Container>
                <View style={styles.header}>
                    <Text style={styles.heading}>Who is PeopleStack for?</Text>
                    <Text style={styles.sub}>
                        PeopleStack is designed to support various organizational structures and sizes with flexible, scalable tools.
                    </Text>
                </View>

                <View style={styles.grid}>
                    {AUDIENCE.map((item, i) => (
                        <View key={i} style={styles.card}>
                            <View style={styles.iconCircle}>
                                <Text style={styles.iconText}>{item.title[0]}</Text>
                            </View>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardDesc}>{item.desc}</Text>
                        </View>
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginBottom: 50,
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        fontSize: 32,
        marginBottom: 16,
        textAlign: "center",
    },
    sub: {
        ...Typography.body,
        color: Colors.textMuted,
        textAlign: "center",
        maxWidth: 600,
        fontSize: 16,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 24,
    },
    card: {
        width: "calc(33.33% - 16px)" as any,
        minWidth: 280,
        backgroundColor: Colors.white,
        padding: 30,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.border,
        // @ts-ignore
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        shadowColor: "#000",
        shadowOpacity: 0.03,
        shadowRadius: 10,
    },
    iconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.softPrimary,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    iconText: {
        fontSize: 20,
        fontWeight: "700",
        color: Colors.primary,
    },
    cardTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        marginBottom: 12,
        fontSize: 18,
    },
    cardDesc: {
        ...Typography.body,
        color: Colors.textSecondary,
        fontSize: 14,
        lineHeight: 22,
    },
});

export default TargetAudienceSection;
