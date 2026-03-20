import React from "react";
import { View, StyleSheet } from "react-native";
import { Spacing } from "../theme/spacing";

interface ContainerProps {
    children: React.ReactNode;
    noPadding?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, noPadding }) => {
    return (
        <View style={[styles.container, noPadding && styles.noPadding]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: Spacing.containerMax,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: Spacing.containerPadding,
        paddingRight: Spacing.containerPadding,
    },
    noPadding: {
        paddingLeft: 0,
        paddingRight: 0,
    },
});

export default Container;
