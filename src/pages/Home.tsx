import React from "react";
import { View, StyleSheet } from "react-native";
import HeroSection from "../sections/home/HeroSection";
import ProductIntroSection from "../sections/home/ProductIntroSection";
import WhyChooseSection from "../sections/home/WhyChooseSection";
import UniqueValueSection from "../sections/home/UniqueValueSection";
import SystemWorkflowSection from "../sections/home/SystemWorkflowSection";
import ProductScreenshotSection from "../sections/home/ProductScreenshotSection";
import TrustedStrip from "../sections/home/TrustedStrip";
import ESSSection from "../sections/home/ESSSection";
import ErrorReductionSection from "../sections/home/ErrorReductionSection";
import CTASection from "../sections/home/CTASection";

const Home: React.FC = () => {
    return (
        <View style={styles.page}>
            <HeroSection />
            <ProductIntroSection />
            <WhyChooseSection />
            <UniqueValueSection />
            <SystemWorkflowSection />
            <ProductScreenshotSection />
            <TrustedStrip />
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
