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
                    <View style={styles.right}>
                        <Pressable
                            style={({ hovered }: any) => [
                                styles.addBtn,
                                hovered && styles.addBtnHover,
                            ]}
                        >
                            <Text style={styles.addBtnIcon}>+</Text>
                            <Text style={styles.addBtnText}>Add Module</Text>
                        </Pressable>
                        <Pressable style={styles.filterBtn}>
                            <Text style={styles.filterIcon}>☰</Text>
                        </Pressable>
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
    right: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    addBtn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: Colors.primaryDark,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    addBtnHover: {
        backgroundColor: "#1e293b",
    },
    addBtnIcon: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "500",
    },
    addBtnText: {
        ...Typography.button,
        color: Colors.white,
        fontSize: 14,
    },
    filterBtn: {
        width: 40,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.border,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white,
    },
    filterIcon: {
        fontSize: 16,
        color: Colors.textSecondary,
    },
});

export default ModulesHero;
