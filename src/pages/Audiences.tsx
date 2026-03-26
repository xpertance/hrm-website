import React from "react";
import { View, StyleSheet } from "react-native";
import TargetAudienceSection from "../sections/home/TargetAudienceSection";

const Audiences: React.FC = () => {
    return (
        <View style={styles.page}>
            <TargetAudienceSection />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

export default Audiences;
