import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

/* ──────────────────────────────────────────────
   Shared types & helpers
   ────────────────────────────────────────────── */

interface BulletItem {
    icon: string;
    title: string;
    desc: string;
}

interface TagItem {
    label: string;
}

interface FeatureIconPair {
    icon: string;
    title: string;
    desc: string;
}

/* ──────────────────────────────────────────────
   Module 01 — Employee Management & Digital Records
   ────────────────────────────────────────────── */

const MODULE_01_BULLETS: BulletItem[] = [
    {
        icon: "◉",
        title: "Interactive Org Charts",
        desc: "Visualize company hierarchy and reporting lines in real-time.",
    },
    {
        icon: "◉",
        title: "Document Management",
        desc: "Store contracts, IDs, and certifications with automated expiry alerts.",
    },
    {
        icon: "◉",
        title: "Multi-Entity Mapping",
        desc: "Organize employees by functional departments across global locations.",
    },
];

export const EmployeeManagement: React.FC = () => (
    <Section background={Colors.background} paddingVertical={80}>
        <Container>
            <View style={styles.row}>
                {/* Left — text */}
                <View style={styles.half}>
                    <View style={styles.moduleBadge}>
                        <Text style={styles.moduleBadgeIcon}>🏢</Text>
                        <Text style={styles.moduleBadgeText}>MODULE 01</Text>
                    </View>
                    <Text style={styles.moduleTitle}>
                        Employee Management & Digital Records
                    </Text>
                    <Text style={styles.moduleDesc}>
                        Centralize all your staff data in one secure location. Say goodbye
                        to messy spreadsheets and paper files with our SOC2-compliant cloud
                        storage.
                    </Text>
                    {MODULE_01_BULLETS.map((b) => (
                        <View key={b.title} style={styles.bulletRow}>
                            <Text style={styles.bulletIcon}>{b.icon}</Text>
                            <View style={styles.bulletText}>
                                <Text style={styles.bulletTitle}>{b.title}</Text>
                                <Text style={styles.bulletDesc}>{b.desc}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Right — mock */}
                <View style={styles.half}>
                    <View style={styles.dashMock}>
                        <View style={styles.dashTop}>
                            <View style={styles.dotRow}>
                                <View style={[styles.dot, { backgroundColor: "#EF4444" }]} />
                                <View style={[styles.dot, { backgroundColor: "#F59E0B" }]} />
                                <View style={[styles.dot, { backgroundColor: "#10B981" }]} />
                            </View>
                        </View>
                        <View style={styles.dashBody}>
                            <View style={styles.dashSidebar}>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <View
                                        key={i}
                                        style={[
                                            styles.sidebarItem,
                                            i === 1 && { backgroundColor: "rgba(15,117,109,0.15)" },
                                        ]}
                                    />
                                ))}
                            </View>
                            <View style={styles.dashContent}>
                                <View style={[styles.dashBlock, { height: 20, width: "60%", marginBottom: 16 }]} />
                                <View style={styles.dashGrid}>
                                    <View style={[styles.dashCard, { flex: 1 }]} />
                                    <View style={[styles.dashCard, { flex: 1 }]} />
                                    <View style={[styles.dashCard, { flex: 1 }]} />
                                </View>
                                <View style={[styles.dashBlock, { height: 80, marginTop: 16 }]} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    </Section>
);

/* ──────────────────────────────────────────────
   Module 02 — Automated Payroll & Compliance
   ────────────────────────────────────────────── */

const MODULE_02_FEATURES: FeatureIconPair[] = [
    {
        icon: "📄",
        title: "1-Click Payslips",
        desc: "Bulk generate and email secure payslips to your entire workforce.",
    },
    {
        icon: "⚙️",
        title: "Auto-Deductions",
        desc: "Automated calculations for tax, insurance, and retirement funds.",
    },
];

export const PayrollCompliance: React.FC = () => (
    <Section background={Colors.section} paddingVertical={80}>
        <Container>
            <View style={styles.rowReverse}>
                {/* Left — image mock */}
                <View style={styles.half}>
                    <View style={styles.imagePlaceholder}>
                        <View style={styles.imgInner}>
                            <Text style={styles.imgEmoji}>📊</Text>
                            <Text style={styles.imgLabel}>Payroll Dashboard</Text>
                        </View>
                    </View>
                </View>

                {/* Right — text */}
                <View style={styles.half}>
                    <View style={styles.moduleBadge}>
                        <Text style={styles.moduleBadgeIcon}>💰</Text>
                        <Text style={styles.moduleBadgeText}>MODULE 02</Text>
                    </View>
                    <Text style={styles.moduleTitle}>
                        Automated Payroll &{"\n"}Compliance
                    </Text>
                    <Text style={styles.moduleDesc}>
                        Experience stress-free monthly cycles. Our engine handles complex
                        salary components and statutory deductions automatically based on
                        your local regulations.
                    </Text>
                    <View style={styles.featurePairRow}>
                        {MODULE_02_FEATURES.map((f) => (
                            <View key={f.title} style={styles.featurePairCard}>
                                <Text style={styles.featurePairIcon}>{f.icon}</Text>
                                <Text style={styles.featurePairTitle}>{f.title}</Text>
                                <Text style={styles.featurePairDesc}>{f.desc}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </Container>
    </Section>
);

/* ──────────────────────────────────────────────
   Module 03 — Attendance & Smart Leave Workflows
   ────────────────────────────────────────────── */

const MODULE_03_BULLETS: BulletItem[] = [
    {
        icon: "◉",
        title: "Biometric & GPS Logs",
        desc: "Integrate with hardware or use mobile geo-fencing for field staff.",
    },
    {
        icon: "◉",
        title: "Flexible Leave Policies",
        desc: "Custom carry forward, accrual rules, and sandwich leave logic.",
    },
];

export const AttendanceLeave: React.FC = () => (
    <Section background={Colors.background} paddingVertical={80}>
        <Container>
            <View style={styles.row}>
                {/* Left — text */}
                <View style={styles.half}>
                    <View style={styles.moduleBadge}>
                        <Text style={styles.moduleBadgeIcon}>⏰</Text>
                        <Text style={styles.moduleBadgeText}>MODULE 03</Text>
                    </View>
                    <Text style={styles.moduleTitle}>
                        Attendance & Smart Leave{"\n"}Workflows
                    </Text>
                    <Text style={styles.moduleDesc}>
                        Track time without the headaches. From daily logs to multi-level
                        leave approval workflows, stay in control of your workforce
                        availability.
                    </Text>
                    {MODULE_03_BULLETS.map((b) => (
                        <View key={b.title} style={styles.bulletRow}>
                            <Text style={styles.bulletIcon}>{b.icon}</Text>
                            <View style={styles.bulletText}>
                                <Text style={styles.bulletTitle}>{b.title}</Text>
                                <Text style={styles.bulletDesc}>{b.desc}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Right — mock */}
                <View style={styles.half}>
                    <View style={styles.phoneMock}>
                        <View style={styles.phoneNotch} />
                        <View style={styles.phoneBody}>
                            <View style={[styles.dashBlock, { height: 16, width: "50%", marginBottom: 12 }]} />
                            <View style={[styles.dashBlock, { height: 40, marginBottom: 8, backgroundColor: "rgba(15,117,109,0.1)" }]} />
                            <View style={[styles.dashBlock, { height: 40, marginBottom: 8 }]} />
                            <View style={[styles.dashBlock, { height: 40, marginBottom: 8 }]} />
                            <View style={[styles.dashBlock, { height: 36, backgroundColor: Colors.primary, borderRadius: 8 }]} />
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    </Section>
);

/* ──────────────────────────────────────────────
   Module 04 — Employee Self-Service Portal
   ────────────────────────────────────────────── */

const ESS_TAGS: TagItem[] = [
    { label: "Download Payslips" },
    { label: "Apply for Leave" },
    { label: "Track Attendance" },
    { label: "Update Profile" },
    { label: "View Company News" },
];

export const ESSPortal: React.FC = () => (
    <Section background={Colors.section} paddingVertical={80}>
        <Container>
            <View style={styles.rowReverse}>
                {/* Left — mobile mock */}
                <View style={styles.half}>
                    <View style={styles.imagePlaceholder}>
                        <View style={styles.imgInner}>
                            <Text style={styles.imgEmoji}>📱</Text>
                            <Text style={styles.imgLabel}>ESS Mobile App</Text>
                        </View>
                    </View>
                </View>

                {/* Right — text */}
                <View style={styles.half}>
                    <View style={styles.moduleBadge}>
                        <Text style={styles.moduleBadgeIcon}>📱</Text>
                        <Text style={styles.moduleBadgeText}>MODULE 04</Text>
                    </View>
                    <Text style={styles.moduleTitle}>
                        Employee Self-Service (ESS){"\n"}Portal
                    </Text>
                    <Text style={styles.moduleDesc}>
                        Empower your employees to manage their own records. Reduce HR's
                        administrative burden with a modern, mobile-friendly interface.
                    </Text>
                    <View style={styles.tagsWrap}>
                        {ESS_TAGS.map((t) => (
                            <View key={t.label} style={styles.tag}>
                                <Text style={styles.tagText}>{t.label}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </Container>
    </Section>
);

/* ──────────────────────────────────────────────
   Module 05 — Finance, Expenses & Ledgers
   ────────────────────────────────────────────── */

const MODULE_05_BULLETS: BulletItem[] = [
    {
        icon: "◉",
        title: "Simplified expense claim & reimbursement workflow",
        desc: "",
    },
    {
        icon: "◉",
        title: "Automated journal entries for payroll expenses",
        desc: "",
    },
    {
        icon: "◉",
        title: "Detailed billing reports and cost-center analysis",
        desc: "",
    },
];

export const FinanceLedgers: React.FC = () => (
    <Section background={Colors.background} paddingVertical={80}>
        <Container>
            <View style={styles.row}>
                {/* Left — text */}
                <View style={styles.half}>
                    <View style={styles.moduleBadge}>
                        <Text style={styles.moduleBadgeIcon}>💼</Text>
                        <Text style={styles.moduleBadgeText}>MODULE 05</Text>
                    </View>
                    <Text style={styles.moduleTitle}>
                        Finance, Expenses & Ledgers
                    </Text>
                    <Text style={styles.moduleDesc}>
                        Bridge the gap between HR and Finance. Manage operational expenses
                        and ensure every payroll penny is accounted for in your general
                        ledger.
                    </Text>
                    {MODULE_05_BULLETS.map((b) => (
                        <View key={b.title} style={styles.bulletRowSimple}>
                            <Text style={styles.bulletIcon}>{b.icon}</Text>
                            <Text style={styles.bulletSimpleText}>{b.title}</Text>
                        </View>
                    ))}
                </View>

                {/* Right — mock */}
                <View style={styles.half}>
                    <View style={styles.imagePlaceholder}>
                        <View style={styles.imgInner}>
                            <Text style={styles.imgEmoji}>📈</Text>
                            <Text style={styles.imgLabel}>Finance Dashboard</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    </Section>
);

/* ──────────────────────────────────────────────
   Module 06 — Performance & Talent Reviews
   ────────────────────────────────────────────── */

const MODULE_06_FEATURES: FeatureIconPair[] = [
    {
        icon: "🎯",
        title: "Goal Setting & OKRs",
        desc: "Align individual contributions with company-wide strategic objectives.",
    },
    {
        icon: "🔄",
        title: "360-Degree Reviews",
        desc: "Collect balanced feedback from peers, managers, and subordinates.",
    },
];

export const PerformanceReviews: React.FC = () => (
    <Section background={Colors.section} paddingVertical={80}>
        <Container>
            <View style={styles.rowReverse}>
                {/* Left — image */}
                <View style={styles.half}>
                    <View style={styles.imagePlaceholder}>
                        <View style={styles.imgInner}>
                            <Text style={styles.imgEmoji}>🤝</Text>
                            <Text style={styles.imgLabel}>Team Reviews</Text>
                        </View>
                    </View>
                </View>

                {/* Right — text */}
                <View style={styles.half}>
                    <View style={styles.moduleBadge}>
                        <Text style={styles.moduleBadgeIcon}>⭐</Text>
                        <Text style={styles.moduleBadgeText}>MODULE 06</Text>
                    </View>
                    <Text style={styles.moduleTitle}>
                        Performance & Talent Reviews
                    </Text>
                    <Text style={styles.moduleDesc}>
                        Foster a culture of growth. Move beyond once-a-year appraisals with
                        continuous feedback, KPI tracking, and professional development
                        plans.
                    </Text>
                    {MODULE_06_FEATURES.map((f) => (
                        <View key={f.title} style={styles.detailFeature}>
                            <View style={styles.detailIconWrap}>
                                <Text style={styles.detailIcon}>{f.icon}</Text>
                            </View>
                            <View style={styles.detailContent}>
                                <Text style={styles.detailTitle}>{f.title}</Text>
                                <Text style={styles.detailDesc}>{f.desc}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </Container>
    </Section>
);

/* ──────────────────────────────────────────────
   Styles
   ────────────────────────────────────────────── */

const styles = StyleSheet.create({
    /* Layout */
    row: {
        flexDirection: "row",
        gap: 60,
        alignItems: "center",
    },
    rowReverse: {
        flexDirection: "row",
        gap: 60,
        alignItems: "center",
    },
    half: {
        flex: 1,
    },

    /* Module badge */
    moduleBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: Spacing.lg,
    },
    moduleBadgeIcon: {
        fontSize: 16,
    },
    moduleBadgeText: {
        fontSize: 12,
        fontWeight: "700",
        color: Colors.primary,
        letterSpacing: 1.5,
    },

    /* Module text */
    moduleTitle: {
        ...Typography.h2,
        color: Colors.primaryDark,
        fontSize: 30,
        lineHeight: 40,
        marginBottom: Spacing.base,
        fontWeight: "700",
    },
    moduleDesc: {
        ...Typography.body,
        color: Colors.textSecondary,
        lineHeight: 26,
        marginBottom: Spacing.xl,
        maxWidth: 460,
    },

    /* Bullet list */
    bulletRow: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 16,
        alignItems: "flex-start",
    },
    bulletIcon: {
        color: Colors.primary,
        fontSize: 14,
        marginTop: 2,
    },
    bulletText: {
        flex: 1,
    },
    bulletTitle: {
        ...Typography.body,
        fontWeight: "600",
        color: Colors.primaryDark,
        fontSize: 15,
        marginBottom: 2,
    },
    bulletDesc: {
        ...Typography.caption,
        color: Colors.textSecondary,
        fontSize: 13,
        lineHeight: 20,
    },
    bulletRowSimple: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 12,
        alignItems: "center",
    },
    bulletSimpleText: {
        ...Typography.body,
        color: Colors.textSecondary,
        fontSize: 14,
    },

    /* Feature pair cards (Module 02) */
    featurePairRow: {
        flexDirection: "row",
        gap: 16,
    },
    featurePairCard: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    featurePairIcon: {
        fontSize: 24,
        marginBottom: 12,
    },
    featurePairTitle: {
        ...Typography.body,
        fontWeight: "600",
        color: Colors.primaryDark,
        fontSize: 14,
        marginBottom: 6,
    },
    featurePairDesc: {
        ...Typography.caption,
        color: Colors.textSecondary,
        fontSize: 13,
        lineHeight: 19,
    },

    /* Tags (Module 04) */
    tagsWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    tag: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.primaryDark,
        backgroundColor: Colors.white,
    },
    tagText: {
        fontSize: 13,
        fontWeight: "500",
        color: Colors.primaryDark,
    },

    /* Detail features (Module 06) */
    detailFeature: {
        flexDirection: "row",
        gap: 14,
        marginBottom: 20,
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    detailIconWrap: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: Colors.section,
        alignItems: "center",
        justifyContent: "center",
    },
    detailIcon: {
        fontSize: 18,
    },
    detailContent: {
        flex: 1,
    },
    detailTitle: {
        ...Typography.body,
        fontWeight: "600",
        color: Colors.primaryDark,
        fontSize: 15,
        marginBottom: 4,
    },
    detailDesc: {
        ...Typography.caption,
        color: Colors.textSecondary,
        fontSize: 13,
        lineHeight: 19,
    },

    /* Dashboard mock */
    dashMock: {
        backgroundColor: "#0F172A",
        borderRadius: 12,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.15,
        shadowRadius: 30,
    },
    dashTop: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: "#1E293B",
    },
    dotRow: {
        flexDirection: "row",
        gap: 6,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    dashBody: {
        flexDirection: "row",
        padding: 16,
        gap: 12,
        minHeight: 220,
    },
    dashSidebar: {
        width: 60,
        gap: 8,
    },
    sidebarItem: {
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,0.08)",
    },
    dashContent: {
        flex: 1,
    },
    dashGrid: {
        flexDirection: "row",
        gap: 8,
    },
    dashCard: {
        height: 50,
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0.06)",
    },
    dashBlock: {
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0.06)",
    },

    /* Phone mock */
    phoneMock: {
        width: 260,
        backgroundColor: "#1E293B",
        borderRadius: 28,
        padding: 12,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.15,
        shadowRadius: 30,
    },
    phoneNotch: {
        width: 100,
        height: 6,
        borderRadius: 3,
        backgroundColor: "rgba(255,255,255,0.1)",
        alignSelf: "center",
        marginBottom: 16,
    },
    phoneBody: {
        padding: 16,
    },

    /* Image placeholder */
    imagePlaceholder: {
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: Colors.section,
        borderWidth: 1,
        borderColor: Colors.border,
        minHeight: 280,
        alignItems: "center",
        justifyContent: "center",
    },
    imgInner: {
        alignItems: "center",
        gap: 12,
    },
    imgEmoji: {
        fontSize: 48,
    },
    imgLabel: {
        ...Typography.caption,
        color: Colors.textMuted,
        fontSize: 14,
    },
});
