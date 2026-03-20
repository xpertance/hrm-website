import React from "react";
import { View, StyleSheet } from "react-native";
import ContactHero from "../sections/contact/ContactHero";
import ContactDemoCTA from "../sections/contact/ContactDemoCTA";

const Contact: React.FC = () => {
    return (
        <View style={styles.page}>
            <ContactHero />
            <ContactDemoCTA />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

export default Contact;
