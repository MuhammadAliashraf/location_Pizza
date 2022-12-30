import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import styles from "../../style/style";
import { Button, Icon, SocialIcon } from "react-native-elements";
import Swiper from "react-native-swiper";

export default function SigninwelcomeScreen({navigation}) {
    let we=()=>{
       alert("Under Working")
    }
    return <>
        <View style={[styles.bgWhite, styles.h100]} >
            <View>
                <Text style={[styles.fs1, styles.textBlack, styles.textCenter, styles.mt5]} >Discover Hotel</Text>
                <Text style={[styles.fs3, styles.textBlack, styles.textCenter]} >In Your Area</Text>
            </View>
            {/* <View style={[styles.justifyContentCenter, { flex: 4 }]}>
                    <Swiper>
                        <View style={[styles.slide1]}>
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpMJ8JzyShbD5sl5tK3qEi3K6RAA-8WMAngfgWSCnU5K8NsZHES3W7_vBb3l3pNAKvfs&usqp=CAU"}}
                            style={[styles.h100,styles.w100]}
                            />
                        </View>
                    </Swiper>
                </View> */}
            <View style={[styles.p2, styles.mt5,]}>
                <View style={[styles.mb2, styles.rounded]}>
                    <Button onPress={()=>{navigation.navigate("Signin")}} title="Sign in" />
                </View>
                <View style={[styles.mb2, styles.rounded]}>
                    <Button onPress={we} title="Create an Account" />
                </View>
            </View>
        </View>
    </>
}
