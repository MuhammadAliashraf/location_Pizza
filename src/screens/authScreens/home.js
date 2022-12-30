import react, { useState } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, TextInput, Pressable } from "react-native";
import styles from "../../style/style";
import { Button, Icon, SocialIcon } from "react-native-elements";
import HomeHeader from "../../components/homeheader";
import PizzaButton from "../../components/button";
import { FlatList } from "react-native-gesture-handler";
import { filterData } from "../../global/data";
import Header from "../../components/header";
function HomeScr() {
    const [indexCheak, setindexCheak] = useState("0")
    return <View>
        <HomeHeader />
        <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={true}>
            <View>
                <View style={[styles.flexRow, styles.justifyContentCenter, styles.justifyContentAround, styles.mt1]} >
                    <PizzaButton onPress={() => { }} label="Delivery" />
                    <PizzaButton onPress={() => { }} label="Pick up" />
                </View>
            </View>
            <View style={[styles.flexRow, styles.justifyContentAround, styles.mt1]} >
                <View style={[styles.flexRow, styles.alignItemsCenter, styles.bgOrange, , styles.rounded, styles.px3]}>
                    <Icon
                        type="material-community"
                        name="menu"
                        color="black"
                        size={28}
                    />
                    <Text style={[styles.textBlack, styles.ms2]} >22 Street </Text>
                </View>
                <View style={[styles.flexRow, styles.alignItemsCenter, styles.bgOrange, , styles.rounded]}>
                    <Text style={[styles.textBlack, styles.px4,]} > icon Now</Text>
                </View>
            </View>
            <View style={[styles.mt1]} >
                <Text style={[styles.textBlack, styles.bgOrange, styles.textBold, styles.fs3, styles.ps2]} >Categories</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicaton={true}
            >
                <View style={[styles.flexCenter, styles.flexRow, styles.justifyContentCenter, styles.justifyContentAround,
                styles.mt1]}>
                    <TouchableOpacity >
                        <Text style={[styles.p1, styles.p1, styles.bgOrange, styles.rounded, styles.textBlack,]} >Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={[styles.p1, styles.bgOrange, styles.rounded, styles.textBlack,]} >Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={[styles.p1, styles.bgOrange, styles.rounded, styles.textBlack,]} >Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={[styles.p1, styles.bgOrange, styles.rounded, styles.textBlack,]} >Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.p1, styles.bgOrange, styles.rounded, styles.textBlack,]} >Cards</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={[styles.mt1]} >
                <Text style={[styles.textBlack, styles.bgOrange, styles.textBold, styles.fs3, styles.ps2]} >Free Delivery Now</Text>
            </View>
        </ScrollView>
    </View>
}
export default HomeScr;