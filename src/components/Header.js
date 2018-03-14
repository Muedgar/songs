import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ showText }) => (
   <View style={styles.container}>
   <View style={styles.containerStyle}>
   <Text style={styles.headerStyles}>{showText}</Text>
   </View>
   </View>
);

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        bottom: 470,
        right: 0,
        left: 0
    },
    containerStyle: {
      borderColor: 'black',
      flexDirection: 'row',
      justifyContent: 'center',
      shadowOffset:{ width: 10, height: 10 },
      shadowColor: 'black',
      shadowOpacity: 0.4,
      elevation: 1,
      flex: 1
    },
    headerStyles: {
      color: 'black',
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'normal',
    }
};

export { Header };
