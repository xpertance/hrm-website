import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";
import Button from "../../components/Button";

const ContactDemoCTA: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={60}>
            <Container>
                <View style={styles.banner}>
                    {/* Icon */}
                    <View style={styles.iconCircle}>
                        <Text style={styles.iconText}></Text>
                    </View>

                    <Text style={styles.heading}>See PeopleStack in Action</Text>
                    <Text style={styles.subtitle}>
                        Get a personalized walkthrough of our platform. Discover how we
                        {"\n"}can help you save up to 20 hours a week on payroll processing.
                    </Text>

                    <View style={styles.buttons}>
                        <Button
                            label="Schedule a Demo"
                            onPress={() => { }}
                            variant="primary"
                            size="lg"
                        />
                        <Button
                            label="View Documentation"
                            onPress={() => { }}
                            variant="outline"
                            size="lg"
                        />
                    </View>

                    {/* Avatars + text */}
                    <View style={styles.avatarRow}>
                        <View style={styles.avatarStack}>
                            <View style={[styles.avatar, { backgroundColor: "#334155" }]} />
                            <View
                                style={[
                                    styles.avatar,
                                    { backgroundColor: "#94A3B8", marginLeft: -10 },
                                ]}
                            />
                            <View
                                style={[
                                    styles.avatar,
                                    { backgroundColor: "#64748B", marginLeft: -10 },
                                ]}
                            />
                        </View>
                        <Text style={styles.avatarText}>
                            Connect with our product specialists today
                        </Text>
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    banner: {
        backgroundColor: Colors.section,
        borderRadius: 20,
        paddingVertical: 60,
        paddingHorizontal: 40,
        alignItems: "center",
    },
    iconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: Spacing.xl,
    },
    iconText: {
        fontSize: 22,
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        textAlign: "center",
        marginBottom: Spacing.base,
        fontSize: 30,
        fontWeight: "700",
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
        marginBottom: Spacing["2xl"],
    },
    avatarRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    avatarStack: {
        flexDirection: "row",
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    avatarText: {
        ...Typography.caption,
        color: Colors.textSecondary,
        fontSize: 13,
    },
});

export default ContactDemoCTA;
