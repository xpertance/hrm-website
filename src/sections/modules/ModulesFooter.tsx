import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const ModulesFooter: React.FC = () => {
    return (
        <Section background={Colors.background} paddingVertical={24}>
            <Container>
                <View style={styles.row}>
                    <Text style={styles.copy}>
                        © 2024 HRPayroll Solutions. All modules configured for Enterprise
                        Tier.
                    </Text>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    row: {
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        paddingTop: 20,
    },
    copy: {
        ...Typography.caption,
        color: Colors.textMuted,
        textAlign: "center",
    },
});

export default ModulesFooter;
