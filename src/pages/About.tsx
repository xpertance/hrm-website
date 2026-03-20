import React from "react";
import { View, StyleSheet } from "react-native";
import AboutHero from "../sections/about/AboutHero";
import UnifiedEcosystem from "../sections/about/UnifiedEcosystem";
import EvolutionTimeline from "../sections/about/EvolutionTimeline";
import BuiltForEveryStage from "../sections/about/BuiltForEveryStage";
import AboutCTA from "../sections/about/AboutCTA";

const About: React.FC = () => {
    return (
        <View style={styles.page}>
            <AboutHero />
            <UnifiedEcosystem />
            <EvolutionTimeline />
            <BuiltForEveryStage />
            <AboutCTA />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

export default About;
