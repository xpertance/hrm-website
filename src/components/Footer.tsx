import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";
import { Spacing } from "../theme/spacing";



const Footer: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.topRow}>
                    {/* Brand column */}
                    <View style={styles.brandCol}>
                        <Pressable onPress={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={styles.logoContainer}>
                            <View style={styles.logoIcon}>
                                <Text style={styles.logoIconText}>P</Text>
                            </View>
                            <Text style={styles.logoText}>PeopleStack</Text>
                        </Pressable>
                        <Text style={styles.brandDesc}>
                            Xpertance offers PeopleStack, a modern workforce & HR management platform designed to simplify employee operations and payroll processes.
                        </Text>
                        <Text style={styles.tagline}>
                            PeopleStack – Workforce & HR Management Platform
                        </Text>
                    </View>

                    {/* Link columns */}
                    <View style={styles.linkCol}>
                        <Text style={styles.linkTitle}>Product</Text>
                        <Pressable onPress={() => scrollToSection("modules")}><Text style={styles.linkText}>Modules</Text></Pressable>
                        <Pressable onPress={() => scrollToSection("features")}><Text style={styles.linkText}>Features</Text></Pressable>
                        <Pressable onPress={() => scrollToSection("why-choose")}><Text style={styles.linkText}>Benefits</Text></Pressable>
                        <Pressable onPress={() => scrollToSection("preview")}><Text style={styles.linkText}>Preview</Text></Pressable>
                    </View>

                    <View style={styles.linkCol}>
                        <Text style={styles.linkTitle}>Company</Text>
                        <Pressable onPress={() => scrollToSection("features")}><Text style={styles.linkText}>About Us</Text></Pressable>
                        <Pressable onPress={() => scrollToSection("contact")}><Text style={styles.linkText}>Contact</Text></Pressable>
                        <Pressable onPress={() => scrollToSection("contact")}><Text style={styles.linkText}>Book a demo</Text></Pressable>
                    </View>

                    <View style={styles.linkCol}>
                        <Text style={styles.linkTitle}>Legal</Text>
                        <Text style={styles.linkText}>Privacy Policy</Text>
                        <Text style={styles.linkText}>Terms of Service</Text>
                        <Text style={styles.linkText}>Security</Text>
                    </View>
                </View>

                {/* Bottom bar */}
                <View style={styles.bottomBar}>
                    <Text style={styles.copyright}>
                        © 2026 PeopleStack. All rights reserved.
                    </Text>
                    <View style={styles.bottomLinks}>
                        {["Privacy", "Terms", "Cookies"].map((item) => (
                            <Pressable key={item} onPress={() => { }}>
                                <Text style={styles.bottomLinkText}>{item}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.background,
        borderTopWidth: 1,
        borderTopColor: Colors.muted,
        paddingTop: 60,
        paddingBottom: 24,
    },
    container: {
        maxWidth: Spacing.containerMax,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingHorizontal: Spacing.containerPadding,
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 40,
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: Colors.muted,
    },
    brandCol: {
        flex: 1,
        minWidth: 260,
        maxWidth: 320,
        gap: 16,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    logoIcon: {
        width: 28,
        height: 28,
        borderRadius: 6,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    logoIconText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: "700",
    },
    logoText: {
        ...Typography.h5,
        color: Colors.primaryDark,
        fontSize: 16,
    },
    brandDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        lineHeight: 22,
    },
    tagline: {
        ...Typography.caption,
        color: Colors.primary,
        fontSize: 11,
        fontWeight: "600",
    },
    linkCol: {
        minWidth: 140,
        gap: 12,
    },
    linkTitle: {
        ...Typography.caption,
        color: Colors.primaryDark,
        fontWeight: "700",
        fontSize: 13,
        marginBottom: 4,
    },
    linkText: {
        ...Typography.bodySm,
        color: Colors.textMuted,
    },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 24,
        flexWrap: "wrap",
        gap: 16,
    },
    copyright: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        fontSize: 13,
    },
    bottomLinks: {
        flexDirection: "row",
        gap: 24,
    },
    bottomLinkText: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        fontSize: 13,
    },
});

export default Footer;
