import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import dateFormat from 'dateformate';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const HomeScreen = () => {

    // pike the date 
    const now = new Date();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [product, setProduct] = useState('mobile');
    const [quality, setQuality] = useState('');
    const [recivingAmount, setRecivingAmount] = useState('');
    const [remainingBalance, setRemainingBalance] = useState('');
    const [paymentMeathood, setPaymentMeathood] = useState('');
    const [invoiceNo, setInvoiceNo] = useState(dateFormat(now, "ddmmyyhhMss")) 
    const [total, setTotal] = useState('');

    const makeToPDF = async() => {
        let html = pdfCode(name, address, phoneNo, product, quality, recivingAmount, remainingBalance, paymentMeathood, invoiceNo, total);

        try{
            const {uri} = await Print.printToFileAsync({html});
            console.log("file are saved", uri);
            await shareAsunc(uri, {UTI: '.pdf', mimeType: 'application/pdf'});

            setName('')
            setAddress('')
            setPhoneNo('')
            setProduct('')
            setQuality('')
            setRecivingAmount('')
            setRemainingBalance('')
            setPaymentMeathood('')
            setInvoiceNo(now, "ddmmyyhhMss")
            setTotal('')
        } catch (err) {
            Alert.alert("sumthing is wrong")
        }
    }

    return (
        <View style={styles.conatainer}>
            <ScrollView>
                <Text>HomeScreen</Text>
                {/* name */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Name</Text>
                    <TextInput
                        value='name'
                        style={styles.inputSec}
                        onChangeText={text => setName(text)}
                        placeholder='Enter Client Name'
                    />
                </View>
                {/* Address */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Address</Text>
                    <TextInput
                        value='address'
                        style={styles.inputSec}
                        onChangeText={text => setAddress(text)}
                        placeholder='Address'
                    />
                </View>
                {/* Mobile number */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Mobile Number</Text>
                    <TextInput
                        value='phoneNo'
                        keyboardType='number-pad'
                        style={styles.inputSec}
                        onChangeText={text => setPhoneNo(text)}
                        placeholder='Enter Mobile Number'
                    />
                </View>
                {/* product */}
                {/* <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>product</Text>
                    <TextInput
                        style={styles.inputSec}
                        onChangeText={text => setProduct(text)}
                        placeholder='product'
                    />
                </View> */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Product's:</Text>
                    <Picker
                        style={styles.pickers}
                        selectedValue={product}
                        onValueChange={(itemValue, itemIndex) =>
                            setProduct(itemValue)
                        }
                        >
                        <Picker.Item label="mobile" value="mobile" />
                        <Picker.Item label="laptop" value="laptop" />
                        <Picker.Item label="ram" value="ram" />
                        <Picker.Item label="head_phone" value="head_phone" />
                        <Picker.Item label="pen drive" value="pen drive" />
                    </Picker>
                </View>
                {/* Quality */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Quality</Text>
                    <TextInput
                        value='quality'
                        style={styles.inputSec}
                        keyboardType='number-pad'
                        onChangeText={text => setQuality(text)}
                        placeholder='Quality of proudect'
                    />
                </View>
                {/* Invoice No */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Invoice Number</Text>
                    <TextInput
                        value='invoiceNo'
                        style={styles.inputSec}
                        keyboardType='number-pad'
                        onChangeText={text => setInvoiceNo(text)}
                        placeholder='Invoice Number'
                    />
                </View>
                {/* Total Amount */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Total Amount</Text>
                    <TextInput
                        value='total'
                        style={styles.inputSec}
                        keyboardType='number-pad'
                        onChangeText={text => setTotal(text)}
                        placeholder='Total Amount'
                    />
                </View>
                {/* Total Amount */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Reciving Amount</Text>
                    <TextInput
                        value='recivingAmount'
                        style={styles.inputSec}
                        keyboardType='number-pad'
                        onChangeText={text => setRecivingAmount(text)}
                        placeholder='Total Amount'
                    />
                </View>
                {/* Total Amount */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Remaining Balance</Text>
                    <TextInput
                        value='remainingBalance'
                        style={styles.inputSec}
                        keyboardType='number-pad'
                        onChangeText={text => setRemainingBalance(text)}
                        placeholder='Total Amount'
                    />
                </View>
                {/* Total Amount */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLable}>Payment Meathood</Text>
                    <TextInput
                        value='paymentMeathood'
                        style={styles.inputSec}
                        keyboardType='number-pad'
                        onChangeText={text => setPaymentMeathood(text)}
                        placeholder='Total Amount'
                    />
                </View>
                <View>
                    <Button 
                    title='Create Invoice'
                    onPress={makeToPDF}
                    ></Button>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    conatainer: {
        padding: 20,
        marginTop: 25,
    },
    inputContainer: {
        paddingVertical: 5,
        marginBottom: 8,
    },
    inputLable: {
        fontSize: 19,
        fontFamily: 'arial'
    },
    inputSec: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 4,
        marginTop: 2,
    },
    pickers: {
        borderColor: 'green',
        borderWidth: 1,
        padding: 5,
        borderRadius: 4,
        marginTop: 2,
    }
})