/* eslint-disable */

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const PaymentPageDetails = ({ route }) => {

    const { item } = route.params;

    // State Hooks to manipulate and store the necessary informations 
    // For toggling filter items
    const [showFilter, setShowFilter] = useState(false);
    const [paymentId, setPaymentId] = useState('');
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');

    const data = {
        status_code: 200,
        success: true,
        data: {
            entity: "collection",
            count: 2,
            has_more: false,
            items: [
                {
                    id: "pay_M7lsZ3v0s1gVh8",
                    entity: "payment",
                    amount: 20000,
                    currency: "INR",
                    base_amount: 20000,
                    status: "captured",
                    order_id: "order_M7lrUDulPNRy0S",
                    invoice_id: null,
                    international: false,
                    method: "netbanking",
                    amount_refunded: 0,
                    amount_transferred: 0,
                    refund_status: null,
                    captured: true,
                    description: null,
                    card_id: null,
                    bank: "BARB_R",
                    wallet: null,
                    vpa: null,
                    email: "anumoynandyanunan2019@gmail.com",
                    contact: "+917439192064",
                    notes: {
                        email: "anumoynandyanunan2019@gmail.com",
                        phone: "7439192064",
                        pincode: "700120",
                        pan: "BNZPM2501F"
                    },
                    fee: 472,
                    tax: 72,
                    error_code: null,
                    error_description: null,
                    error_source: null,
                    error_step: null,
                    error_reason: null,
                    acquirer_data: {
                        bank_transaction_id: "4007668"
                    },
                    created_at: 1688047300
                },
                {
                    id: "pay_M4TeRQQ1XNn4Qy",
                    entity: "payment",
                    amount: 10000,
                    currency: "INR",
                    base_amount: 10000,
                    status: "captured",
                    order_id: "order_M4TchHd21Pqj6h",
                    invoice_id: null,
                    international: false,
                    method: "netbanking",
                    amount_refunded: 0,
                    amount_transferred: 0,
                    refund_status: null,
                    captured: true,
                    description: null,
                    card_id: null,
                    bank: "BARB_R",
                    wallet: null,
                    vpa: null,
                    email: "anumoynandyanunan2021@gmail.com",
                    contact: "+917439192064",
                    notes: {
                        email: "anumoynandyanunan2021@gmail.com",
                        phone: "7439192064",
                        pincode: "700119",
                        pan: "ABCDE1234F"
                    },
                    fee: 236,
                    tax: 36,
                    error_code: null,
                    error_description: null,
                    error_source: null,
                    error_step: null,
                    error_reason: null,
                    acquirer_data: {
                        bank_transaction_id: "1492704"
                    },
                    created_at: 1687328088
                },
                {
                    id: "pay_M7lsZ3v0s1gVh8",
                    entity: "payment",
                    amount: 20000,
                    currency: "INR",
                    base_amount: 20000,
                    status: "captured",
                    order_id: "order_M7lrUDulPNRy0S",
                    invoice_id: null,
                    international: false,
                    method: "netbanking",
                    amount_refunded: 0,
                    amount_transferred: 0,
                    refund_status: null,
                    captured: true,
                    description: null,
                    card_id: null,
                    bank: "BARB_R",
                    wallet: null,
                    vpa: null,
                    email: "anumoynandyanunan2019@gmail.com",
                    contact: "+917439192064",
                    notes: {
                        email: "anumoynandyanunan2019@gmail.com",
                        phone: "7439192064",
                        pincode: "700120",
                        pan: "BNZPM2501F"
                    },
                    fee: 472,
                    tax: 72,
                    error_code: null,
                    error_description: null,
                    error_source: null,
                    error_step: null,
                    error_reason: null,
                    acquirer_data: {
                        bank_transaction_id: "4007668"
                    },
                    created_at: 1688047300
                }
            ]
        }
    };

    const [Item, setItem] = useState(null);
    // we need to store the initial transaction list, such that we have atleast one copy of the actual 
    // list throughout the component, and we can retrieve back to the initial state whenever it is needed.
    const [initialTransactions, setInitialTransactions] = useState([]);
    const [transactions, setTransactions] = useState([]);

    // Fetch Api Details 
    const getAPIData = (data) => {
        // Hitting the end point to fetch the json object corresponding to current payment page
        // Convert the json object into iterable object
        setItem(data.data);
        setInitialTransactions(data.data.items);
        setTransactions(data.data.items);
    }

    // Decide whether we want to show the other filters
    const toggleFilter = () => {
        setShowFilter(!showFilter);
    }

    // Summation of all the transactions made through this current payment page 
    function getSum(total, ele) {
        return total + (ele.amount / 100);
    }

    const getTotalCount = () => {
        const number = transactions.reduce(getSum, 0);
        return number;
    }

    // Filtering out only those transactions, which are based on the user searched entities.
    const handleSearch = () => {
        const newTransactions = initialTransactions.filter((ele, index) => {
            if ((ele.id.includes(paymentId) || paymentId === "") && (ele.status.includes(status) || status === "") && (ele.notes.email.includes(email) || email === "")) {
                return true;
            }
            else {
                return false;
            }
        });
        setTransactions(newTransactions);
    }

    // Clears all the input filed values necessary for filteration. 
    // In short retrieve the initial configuration (with all the transactions).
    const handleClearAll = () => {
        setPaymentId('');
        setStatus('');
        setEmail('');
        setTransactions(initialTransactions);
    }

    useEffect(() => {

        // Whenever the page renders for the first time, we have to fetch the details from backend.
        // Artificial API Call
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 3000);
        }).then((data) => {
            getAPIData(data);
        })
            .catch((err) => {
                console.log(err);
            })

        // getAPIData();

    }, []);


    return (<View style={styles.detailsStyle}>

        {/* Payments Header Details  */}
        {/* Dynamic in nature */}
        <View style={{ flex: 3, margin: 20, padding: 15, backgroundColor: "#e4f3f5", }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.boldText}> Transactions </Text>
            </View>
            {/* Number of Payments Done, total revenue generated till now  */}
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={styles.mediumText}>Total Payments {" "}{Item ? transactions.length : 0}</Text>
                <Text style={styles.mediumText}>Total revenue {" "}{Item ? getTotalCount() : 0}</Text>
            </View>
            {/* Download Report  */}
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesomeIcon name="download" style={{ fontSize: 20, color: "#4282eb", }} />
                        <Text style={{ textAlign: "center", fontSize: 20, marginLeft: 15, color: "#4282eb", }}>Download Report</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        {/* Multiple transactions representation  */}
        <View style={{ flex: 10, marginLeft: 20, marginRight: 20, padding: 15, backgroundColor: "#FFFFFF" }}>

            <View style={{ flex: 3 }}>
                {/* Text Input Fields  */}
                <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={[styles.boldText, { fontSize: 18, marginBottom: 3 }]}>Payment Id</Text>
                        <TextInput placeholder="Enter Payment Id" value={paymentId} style={styles.inputBox} autoFocus={false} onChangeText={(id) => setPaymentId(id)} />
                    </View>
                    <View>
                        <Text style={[styles.boldText, { fontSize: 18, marginBottom: 3 }]}>Status</Text>
                        <TextInput placeholder="Enter Status" value={status} style={styles.inputBox} autoFocus={false} onChangeText={(status) => setStatus(status)} />
                    </View>
                    {
                        showFilter ? (<>
                            <View>
                                <Text style={[styles.boldText, { fontSize: 18, marginBottom: 3 }]}>Email</Text>
                                <TextInput placeholder="Enter Email" value={email} style={styles.inputBox} autoFocus={false} onChangeText={(email) => setEmail(email)} />
                            </View>
                        </>) : null
                    }

                    {/* Buttons to toggle states  */}
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <View>
                            {
                                !showFilter ? (<TouchableOpacity style={styles.normalButton} onPress={() => toggleFilter()}>
                                    <Text style={{ fontSize: 20, color: "#58666E" }}>Show All Filters</Text>
                                </TouchableOpacity>) : (<TouchableOpacity style={styles.normalButton} onPress={() => toggleFilter()}>
                                    <Text style={{ fontSize: 20, color: "#58666E" }}>Hide Filters</Text>
                                </TouchableOpacity>)
                            }
                        </View>
                        <View>
                            <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch()}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}>Search</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.normalButton} onPress={() => handleClearAll()}>
                                <Text style={{ fontSize: 20, color: "#58666E" }}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>

            {/* All the transactions done till now in tabular format   */}
            <View style={{ flex: 2, marginTop: 30 }}>
                <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1 }}>
                        <ScrollView style={{ flexGrow: 1 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
                                    <View style={{ width: 260, margin: 5 }}>
                                        <Text style={styles.boldText}>Payment Id</Text>
                                    </View>
                                    <View style={{ width: 120, margin: 5 }}>
                                        <Text style={styles.boldText}>Amount</Text>
                                    </View>
                                    <View style={{ width: 420, margin: 5 }}>
                                        <Text style={styles.boldText}>Customer</Text>
                                    </View>
                                    <View style={{ width: 150, margin: 5 }}>
                                        <Text style={styles.boldText}>Created At</Text>
                                    </View>
                                    <View style={{ width: 120, margin: 5 }}>
                                        <Text style={styles.boldText}>Status</Text>
                                    </View>
                                </View>
                                {
                                    (Item && Item.items.length) ? transactions.map((ele, index) => {
                                        return (<View key={index} style={{ flex: 1, flexDirection: "row", padding: 10 }}>
                                            <View style={{ width: 260, margin: 5 }}>
                                                <Text style={[styles.tableText, { color: "#2A86F3" }]}>{ele.id}</Text>
                                            </View>
                                            <View style={{ width: 120, margin: 5 }}>
                                                <Text style={styles.tableText}>{ele.amount / 100}</Text>
                                            </View>
                                            <View style={{ width: 420, margin: 5 }}>
                                                <Text style={styles.tableText}>{ele.notes.phone}</Text>
                                                <Text style={styles.tableText}>{ele.notes.email}</Text>
                                            </View>
                                            <View style={{ width: 150, margin: 5 }}>
                                                <Text style={styles.tableText}>Jun 29, 2023</Text>
                                            </View>
                                            <View style={{ width: 120, margin: 5 }}>
                                                <View style={styles.extraButton}>
                                                    <Text style={[styles.tableText, { color: "#FFFFFF", fontSize: 20 }]}>{ele.status}</Text>
                                                </View>
                                            </View>
                                        </View>);
                                    }) : null
                                }
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>

        {/* Showing Number of transactions happened through this payment page */}
        <View style={{ flex: 1, margin: 20, padding: 5, backgroundColor: "#e4f3f5", justifyContent: "center", alignItems: "center" }}>
            {
                transactions.length ? <Text style={{ fontSize: 20, color: "#58666E", textAlign: "center" }}>Showing 1 - {transactions.length}</Text> : <Text style={{ fontSize: 20, color: "#58666E", textAlign: "center" }}>No results found</Text>
            }
        </View>


    </View>)
}

// Style Sheet components 
const styles = StyleSheet.create({
    mediumText: {
        fontSize: 18,
        color: "#8991AE",
    },
    boldText: {
        fontSize: 25,
        color: "#58666E",
        fontWeight: "bold",
    },
    detailsStyle: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    button: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 8,
    },
    inputBox: {
        padding: 5,
        borderWidth: 4.5,
        borderColor: "#d7dedd",
        height: 60,
        fontSize: 20,
    },
    normalButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a5c4c4",
        height: 60,
        minWidth: 130,
        marginTop: 5,
        marginBottom: 5,
    },
    searchButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2A86F3",
        height: 60,
        minWidth: 130,
        marginTop: 5,
        marginBottom: 5,
    },
    tableText: {
        fontSize: 18,
        color: "#58666E",
        fontWeight: "600",
    },
    extraButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#27C24C",
        borderRadius: 50,
    }
});

export default PaymentPageDetails;
