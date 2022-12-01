import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CreateBill = () => {
  return (
    <View style={styles.conatainer}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <TouchableOpacity style={styles.mkBill}>
        <Text>Make a Bill</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateBill

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignContent: 'center'
    },
    mkBill: {
        width: 100,
        height: 40,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    }
})