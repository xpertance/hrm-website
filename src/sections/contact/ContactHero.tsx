import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

const EMPLOYEE_RANGES = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "500+",
];

const ContactHero: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [employeeCount, setEmployeeCount] = useState("");
    const [message, setMessage] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Section background={Colors.background} paddingVertical={60}>
            <Container>
                <View style={styles.row}>
                    {/* Left side */}
                    <View style={styles.left}>
                        <Text style={styles.badge}>CONTACT US</Text>

                        <Text style={styles.heading}>
                            Expert Support{"\n"}for Your{"\n"}Growing Team
                        </Text>

                        <Text style={styles.subtitle}>
                            Let's streamline your HR. Reach out to our team of specialists or
                            schedule a personalized walkthrough of our platform.
                        </Text>

                        {/* Contact cards */}
                        <View style={styles.contactCards}>
                            <View style={styles.contactCard}>
                                <Text style={styles.contactIcon}>✉</Text>
                                <View>
                                    <Text style={styles.contactLabel}>Email Us</Text>
                                    <Text style={styles.contactValue}>sales@hrpayroll.com</Text>
                                </View>
                            </View>
                            <View style={styles.contactCard}>
                                <Text style={styles.contactIcon}>📞</Text>
                                <View>
                                    <Text style={styles.contactLabel}>Call Us</Text>
                                    <Text style={styles.contactValue}>+1 (555) 000-HR24</Text>
                                </View>
                            </View>
                        </View>

                        {/* Trusted strip */}
                        <View style={styles.trustedStrip}>
                            <Text style={styles.trustedLabel}>
                                TRUSTED BY 5,000+ HR PROFESSIONALS
                            </Text>
                            <View style={styles.logoPlaceholders}>
                                <View style={styles.lgPlaceholder}>
                                    <Text style={styles.lgText}>LOGOTYPE</Text>
                                </View>
                                <View style={styles.lgPlaceholder}>
                                    <Text style={styles.lgText}>ENTERPRISE</Text>
                                </View>
                                <View style={styles.lgPlaceholder}>
                                    <Text style={styles.lgText}>GLOBAL CO</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Right - Form */}
                    <View style={styles.formCard}>
                        <Text style={styles.formTitle}>Send us a message</Text>

                        <View style={styles.formRow}>
                            <View style={styles.fieldHalf}>
                                <Text style={styles.fieldLabel}>Name</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Jane Doe"
                                    placeholderTextColor={Colors.textMuted}
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>
                            <View style={styles.fieldHalf}>
                                <Text style={styles.fieldLabel}>Email Address</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="jane@company.com"
                                    placeholderTextColor={Colors.textMuted}
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>
                        </View>

                        <View style={styles.formRow}>
                            <View style={styles.fieldHalf}>
                                <Text style={styles.fieldLabel}>Company</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Acme Inc."
                                    placeholderTextColor={Colors.textMuted}
                                    value={company}
                                    onChangeText={setCompany}
                                />
                            </View>
                            <View style={styles.fieldHalf}>
                                <Text style={styles.fieldLabel}>Employee Count</Text>
                                <Pressable
                                    style={styles.selectWrap}
                                    onPress={() => setShowDropdown(!showDropdown)}
                                >
                                    <Text
                                        style={[
                                            styles.selectText,
                                            !employeeCount && { color: Colors.textMuted },
                                        ]}
                                    >
                                        {employeeCount || "Select range"}
                                    </Text>
                                    <Text style={styles.selectArrow}>▾</Text>
                                </Pressable>
                                {showDropdown && (
                                    <View style={styles.dropdown}>
                                        {EMPLOYEE_RANGES.map((range) => (
                                            <Pressable
                                                key={range}
                                                style={styles.dropdownItem}
                                                onPress={() => {
                                                    setEmployeeCount(range);
                                                    setShowDropdown(false);
                                                }}
                                            >
                                                <Text style={styles.dropdownText}>{range}</Text>
                                            </Pressable>
                                        ))}
                                    </View>
                                )}
                            </View>
                        </View>

                        <View style={styles.fieldFull}>
                            <Text style={styles.fieldLabel}>Message</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="How can we help you?"
                                placeholderTextColor={Colors.textMuted}
                                multiline
                                numberOfLines={5}
                                value={message}
                                onChangeText={setMessage}
                            />
                        </View>

                        <Pressable
                            style={({ hovered }: any) => [
                                styles.submitBtn,
                                hovered && styles.submitBtnHover,
                            ]}
                        >
                            <Text style={styles.submitText}>Send Message ▸</Text>
                        </Pressable>

                        <Text style={styles.disclaimer}>
                            By submitting this form, you agree to our{" "}
                            <Text style={styles.link}>Privacy Policy</Text> and{" "}
                            <Text style={styles.link}>Terms of Service</Text>.
                        </Text>
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        gap: 60,
        alignItems: "flex-start",
    },
    left: {
        flex: 1,
        maxWidth: 460,
    },
    badge: {
        fontSize: 13,
        fontWeight: "600",
        color: Colors.primary,
        letterSpacing: 1,
        marginBottom: Spacing.lg,
    },
    heading: {
        ...Typography.h1,
        color: Colors.primaryDark,
        fontSize: 42,
        lineHeight: 52,
        marginBottom: Spacing.lg,
    },
    subtitle: {
        ...Typography.body,
        color: Colors.textSecondary,
        lineHeight: 26,
        marginBottom: Spacing["2xl"],
        maxWidth: 400,
    },
    contactCards: {
        flexDirection: "row",
        gap: 16,
        marginBottom: Spacing["2xl"],
    },
    contactCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        backgroundColor: Colors.section,
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    contactIcon: {
        fontSize: 20,
        color: Colors.primary,
    },
    contactLabel: {
        ...Typography.body,
        fontWeight: "600",
        color: Colors.primaryDark,
        fontSize: 14,
        marginBottom: 2,
    },
    contactValue: {
        ...Typography.caption,
        color: Colors.textSecondary,
        fontSize: 13,
    },
    trustedStrip: {
        marginTop: 8,
    },
    trustedLabel: {
        fontSize: 11,
        fontWeight: "600",
        color: Colors.primary,
        letterSpacing: 1,
        marginBottom: 12,
    },
    logoPlaceholders: {
        flexDirection: "row",
        gap: 12,
    },
    lgPlaceholder: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: Colors.section,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    lgText: {
        fontSize: 11,
        fontWeight: "600",
        color: Colors.textMuted,
        letterSpacing: 0.5,
    },
    formCard: {
        flex: 1,
        maxWidth: 520,
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 36,
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.04,
        shadowRadius: 24,
    },
    formTitle: {
        ...Typography.h3,
        color: Colors.primaryDark,
        fontSize: 22,
        marginBottom: Spacing.xl,
    },
    formRow: {
        flexDirection: "row",
        gap: 16,
        marginBottom: 20,
    },
    fieldHalf: {
        flex: 1,
    },
    fieldFull: {
        marginBottom: 20,
    },
    fieldLabel: {
        ...Typography.caption,
        color: Colors.textSecondary,
        fontWeight: "500",
        fontSize: 13,
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 14,
        fontSize: 14,
        color: Colors.primaryDark,
        backgroundColor: Colors.white,
        fontFamily: "Inter, sans-serif",
        outlineStyle: "none" as any,
    },
    textArea: {
        minHeight: 100,
        textAlignVertical: "top" as any,
    },
    selectWrap: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.white,
    },
    selectText: {
        fontSize: 14,
        color: Colors.primaryDark,
    },
    selectArrow: {
        fontSize: 14,
        color: Colors.textMuted,
    },
    dropdown: {
        position: "absolute" as any,
        top: "100%",
        left: 0,
        right: 0,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        marginTop: 4,
        zIndex: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 14,
    },
    dropdownText: {
        fontSize: 14,
        color: Colors.primaryDark,
    },
    submitBtn: {
        backgroundColor: Colors.primaryDark,
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 16,
        transition: "all 0.15s ease" as any,
    },
    submitBtnHover: {
        backgroundColor: "#1e293b",
    },
    submitText: {
        ...Typography.button,
        color: Colors.white,
        fontSize: 15,
    },
    disclaimer: {
        ...Typography.caption,
        color: Colors.textMuted,
        textAlign: "center",
        fontSize: 12,
        lineHeight: 18,
    },
    link: {
        color: Colors.primary,
        textDecorationLine: "underline",
    },
});

export default ContactHero;
