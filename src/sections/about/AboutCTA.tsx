import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import Button from "../../components/Button";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const AboutCTA: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={80}>
            <Container>
                <View style={styles.banner}>
                    <Text style={styles.heading}>Join the HCM Revolution</Text>
                    <Text style={styles.subtext}>
                        Experience how a truly unified ecosystem can transform your{"\n"}workforce and your bottom line.
                    </Text>
                    <View style={styles.btns}>
                        <Button label="Book a Strategy Demo" variant="outline" size="lg" style={styles.outlineBtn} textStyle={styles.outlineBtnText} />
                        <Button label="View Case Studies" variant="secondary" size="lg" style={styles.secondaryBtn} />
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
        paddingVertical: 60,
        paddingHorizontal: 40,
        alignItems: "center",
    },
    heading: {
        ...Typography.h2,
        color: Colors.white,
        textAlign: "center",
        marginBottom: 12,
        fontStyle: "italic",
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
    },
    outlineBtn: {
        backgroundColor: Colors.white,
        borderColor: Colors.white,
    },
    outlineBtnText: {
        color: Colors.primaryDark,
    },
    secondaryBtn: {
        backgroundColor: Colors.primaryDark,
    },
});

export default AboutCTA;
