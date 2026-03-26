import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import Button from "../../components/Button";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const CTASection: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <Section background={Colors.background} paddingVertical={80} id="cta">
            <Container>
                <View style={styles.banner}>
                    <Text style={styles.heading}>Ready to transform your HR?</Text>
                    <Text style={styles.subtext}>
                        Join companies that have automated their payroll and empowered their workforce with PeopleStack.
                    </Text>
                    <View style={styles.btns}>
                        <Button
                            label="Start Today"
                            variant="outline"
                            size="lg"
                            onPress={() => scrollToSection("contact")}
                            style={styles.outlineBtn}
                            textStyle={styles.outlineBtnText}
                        />
                        <Button
                            label="Contact Sales"
                            variant="secondary"
                            size="lg"
                            onPress={() => scrollToSection("contact")}
                        />
                    </View>
                    <Text style={styles.disclaimer}>
                        Expert support • Scalable platform • Reliable infrastructure
                    </Text>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    banner: {
        backgroundColor: Colors.primary,
        borderRadius: 24,
        paddingVertical: 70,
        paddingHorizontal: 40,
        alignItems: "center",
        shadowColor: Colors.primary,
        shadowOpacity: 0.2,
        shadowRadius: 30,
    },
    heading: {
        ...Typography.h2,
        color: Colors.white,
        textAlign: "center",
        fontSize: 36,
        marginBottom: 16,
    },
    subtext: {
        ...Typography.body,
        color: "rgba(255,255,255,0.9)",
        textAlign: "center",
        marginBottom: 40,
        lineHeight: 28,
        fontSize: 18,
        maxWidth: 600,
    },
    btns: {
        flexDirection: "row",
        gap: 16,
        marginBottom: 24,
    },
    outlineBtn: {
        backgroundColor: Colors.white,
        borderColor: Colors.white,
    },
    outlineBtnText: {
        color: Colors.primary,
        fontWeight: "700",
    },
    disclaimer: {
        ...Typography.bodySm,
        color: "rgba(255,255,255,0.7)",
        fontSize: 14,
        letterSpacing: 0.5,
    },
});

export default CTASection;
