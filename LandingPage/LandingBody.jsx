/* eslint-disable */

import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    TouchableOpacity
} from "react-native";

import Clipboard from "@react-native-community/clipboard";

const LandingBody2 = ({ navigation }) => {

    const [item, setItem] = useState([]);
    const [copyIndex,setCopyIndex] = useState(-1);

    const itemList = [
        {
            title: "School Bag Store",
            total_sales: 10000,
            item_name: "School Bag",
            units_sold: 80,
            page_url: "https://rzp.io/l/a9zvt36T",
            created_on: "28/05/2023",
            status: "active"
        },
        {
            title: "Lassi Ka Dukan",
            total_sales: 5000,
            item_name: "Lassi",
            units_sold: 50,
            page_url: "https://rzp.io/l/PSIE5m7s9Q",
            created_on: "22/05/2023",
            status: "inactive"
        },
        {
            title: "Coca Cola Factory",
            total_sales: 50000,
            item_name: "Coca Cola",
            units_sold: 100,
            page_url: "https://rzp.io/l/a9zvt36T",
            created_on: "20/06/2023",
            status: "active"
        },
        {
            title: "Ray & Martin Publishers",
            total_sales: 20000,
            item_name: "Books",
            units_sold: 200,
            page_url: "https://rzp.io/l/PSIE5m7s9Q",
            created_on: "22/05/2023",
            status: "inactive"
        }
    ];

    const getAPIData = (itemList) => {
        // Hitting the endpoints are done over here
        setItem(itemList);
    }
    
    // Navigate to Template Page
    const handleClick = () => {
        navigation.navigate("templatepage");
    }

    // Navigate to that particular payment page to showcase all transactions through it.
    const navigateToPaymentPage = (ele) => {
        navigation.navigate("detailspage", {
            item: ele
        });
    }

    // Copy to clipboard functionality 
    const handleCopyIndex = (ele,id)=> {
       setCopyIndex(id);
       Clipboard.setString(ele);
       setTimeout(()=>{
          setCopyIndex(-1);
       },1500);
    }

    useEffect(() => {
        // Artificial API rendering 
        new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(itemList);     
            }, 3000);
        }).then((itemList)=>{
            getAPIData(itemList);
        })
        .catch((err)=>{
            console.log(err);
        })
        // setItem(itemList);
    }, []);

    return (

        <View style={{ flex: 1 }}>
            <ScrollView style={{ flexGrow: 1 }}>

                {/* Navigation to Template Screen Section (Clickable Button)  */}
                <View style={{ flex: 2, padding: 30 }}>
                    <Button title="+  Create Payment Page" onPress={() => handleClick()} />
                </View>
                

                {/* Representation of necessary details of all the payment pages created till now in a tabular format  */}
                {/* The list is both horizontally scrollable and vertically scrollable  */}
                <View style={{ flex: 7, padding: 30 }}>
                    <ScrollView style={{ flexGrow: 1 }}>
                        <View style={{ flex: 1 }}>
                            <ScrollView style={{ flexGrow: 1 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flex: 1, flexDirection: "column" }}>

                                    {/* Heading for all the columns (e.g title, total sales, active/inactive) */}
                                    <View style={{ flex: 1, flexDirection: "row", padding: 5, marginBottom: 15 }}>
                                        <View style={{ width: 250, marginLeft: 5 }}>
                                            <Text style={styles.mediumLargeText}>Title</Text>
                                        </View>
                                        <View style={{ width: 150, marginLeft: 5 }}>
                                            <Text style={styles.mediumLargeText}>Total Sales</Text>
                                        </View>
                                        <View style={{ width: 150, marginLeft: 5 }}>
                                            <Text style={styles.mediumLargeText}>Item Name</Text>
                                        </View>
                                        <View style={{ width: 150, marginLeft: 5 }}>
                                            <Text style={styles.mediumLargeText}>Units Sold</Text>
                                        </View>
                                        <View style={{ width: 300, marginLeft: 5 }}>
                                            <Text style={styles.mediumLargeText}>Page Url</Text>
                                        </View>
                                        <View style={{ width: 150, marginLeft: 5 }}>
                                            <Text style={styles.mediumLargeText}>Created On</Text>
                                        </View>
                                        <View style={{ width: 150, marginLeft: 5 }}>
                                            <Text style={styles.mediumLargeText}>Status</Text>
                                        </View>
                                    </View>

                                    {/* Actual list items with their actual value, renders automatically */}
                                    {
                                        (item.length) ? item.map((ele, index) => {
                                            return (<View key={index} style={{ flex: 1, flexDirection: "row", padding: 5, marginBottom: 12 }}>
                                                <View style={{ width: 250, marginLeft: 5 }}>
                                                    <TouchableOpacity onPress={() => navigateToPaymentPage()}>
                                                        <Text style={[styles.mediumText, { color: "blue" }]}>{ele.title}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ width: 150, marginLeft: 5 }}>
                                                    <Text style={styles.mediumText}>{ele.total_sales}</Text>
                                                </View>
                                                <View style={{ width: 150, marginLeft: 5 }}>
                                                    <Text style={styles.mediumText}>{ele.item_name}</Text>
                                                </View>
                                                <View style={{ width: 150, marginLeft: 5 }}>
                                                    <Text style={styles.mediumText}>{ele.units_sold}</Text>
                                                </View>
                                                <View style={{ width: 300, marginLeft: 5, flexDirection : "row", flex : 1 }}>
                                                    <Text style={[styles.mediumText, { color: "#4282eb", marginRight : 8 }]}>{ele.page_url}</Text>
                                                    <TouchableOpacity style={styles.copyButton} onPress={()=>handleCopyIndex(ele.page_url,index)}>
                                                        {
                                                            index===copyIndex ? (<Text style={{textAlign:"center"}}>Copied</Text>) : (<Text style={{textAlign:"center"}}>Copy</Text>)
                                                        }
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ width: 150, marginLeft: 5 }}>
                                                    <Text style={styles.mediumText}>{ele.created_on}</Text>
                                                </View>
                                                <View style={{ width: 150, marginLeft: 5 }}>
                                                    {
                                                        ele.status === "active" ? (<View style={styles.extraButton}>
                                                            <Text style={{ fontSize: 15, color: "#FFFFFF" }}>{ele.status}</Text>
                                                        </View>) : (<View style={[styles.extraButton, { backgroundColor: "#999999" }]}>
                                                            <Text style={{ fontSize: 15, color: "#FFFFFF" }}>{ele.status}</Text>
                                                        </View>)
                                                    }
                                                </View>
                                            </View>);
                                        }) : null
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>

                
                {/* Pagination Section  */}
                {/* Dynamic in nature, whenever list items get modified, it updates itself */}
                <View style={{ flex: 3, paddingLeft: 30, paddingRight: 30 }}>
                    {
                        item.length ? <View style={styles.footer}>
                            <Text style={styles.footerText}>Showing 1 - {item.length}</Text>
                        </View> : <View style={styles.footer}>
                            <Text style={styles.footerText}>Showing 0 - 0</Text>
                        </View>
                    }
                </View>


            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textBox: {
        fontSize: 50,
        color: "red",
    },
    largeText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
    },
    mediumText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#58666E",
    },
    mediumLargeText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#58666E",
    },
    footer: {
        padding: 30,
    },
    footerText: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
    },
    extraButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5BC0DE",
        borderRadius: 50,
        padding: 5,
    },
    copyButton: {
       borderWidth : 0.5,
       borderColor : "grey",
       width : 50,
       height : 25
    }
});

export default LandingBody2;