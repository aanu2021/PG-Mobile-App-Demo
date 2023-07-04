/* eslint-disable */

import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, Pressable, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { launchImageLibrary } from "react-native-image-picker";
import Editor from "./Editor";

const PaymentPage = () => {

    const [shareIcons, setShareIcons] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // To make the codebase less cluttered.
    const socialMediaIcons = [
        {
            name: "facebook-square",
            colour: "#3b5998"
        },
        {
            name: "twitter-square",
            colour: "#00acee"
        },
        {
            name: "whatsapp",
            colour: "#25D366"
        }
    ];

    // If merchant wants to add social media icons for sharing.
    const addShareIcons = () => {
        setShareIcons(true);
    }

    // If merchant doesn't want ro add social media icons for sharing.
    const removeShareIcons = () => {
        setShareIcons(false);
    }

    // For toggling terms and conditions input box.
    const toggleTerms = () => {
        setShowTerms(!showTerms);
    }

    // Uploading an image inside the logo section (using image-picker)
    const handleImageUpload = async () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 100,
            maxHeight: 100,
            videoQuality: "high"
        };
        try {
            const response = await launchImageLibrary(options);
            // console.log(response.assets[0].uri);
            setSelectedImage(response.assets[0].uri);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (<ScrollView style={{ flexGrow: 1 }}>

        {/* Logo Section */}
        <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                {
                    selectedImage ? (<Image source={{ uri: selectedImage }} style={{ width: 100, height: 100 }} />) : (<TouchableOpacity onPress={() => handleImageUpload()}>
                        <View style={styles.textInput}>
                            <Text style={{ fontWeight: "bold" }}>Upload Logo</Text>
                        </View>
                    </TouchableOpacity>)
                }
            </View>
        </View>

        {/* Heading Section  */}
        <View style={{ flex: 1 }}>
            <TextInput placeholder="Enter page title here" style={styles.inputBox} autoFocus={false} />
        </View>

        {/* Content Section  */}
        <View style={{ flex: 1 }}>
            <Editor />
            {/* <View style={{ flex: 1 }}>
                <TextInput placeholder="Enter page description" style={styles.descriptionBox} autoFocus={false} />
            </View>
            <View style={{
                flex: 1, height: 120, borderWidth: 1,
                borderColor: "#d7dedd",
                marginBottom: 20, marginLeft: 20, marginRight: 20
            }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <TextInput placeholder="Menu" style={{ borderWidth: 0.5, borderColor: "black", margin: 5, fontSize: 15 }} />
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderWidth: 0.5, borderColor: "black", margin: 5 }}>
                            <Text style={styles.symbol}>A</Text>
                            <Text style={styles.symbol}>B</Text>
                            <Text style={[styles.symbol, { fontStyle: "italic" }]}>I</Text>
                            <Text style={[styles.symbol, { textDecorationLine: "underline" }]}>U</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginLeft: 25 }}>
                        <View style={{ flex: 1 }}>
                            <Icon name="align-left" style={styles.icon} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Icon name="align-right" style={styles.icon} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Icon name="link" style={styles.icon} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Icon name="photo" style={styles.icon} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Icon name="video-camera" style={styles.icon} />
                        </View>
                    </View>
                </View>
            </View> */}
        </View>

        {/* Social Media Icons Section  */}
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 20 }}>
                {
                    !shareIcons ? (<TouchableOpacity onPress={() => addShareIcons()}>
                        <Text style={styles.buttonText}>{"+  Add social media share icons"}</Text>
                    </TouchableOpacity>) : (<View style={{ flex: 1 }}>
                        <View style={{ flex: 1, marginBottom: 5 }}>
                            <Text style={{ fontSize: 20 }}>Share this on :</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            {
                                socialMediaIcons.map((ele, index) => {
                                    return (<View key={index} style={{ paddingLeft: 5, paddingRight: 5 }}>
                                        <Icon name={ele.name} style={{ color: ele.colour, fontSize: 25 }} />
                                    </View>);
                                })
                            }
                            <View style={{ paddingLeft: 5, paddingRight: 5 }}>
                                <TouchableOpacity onPress={() => removeShareIcons()}>
                                    <Text style={[styles.buttonText, { fontSize: 17 }]}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>)
                }
            </View>
        </View>

        {/* Contact Us Section  */}
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingTop: 15, paddingLeft: 20, paddingRight: 20 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", paddingLeft: 20, paddingBottom: 10, color: "#31184d" }}>Contact Us : </Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <MaterialIcon name="email" style={{ fontSize: 20, color: "#31184d" }} />
                    </View>
                    <View style={{ flex: 5 }}>
                        <TextInput placeholder="Enter support email" style={styles.mediumInputBox} />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", color: "#31184d" }}>
                        <Icon name="phone" style={{ fontSize: 20, color: "#31184d" }} />
                    </View>
                    <View style={{ flex: 5 }}>
                        <TextInput placeholder="Enter support phone" style={styles.mediumInputBox} />
                    </View>
                </View>
            </View>
        </View>

        {/* Terms and Conditions Section  */}
        <View style={{ flex: 1, marginTop: 40 }}>

            <View style={{ flex: 1 }}>
                {
                    !showTerms ?
                        (<TouchableOpacity onPress={() => toggleTerms()} style={{ paddingLeft: 20 }}>
                            <Text style={[styles.buttonText, { marginBottom: 25 }]}>{"+  Add your Terms and Conditions"}</Text>
                        </TouchableOpacity>)
                        :
                        (<View>
                            <View><Pressable onPress={() => toggleTerms()}><Text style={{ fontSize: 20, fontWeight: "700", paddingLeft: 20, color: "#31184d" }}>Terms & Conditions </Text></Pressable></View>
                            <View>
                                <TextInput
                                    editable
                                    multiline
                                    numberOfLines={4}
                                    style={{ margin: 20, borderWidth: 1, borderColor: "#d7dedd", textAlign: "left", fontSize: 18, color: "#31184d", backgroundColor: "#FEFEFE" }}
                                    placeholder="Enter your Terms & Conditions"
                                />
                            </View>
                        </View>)

                }
            </View>

            <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ color: "#31184d", fontSize: 15 }}>
                    You agree to share information entered on this page with Anumoy Nandy (owner of this page) and Razorpay, adhering to applicable laws.
                </Text>
            </View>
        </View>
    </ScrollView>);
}

const styles = StyleSheet.create({
    textInput: {
        height: 100,
        width: 100,
        borderWidth: 3,
        borderColor: "#d7dedd",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#FEFEFE",
    },
    inputBox: {
        height: 60,
        fontSize: 35,
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: "#d7dedd",
        margin: 20,
        marginTop: 40,
        backgroundColor: "#FEFEFE",
    },
    descriptionBox: {
        height: 50,
        fontSize: 20,
        fontWeight: "600",
        borderWidth: 1,
        borderColor: "#d7dedd",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    symbol: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#31184d"
    },
    icon: {
        color: "#31184d",
        fontWeight: "bold",
        fontSize: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
    },
    mediumInputBox: {
        fontSize: 15,
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: "#d7dedd",
        backgroundColor: "#FEFEFE",
    }

});

export default PaymentPage;