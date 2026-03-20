import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";
import { useNavigate } from "react-router-dom";

interface FooterLink {
    label: string;
    path: string;
}

const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
    {
        title: "Platform",
        links: [
            { label: "Employee management", path: "/features" },
            { label: "Payroll", path: "/features" },
            { label: "Time & attendance", path: "/features" },
            { label: "ESS portal", path: "/features" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About us", path: "/about" },
            { label: "Careers", path: "/" },
            { label: "Blog", path: "/" },
            { label: "Contact", path: "/contact" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Help center", path: "/" },
            { label: "Compliance", path: "/" },
        ],
    },
    {
        title: "Connect",
        links: [
            { label: "Security", path: "/" },
            { label: "Login", path: "/" },
        ],
    },
];

const FeaturesFooter: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Section background={Colors.primaryDark} paddingVertical={60}>
            <Container>
                <View style={styles.footerTop}>
                    {/* Brand */}
                    <View style={styles.brand}>
                        <View style={styles.logoRow}>
                            <View style={styles.logoIcon}>
                                <Text style={styles.logoIconText}>X</Text>
                            </View>
                            <Text style={styles.logoText}>Xpertance</Text>
                        </View>
                        <Text style={styles.brandDesc}>
                            The all-in-one platform for modern HR, Payroll, and Workforce
                            management. Built for teams that value efficiency and security.
                        </Text>
                    </View>

                    {/* Columns */}
                    {FOOTER_COLUMNS.map((col) => (
                        <View key={col.title} style={styles.column}>
                            <Text style={styles.colTitle}>{col.title}</Text>
                            {col.links.map((link) => (
                                <Pressable key={link.label} onPress={() => navigate(link.path)}>
                                    <Text style={styles.colLink}>{link.label}</Text>
                                </Pressable>
                            ))}
                        </View>
                    ))}
                </View>

                {/* Bottom bar */}
                <View style={styles.bottomBar}>
                    <Text style={styles.copyright}>
                        © 2024 Xpertance SaaS. All rights reserved.
                    </Text>
                    <View style={styles.legalLinks}>
                        <Pressable>
                            <Text style={styles.legalLink}>Privacy Policy</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.legalLink}>Terms of Service</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.legalLink}>Cookie Policy</Text>
                        </Pressable>
                    </View>
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    footerTop: {
        flexDirection: "row",
        gap: 40,
        marginBottom: 40,
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.1)",
    },
    brand: {
        flex: 1.8,
        maxWidth: 280,
    },
    logoRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 12,
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
        color: Colors.white,
        fontSize: 16,
    },
    brandDesc: {
        ...Typography.caption,
        color: "rgba(255,255,255,0.5)",
        fontSize: 13,
        lineHeight: 20,
    },
    column: {
        flex: 1,
    },
    colTitle: {
        fontSize: 12,
        fontWeight: "700",
        color: "rgba(255,255,255,0.4)",
        letterSpacing: 1,
        marginBottom: 16,
    },
    colLink: {
        ...Typography.caption,
        color: "rgba(255,255,255,0.7)",
        fontSize: 14,
        marginBottom: 10,
    },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    copyright: {
        ...Typography.caption,
        color: "rgba(255,255,255,0.35)",
        fontSize: 13,
    },
    legalLinks: {
        flexDirection: "row",
        gap: 24,
    },
    legalLink: {
        ...Typography.caption,
        color: "rgba(255,255,255,0.5)",
        fontSize: 13,
    },
});

export default FeaturesFooter;
