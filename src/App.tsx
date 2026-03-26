import React from "react";
import { Routes, Route } from "react-router-dom";
import { View, StyleSheet } from "react-native";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Modules from "./pages/Modules";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Audiences from "./pages/Audiences";
import { Colors } from "./theme/colors";

const App: React.FC = () => {
    return (
        <View style={styles.root}>
            <Navbar />
            <View style={styles.content}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/modules" element={<Modules />} />
                    <Route path="/benefits" element={<Benefits />} />
                    <Route path="/audiences" element={<Audiences />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/features" element={<Features />} />
                </Routes>
            </View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.background,
        minHeight: "100vh" as any,
    },
    content: {
        flex: 1,
    },
});

export default App;
