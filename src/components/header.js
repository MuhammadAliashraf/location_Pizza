import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { color, parameters } from "../style/appcolors";
import styles from "../style/style";
import { Icon } from "react-native-elements";

function Header({ title, type, navigation }) {
    return <>
        <View style={style.header}>
            <View style={[styles.flexRow, styles.flexCenter]} >
                <View style={[styles.ms1,]} >
                    <Icon
                        color='white'
                        size={28}
                        name={type}
                        onPress={()=>{navigation.goback()}}
                    // name="arrow-left"
                    />
                </View>
                <View style={[styles.ms1,]} >
                    <Text style={[styles.textWhite, styles.fs2]}>{title}</Text>
                </View>
            </View>
        </View>
    </>
}

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: color.buttons,
        height: parameters.headerHeight,
    }
})

export default Header;

