import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

const TIMELINE_NODES = [
    {
        phase: "The beginning",
        title: "Fragmented systems",
        desc: "We started by identifying the massive friction caused by disconnected spreadsheets and outdated payroll software that couldn't talk to HR systems.",
        side: "right" as const,
        letter: "A",
    },
    {
        phase: "The pivot",
        title: "The integrated solution",
        desc: "Xpertance was born as the first truly unified platform where payroll and HR live in a single database, eliminating 90% of administrative overhead.",
        side: "left" as const,
        letter: "B",
    },
    {
        phase: "Growth",
        title: "Zero-touch automation",
        desc: "We introduced automated tax filings, compliance monitoring, and benefits enrollment, allowing HR teams to focus on culture rather than paperwork.",
        side: "right" as const,
        letter: "C",
    },
    {
        phase: "Intelligence",
        title: "Strategic analytics",
        desc: "Transforming data into wisdom. We provided leaders with real-time dashboards on turnover, diversity, and compensation benchmarks.",
        side: "left" as const,
        letter: "D",
    },
    {
        phase: "The future",
        title: "Predictive AI workforce",
        desc: "Our roadmap includes generative AI that predicts staffing needs, automates talent matching, and personalizes employee growth paths automatically.",
        side: "right" as const,
        letter: "E",
        isHighlighted: true,
    },
];

const EvolutionTimeline: React.FC = () => {
    return (
        <Section background={Colors.section} paddingVertical={80}>
            <Container>
                <View style={styles.center}>
                    <Text style={styles.heading}>Our Evolution</Text>
                    <Text style={styles.subtext}>
                        The journey from fragmented data to intelligent workforce modeling.
                    </Text>
                </View>

                <View style={styles.timeline}>
                    {/* Center line */}
                    <View style={styles.centerLine} />

                    {TIMELINE_NODES.map((node, index) => (
                        <View key={index} style={styles.nodeRow}>
                            {/* Left content */}
                            <View style={styles.halfCol}>
                                {node.side === "left" && (
                                    <View style={[styles.card, styles.cardLeft]}>
                                        <Text style={styles.phase}>{node.phase}</Text>
                                        <Text style={styles.nodeTitle}>{node.title}</Text>
                                        <Text style={styles.nodeDesc}>{node.desc}</Text>
                                    </View>
                                )}
                            </View>

                            {/* Circle */}
                            <View style={styles.circleCol}>
                                <View style={[styles.circle, node.isHighlighted && styles.circleHighlighted]}>
                                    <Text style={[styles.circleLetter, node.isHighlighted && styles.circleLetterHighlighted]}>{node.letter}</Text>
                                </View>
                            </View>

                            {/* Right content */}
                            <View style={styles.halfCol}>
                                {node.side === "right" && (
                                    <View style={[styles.card, styles.cardRight, node.isHighlighted && styles.cardHighlighted]}>
                                        {node.side === "right" && node.phase && (
                                            <Text style={[styles.phase, node.isHighlighted && styles.phaseHighlighted]}>{node.phase}</Text>
                                        )}
                                        <Text style={[styles.nodeTitle, node.isHighlighted && styles.nodeTitleHighlighted]}>{node.title}</Text>
                                        <Text style={[styles.nodeDesc, node.isHighlighted && styles.nodeDescHighlighted]}>{node.desc}</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    ))}
                </View>
            </Container>
        </Section>
    );
};

const styles = StyleSheet.create({
    center: {
        alignItems: "center",
        marginBottom: 60,
    },
    heading: {
        ...Typography.h2,
        color: Colors.primaryDark,
        textAlign: "center",
        marginBottom: 12,
    },
    subtext: {
        ...Typography.body,
        color: Colors.textMuted,
        textAlign: "center",
    },
    timeline: {
        position: "relative",
        gap: 0,
    },
    centerLine: {
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: 2,
        backgroundColor: Colors.muted,
        marginLeft: -1,
    },
    nodeRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 40,
    },
    halfCol: {
        flex: 1,
        paddingHorizontal: 24,
    },
    circleCol: {
        width: 48,
        alignItems: "center",
        zIndex: 2,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    circleHighlighted: {
        backgroundColor: Colors.primary,
        // @ts-ignore
        boxShadow: "0 0 0 6px rgba(15,117,109,0.2)",
    },
    circleLetter: {
        color: Colors.white,
        fontWeight: "700",
        fontSize: 16,
    },
    circleLetterHighlighted: {
        color: Colors.white,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 24,
        borderWidth: 1,
        borderColor: Colors.muted,
    },
    cardLeft: {
        alignItems: "flex-end",
    },
    cardRight: {},
    cardHighlighted: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    phase: {
        ...Typography.caption,
        color: Colors.primary,
        fontSize: 11,
        letterSpacing: 1.5,
        marginBottom: 6,
    },
    phaseHighlighted: {
        color: "rgba(255,255,255,0.7)",
    },
    nodeTitle: {
        ...Typography.h5,
        color: Colors.primaryDark,
        marginBottom: 8,
    },
    nodeTitleHighlighted: {
        color: Colors.white,
    },
    nodeDesc: {
        ...Typography.bodySm,
        color: Colors.textMuted,
        lineHeight: 22,
    },
    nodeDescHighlighted: {
        color: "rgba(255,255,255,0.85)",
    },
});

export default EvolutionTimeline;
