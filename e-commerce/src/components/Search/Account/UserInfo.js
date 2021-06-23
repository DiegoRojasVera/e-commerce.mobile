import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function UserInfo(prorps) {
    const { user } = props;
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Bienvenido,</Text>
            <Text style={Styles.titleName}></Text>
            {user.name && user.lastname ? `${user.name} ${user.lastname}` : user.email}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
    },
    titleName: {
        fontSize: 20,
        fontWeight: "bold"
    }
})