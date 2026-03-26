import React from "react";
import { View, StyleSheet } from "react-native";
import FeaturesHero from "../sections/features/FeaturesHero";
import InteractiveFeatureGrid from "../sections/features/InteractiveFeatureGrid";
import FeaturesCTA from "../sections/features/FeaturesCTA";
import FeaturesFooter from "../sections/features/FeaturesFooter";

const Features: React.FC = () => {
    return (
        <View style={styles.page}>
            <FeaturesHero />
            <InteractiveFeatureGrid />
            <FeaturesCTA />
            <FeaturesFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

export default Features;
