import React from "react";
import { View, StyleSheet } from "react-native";
import BenefitsHero from "../sections/benefits/BenefitsHero";
import OutcomesSection from "../sections/benefits/OutcomesSection";
import ComparisonTable from "../sections/benefits/ComparisonTable";

const Benefits: React.FC = () => {
    return (
        <View style={styles.page}>
            <BenefitsHero />
            <OutcomesSection />
            <ComparisonTable />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

export default Benefits;
