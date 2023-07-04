/* eslint-disable */

import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight, TouchableOpacity } from "react-native";

const TemplatePage = ({navigation}) => {

    const handleClick = () => {
        // That will open up corresponding Template for the merchant.
        // e.g - fees collection, events, etc.
        navigation.navigate("paymentpage");
    }

    return (


        <ScrollView style={{ flexGrow: 1 }}>
            <View style={{ flex: 1, flexDirection: "column", backgroundColor:"black" }}>

                 {/* Heading to describe the functionality of the template screen to the merchants */}
                <View style={{ flex: 1, height: 100, justifyContent: "center", alignItems: "flex-start", margin: 20 }}>
                    <Text style={styles.heading}>Choose from the templates</Text>
                    <Text style={[styles.mediumText,{color : "white"}]}>You can choose one of the templates below</Text>
                </View>

                 {/* Create your own template */}
                <View style={styles.templateBox}>

                     {/* Image at the left of the card */}
                    <View style={{ flex: 1, padding: 15 }}>
                        <Image source={{ uri: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-91463917/91463917.jpg" }} style={{ flex: 1, resizeMode: "cover" }} />
                    </View>

                    {/* Description at the right of the card */}
                    <View style={{ flex: 2, padding: 15 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.largeText}>Create your own</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.mediumText}>Get your own idea? Start with a clean state.</Text>
                        </View>

                        {/* Clickable Button to Navigate to corresponding payment page template */}
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => handleClick()}>
                                <Text style={styles.buttonText}>Use this template ➡ </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                 {/* Events and Tickets */}
                <View style={styles.templateBox}>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: "https://cdn.siasat.com/wp-content/uploads/2019/10/events.jpg" }} style={{ flex: 1, resizeMode: "cover" }} />
                    </View>
                    <View style={{ flex: 2, padding: 15 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.largeText}>Events and Tickets</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.mediumText}>Take your every event live by adding venue details, event date/time and images.</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => handleClick()}>
                                <Text style={styles.buttonText}>Use this template ➡ </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Acception Donations */}
                <View style={styles.templateBox}>
                    <View style={{ flex: 1, padding: 15 }}>
                        <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/004/327/957/original/donation-box-throwing-coin-in-a-box-for-donations-donate-giving-money-and-love-concept-of-charity-give-and-share-your-love-with-people-vector.jpg" }} style={{ flex: 1, resizeMode: "cover" }} />
                    </View>
                    <View style={{ flex: 2, padding: 15 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.mediumLargeText}>Accepting Donations</Text>
                        </View>
                        <View style={{ flex: 4 }}>
                            <Text style={styles.mediumText}>Start collecting online donations by adding course information, images, and campaign duration.</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => handleClick()}>
                                <Text style={styles.buttonText}>Use this template ➡ </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                 {/* Product Sale   */}
                <View style={styles.templateBox}>
                    <View style={{ flex: 1, padding: 15 }}>
                        <Image source={{ uri: "https://cdn2.mageplaza.com/media/general/OnWj0is.png" }} style={{ flex: 1, resizeMode: "cover" }} />
                    </View>
                    <View style={{ flex: 2, padding: 15 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.largeText}>Product Sale</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.mediumText}>Kickstart your sales by adding product description along with multiple images and shipping information.</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => handleClick()}>
                                <Text style={styles.buttonText}>Use this template ➡ </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                 {/* Fees Collection  */}
                <View style={styles.templateBox}>
                    <View style={{ flex: 1, padding: 15 }}>
                        <Image source={{ uri: "https://edumarshal.com/wp-content/uploads/2019/07/g49065.png" }} style={{ flex: 1, resizeMode: "cover" }} />
                    </View>
                    <View style={{ flex: 2, padding: 15 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.largeText}>Fees Collection</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.mediumText}>Collect fees online by adding program details, fee breakup and T&C.</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => handleClick()}>
                                <Text style={styles.buttonText}>Use this template ➡ </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    templateBox: {
        flex: 1,
        flexDirection: "row",
        height: 230,
        margin: 20,
        padding: 10,
        borderWidth: 5,
        borderColor: "red",
        borderRadius: 12,
        backgroundColor : "#f5f7f7"
    },
    largeText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    mediumLargeText: {
        fontSize: 17,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    mediumText: {
        fontSize: 15,
        fontWeight: "600",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 5,
        color : "white",
    }
});

export default TemplatePage;