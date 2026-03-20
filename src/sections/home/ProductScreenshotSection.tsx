import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const ProductScreenshotSection: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80}>
            <Container>
                <Text style={styles.heading}>Platform Preview</Text>
                <Text style={styles.subtext}>
                    Take a glimpse into the Xpertance platform and its intuitive interfaces.
                </Text>

                <View style={styles.screenshotGrid}>
                    {[1, 2, 3].map((item) => (
                        <View key={item} style={styles.screenshotContainer}>
                            <View style={styles.placeholderBox}>
                                <Text style={styles.placeholderText}>
                                    Product Screenshot Coming Soon
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </Container>
        </Section>
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
    screenshotGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 24,
    },
    screenshotContainer: {
        flex: 1,
        minWidth: 320,
        maxWidth: 400,
        height: 240,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: Colors.section,
        borderWidth: 1,
        borderColor: Colors.muted,
    },
    placeholderBox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    placeholderText: {
        ...Typography.body,
        color: Colors.textMuted,
        textAlign: "center",
        fontWeight: "600",
        opacity: 0.6,
    },
});

export default ProductScreenshotSection;
