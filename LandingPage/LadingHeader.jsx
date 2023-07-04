/* eslint-disable */

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const LandingHeader = () => {
    {/* Introduction to Payment Page and it functionalities  */ }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <FontAwesomeIcon name="check-circle" size={30} style={{ textAlign: "center", marginBottom: 10, color: "orange" }} />
                <Text style={styles.largeText}>1. Payment Page Created</Text>
                <Text style={styles.mediumText}> Create your own custom pages by adding fields to collect relevant customer information.</Text>
            </View>
            <View style={styles.innerContainer}>
                <FontAwesomeIcon name="circle-o" size={30} style={{ textAlign: "center", marginBottom: 10, marginLeft: -35, color: "#09a5ed" }} />
                <Text style={styles.largeText}>2. Receive Payments</Text>
                <Text style={styles.mediumText}> Publish your page to receive payments from your customers.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        marginBottom: 20,
    },
    largeText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        padding: 5,
    },
    mediumText: {
        fontSize: 15,
        fontWeight: "500",
        textAlign: "left",
        padding: 2,
    },
    innerContainer: {
        flex: 1,
        padding: 10,
    }
});

export default LandingHeader;