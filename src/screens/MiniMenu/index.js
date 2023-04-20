import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function PopUpMenu() {
    return ( <>
        <TouchableOpacity>
            <Icon name="plus-circle-outline" size={26} color ={'#212121'}/>
        </TouchableOpacity>
        </>
    );
}