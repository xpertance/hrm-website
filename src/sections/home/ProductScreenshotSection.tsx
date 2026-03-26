import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const ProductScreenshotSection: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={80} id="preview">
            <Container>
                <Text style={styles.heading}>Platform Preview</Text>
                <View style={styles.grid}>
                    <View style={styles.screenshotPlaceholder}>
                        <Text style={styles.placeholderText}>Product Screenshot Coming Soon</Text>
                    </View>
                    <View style={styles.screenshotPlaceholder}>
                        <Text style={styles.placeholderText}>Product Screenshot Coming Soon</Text>
                    </View>
                    <View style={styles.screenshotPlaceholder}>
                        <Text style={styles.placeholderText}>Product Screenshot Coming Soon</Text>
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        fontSize: 32,
        marginBottom: 40,
        textAlign: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "center",
    },
    screenshotPlaceholder: {
        flex: 1,
        minWidth: 300,
        height: 200,
        backgroundColor: Colors.section,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: Colors.border,
        borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    placeholderText: {
        ...Typography.body,
        color: Colors.textMuted,
        textAlign: "center",
        fontStyle: "italic",
    },
});

export default ProductScreenshotSection;
