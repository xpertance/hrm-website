import React from "react";
import { View, StyleSheet } from "react-native";
import ModulesHero from "../sections/modules/ModulesHero";
import ModulesGrid from "../sections/modules/ModulesGrid";

const Modules: React.FC = () => {
    return (
        <View style={styles.page}>
            <ModulesHero />
            <ModulesGrid />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

export default Modules;
