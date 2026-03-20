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
        <Section background={Colors.section} paddingVertical={80} id="contact">
            <Container>
                <View style={styles.banner}>
                    <Text style={styles.heading}>Ready to transform your HR?</Text>
                    <Text style={styles.subtext}>
                        Join 500+ companies that have automated their payroll and empowered their{"\n"}workforce with HRPayroll.
                    </Text>
                    <View style={styles.btns}>
                        <Button
                            label="Start your free trial"
                            variant="outline"
                            size="lg"
                            style={styles.outlineBtn}
                            textStyle={styles.outlineBtnText}
                        />
                        <Button
                            label="Contact sales"
                            variant="secondary"
                            size="lg"
                            onPress={() => scrollToSection("contact")}
                        />
                    </View>
                    <Text style={styles.disclaimer}>
                        No credit card required • 14-day free trial • Cancel anytime
                    </Text>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    banner: {
        backgroundColor: Colors.primary,
        borderRadius: 20,
        paddingVertical: 60,
        paddingHorizontal: 40,
        alignItems: "center",
    },
    heading: {
        ...Typography.h2,
        color: Colors.white,
        textAlign: "center",
        marginBottom: 12,
    },
    subtext: {
        ...Typography.body,
        color: "rgba(255,255,255,0.85)",
        textAlign: "center",
        marginBottom: 32,
        lineHeight: 26,
    },
    btns: {
        flexDirection: "row",
        gap: 16,
        marginBottom: 20,
    },
    outlineBtn: {
        backgroundColor: Colors.white,
        borderColor: Colors.white,
    },
    outlineBtnText: {
        color: Colors.primaryDark,
    },
    disclaimer: {
        ...Typography.bodySm,
        color: "rgba(255,255,255,0.6)",
        fontSize: 13,
    },
});

export default CTASection;
