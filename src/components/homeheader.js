import react from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import styles from "../style/style";
import { withBadge, Button, Icon, SocialIcon } from "react-native-elements";

function HomeHeader() {

    const BadgeIcon = withBadge(0);

    return <>
        <View style={[styles.bgOrange,]}>
            <View style={[styles.alignItemsCenter, styles.flexRow, styles.ms1,styles.justifyContentBetween]} >
                <Icon
                    type="material-community"
                    name="menu"
                    color="white"
                    size={32}
                />
                <View style={[styles.alignItemsCenter, styles.justifyContentCenter]} >
                    <Text style={[styles.textBlack, styles.fs2]} >FoodPAA</Text>
                </View>
                <View style={[styles.me2]} >  
                    <Icon
                        type="material-community"
                        name="shoppingcart"
                        color="white"
                        size={32}
                    />
                    <BadgeIcon
                        type="material-community"
                        name="cart"
                        size={32}
                        color="white"
                    />
                </View>
            </View>
        </View>
    </>
}

export default HomeHeader;