import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';

const HomeScreen = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [product, setProduct] = useState('[banana, kola, amm, mengo]');
    const [quality, setQuality] = useState('');
    const [invoiceNo, setInvoiceNo] = useState('');
    const [total, setTotal] = useState('');
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