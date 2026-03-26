import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

const SERVICES = [
    "Core HR",
    "Time & Attendance",
    "Leave / Time-off",
    "Performance & Compensation",
    "LMS",
    "HR Help Desk",
];

const ContactHero: React.FC = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [organization, setOrganization] = useState("");
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    return (
        <Section background={Colors.background} paddingVertical={80} id="contact">
            <Container>
                <View style={styles.row}>
                    {/* Left side */}
                    <View style={styles.left}>
                        <Text style={styles.badge}>GET IN TOUCH</Text>
                        <Text style={styles.heading}>
                            Ready to modernize your workforce?
                        </Text>
                        <Text style={styles.subtitle}>
                            Reach out to our team of specialists for a personalized walkthrough or to discuss your specific HR needs.
                        </Text>

                        {/* Contact info */}
                        <View style={styles.contactList}>
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>Email us</Text>
                                <Text style={styles.contactValue}>xpertance932389@gmail.com</Text>
                            </View>
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>Call us</Text>
                                <Text style={styles.contactValue}>7620301874</Text>
                            </View>
                        </View>
                    </View>

                    {/* Right - Form */}
                    <View style={styles.formCard}>
                        <Text style={styles.formTitle}>Send an Inquiry</Text>

                        <View style={styles.fieldFull}>
                            <Text style={styles.fieldLabel}>Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="FullName"
                                placeholderTextColor={Colors.textMuted}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>

                        <View style={styles.fieldFull}>
                            <Text style={styles.fieldLabel}>Organization</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Company Name"
                                placeholderTextColor={Colors.textMuted}
                                value={organization}
                                onChangeText={setOrganization}
                            />
                        </View>

                        <View style={styles.fieldFull}>
                            <Text style={styles.fieldLabel}>Contact</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email or Phone"
                                placeholderTextColor={Colors.textMuted}
                                value={contact}
                                onChangeText={setContact}
                            />
                        </View>

                        <View style={styles.fieldFull}>
                            <Text style={styles.fieldLabel}>Services (Select all that apply)</Text>
                            <View style={styles.checkboxGrid}>
                                {SERVICES.map(service => (
                                    <Pressable
                                        key={service}
                                        onPress={() => toggleService(service)}
                                        style={[
                                            styles.checkboxItem,
                                            selectedServices.includes(service) && styles.checkboxActive
                                        ]}
                                    >
                                        <Text style={[
                                            styles.checkboxText,
                                            selectedServices.includes(service) && styles.checkboxTextActive
                                        ]}>
                                            {service}
                                        </Text>
                                    </Pressable>
                                ))}
                            </View>
                        </View>

                        <Pressable style={({ hovered }: any) => [
                            styles.submitBtn,
                            hovered && styles.submitBtnHover,
                        ]}>
                            <Text style={styles.submitText}>Send Message</Text>
                        </Pressable>
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        gap: 64,
        alignItems: "flex-start",
    },
    left: {
        flex: 1,
        maxWidth: 440,
    },
    badge: {
        fontSize: 12,
        fontWeight: "700",
        color: Colors.primary,
        letterSpacing: 2,
        marginBottom: 20,
    },
    heading: {
        ...Typography.h1,
        color: Colors.primaryDark,
        fontSize: 44,
        lineHeight: 56,
        marginBottom: 24,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        lineHeight: 28,
        fontSize: 18,
        marginBottom: 40,
    },
    contactList: {
        gap: 24,
    },
    contactItem: {
        paddingVertical: 4,
    },
    contactLabel: {
        fontSize: 13,
        fontWeight: "700",
        color: Colors.primaryDark,
        marginBottom: 4,
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    contactValue: {
        fontSize: 18,
        color: Colors.primary,
        fontWeight: "600",
    },
    formCard: {
        flex: 1,
        maxWidth: 560,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 40,
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 30,
    },
    formTitle: {
        ...Typography.h3,
        color: Colors.primaryDark,
        fontSize: 26,
        fontWeight: "700",
        marginBottom: 32,
    },
    fieldFull: {
        marginBottom: 24,
    },
    fieldLabel: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.primaryDark,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontSize: 15,
        color: Colors.primaryDark,
        backgroundColor: Colors.section,
        // @ts-ignore
        outlineStyle: "none",
    },
    checkboxGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    checkboxItem: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.white,
    },
    checkboxActive: {
        borderColor: Colors.primary,
        backgroundColor: Colors.softPrimary,
    },
    checkboxText: {
        fontSize: 13,
        color: Colors.textMuted,
    },
    checkboxTextActive: {
        color: Colors.primary,
        fontWeight: "600",
    },
    submitBtn: {
        backgroundColor: Colors.primary,
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 16,
        // @ts-ignore
        transition: "all 0.2s ease",
    },
    submitBtnHover: {
        backgroundColor: Colors.primaryDark,
        transform: [{ translateY: -2 }],
    },
    submitText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "700",
    },
});

export default ContactHero;
