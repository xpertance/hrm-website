import React from "react";
import { View, StyleSheet } from "react-native";
import BenefitsHero from "../sections/benefits/BenefitsHero";
import OutcomesSection from "../sections/benefits/OutcomesSection";
import ComparisonTable from "../sections/benefits/ComparisonTable";
import BenefitsCTA from "../sections/benefits/BenefitsCTA";

const Benefits: React.FC = () => {
    return (
        <View style={styles.page}>
            <BenefitsHero />
            <OutcomesSection />
            <ComparisonTable />
            <BenefitsCTA />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

export default Benefits;
