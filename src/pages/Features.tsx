import React from "react";
import { View, StyleSheet } from "react-native";
import FeaturesHero from "../sections/features/FeaturesHero";
import {
    EmployeeManagement,
    PayrollCompliance,
    AttendanceLeave,
    ESSPortal,
    FinanceLedgers,
    PerformanceReviews,
} from "../sections/features/FeatureModules";
import FeaturesCTA from "../sections/features/FeaturesCTA";
import FeaturesFooter from "../sections/features/FeaturesFooter";

const Features: React.FC = () => {
    return (
        <View style={styles.page}>
            <FeaturesHero />
            <EmployeeManagement />
            <PayrollCompliance />
            <AttendanceLeave />
            <ESSPortal />
            <FinanceLedgers />
            <PerformanceReviews />
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
