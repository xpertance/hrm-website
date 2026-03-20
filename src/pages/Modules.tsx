import React from "react";
import { View, StyleSheet } from "react-native";
import ModulesHero from "../sections/modules/ModulesHero";
import ModulesGrid from "../sections/modules/ModulesGrid";
import ModulesCTA from "../sections/modules/ModulesCTA";
import ModulesFooter from "../sections/modules/ModulesFooter";

const Modules: React.FC = () => {
    return (
        <View style={styles.page}>
            <ModulesHero />
            <ModulesGrid />
            <ModulesCTA />
            <ModulesFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

export default Modules;
