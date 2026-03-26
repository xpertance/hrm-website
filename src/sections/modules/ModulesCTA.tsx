import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";
import Button from "../../components/Button";

const ModulesCTA: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={0}>
            <Container>
                <View style={styles.banner}>
                    <Text style={styles.heading}>Need assistance with a module?</Text>
                    <Text style={styles.subtitle}>
                        Our specialized support team is available 24/7 to help you configure
                        and optimize your{"\n"}HR suite for maximum productivity.
                    </Text>
                    <View style={styles.buttons}>
                        <Button
                            label="Contact Support"
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
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    banner: {
        backgroundColor: Colors.section,
        borderRadius: 16,
        paddingVertical: 60,
        paddingHorizontal: 40,
        alignItems: "center",
        marginTop: Spacing["4xl"],
        marginBottom: Spacing["3xl"],
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        textAlign: "center",
        marginBottom: Spacing.base,
        fontSize: 30,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        textAlign: "center",
        maxWidth: 520,
        lineHeight: 24,
        marginBottom: Spacing.xl,
    },
    buttons: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
    },
});

export default ModulesCTA;
