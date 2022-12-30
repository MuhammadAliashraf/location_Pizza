import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../style/style';

 export default function PizzaButton(props) {
  const {label, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.btn,styles.bgOrange]}>
        <Text style={[styles.textWhite,styles.textCenter,]}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
}
// export default PizzaButton;