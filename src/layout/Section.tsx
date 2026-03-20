import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";

interface SectionProps {
    children: React.ReactNode;
    background?: string;
    paddingVertical?: number;
    style?: ViewStyle;
}

const Section: React.FC<SectionProps> = ({
    children,
    background = Colors.background,
    paddingVertical = Spacing.section,
    style,
}) => {
    return (
        <View
            style={[
                styles.section,
                { backgroundColor: background, paddingTop: paddingVertical, paddingBottom: paddingVertical },
                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        width: "100%",
    },
});

export default Section;
