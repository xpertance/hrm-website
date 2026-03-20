import React from "react";
import { View, StyleSheet } from "react-native";
import HeroSection from "../sections/home/HeroSection";
import TrustedStrip from "../sections/home/TrustedStrip";
import ProductIntroSection from "../sections/home/ProductIntroSection";
import TargetAudienceSection from "../sections/home/TargetAudienceSection";
import WhyChooseSection from "../sections/home/WhyChooseSection";
import UniqueValueSection from "../sections/home/UniqueValueSection";
import SystemWorkflowSection from "../sections/home/SystemWorkflowSection";
import ProductScreenshotSection from "../sections/home/ProductScreenshotSection";
import ESSSection from "../sections/home/ESSSection";
import ErrorReductionSection from "../sections/home/ErrorReductionSection";
import CTASection from "../sections/home/CTASection";

const Home: React.FC = () => {
    return (
        <View style={styles.page}>
            <HeroSection />
            <TrustedStrip />
            <ProductIntroSection />
            <TargetAudienceSection />
            <WhyChooseSection />
            <UniqueValueSection />
            <SystemWorkflowSection />
            <ProductScreenshotSection />
            <ESSSection />
            <ErrorReductionSection />
            <CTASection />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

export default Home;
