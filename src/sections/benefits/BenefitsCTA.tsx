import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";
import Button from "../../components/Button";

const BenefitsCTA: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80}>
            <Container>
                <View style={styles.banner}>
                    <Text style={styles.heading}>Ready to reclaim your time?</Text>
                    <Text style={styles.subtitle}>
                        Join companies that have automated their HR operations
                        with PeopleStack.
                    </Text>
                    <View style={styles.buttons}>
                        <Button
                            label="Start your free trial"
                            onPress={() => { }}
                            variant="outline"
                            size="lg"
                            style={{
                                borderColor: Colors.white,
                                backgroundColor: "transparent",
                            }}
                            textStyle={{ color: Colors.white }}
                        />
                        <Button
                            label="Talk to an expert"
                            onPress={() => { }}
                            variant="primary"
                            size="lg"
                            style={{
                                backgroundColor: Colors.primaryDark,
                            }}
                        />
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    banner: {
        backgroundColor: Colors.primary,
        borderRadius: 20,
        paddingVertical: 64,
        paddingHorizontal: 40,
        alignItems: "center",
    },
    heading: {
        ...Typography.h2,
        color: Colors.white,
        textAlign: "center",
        fontSize: 34,
        marginBottom: Spacing.base,
    },
    subtitle: {
        ...Typography.body,
        color: "rgba(255,255,255,0.85)",
        textAlign: "center",
        lineHeight: 24,
        marginBottom: Spacing.xl,
    },
    buttons: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
    },
});

export default BenefitsCTA;
