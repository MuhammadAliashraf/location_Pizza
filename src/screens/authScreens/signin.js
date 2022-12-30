import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { color, parameters } from "../style/appcolors";
import Header from "../../components/header";
import styles from "../../style/style";
import { Button, Icon, SocialIcon } from "react-native-elements";


export default function Signin({navigation}) {
    return <>
        <View>
            <Header
                title="My Account"
                type="arrow-left"
                navigation={navigation}
            />
        </View >
        <View style={[styles.p2, styles.bgWhite, styles.h100]} >
            <View>
                <Text style={[styles.fs2, styles.textBlack]}   >Sign In</Text>
            </View>
            <View style={[styles.mb2, styles.mt2]} >
                <TextInput style={[styles.border1, styles.textBlack, styles.ps2, styles.rounded]} placeholderTextColor="black" placeholder="Email" />
            </View>
            <View style={[styles.mb2]}>
                <TextInput style={[styles.border1, styles.textBlack, styles.ps2, styles.rounded]} placeholderTextColor="black" placeholder="Password" />
            </View>
            <View style={[styles.mb2, styles.rounded]}>
                <Button onPress={() =>{navigation.navigate("HomeScr")}} title="Sign in" />
            </View>
            <View>
                <Text style={[styles.fs5, styles.textBlack, styles.textCenter]} >Forgot Password?</Text>
            </View>
            <View>
                <Text style={[styles.fs5, styles.textBlack, styles.textCenter, styles.mt2, styles.mb2]} >OR</Text>
            </View>
            <View style={[styles.mb2, styles.rounded]}>
                <Button onPress={() =>{}} title="FaceBook With Sign in" />
            </View>
            <View style={[styles.mb2, styles.rounded]}>
                <Button onPress={() => { }} title="Google With Sign in" />
            </View>
            <View style={[styles.flexCenter,styles.flexRow]} >
                <Text style={[styles.fs6, styles.textBlack,styles.me5]} >Forgot Password?</Text>
                    <Button onPress={() => { }} title="Create Account" />
            </View>
        </View>
    </>
}

