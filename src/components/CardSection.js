import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';

const CardSection = ({images, titles, subTitles, urls}) => {
  onPressMe = () => {
    Linking.openURL(urls)
    .catch(err => console.error('An error occurred', err));
  }
return (

   <View style={styles.container}>
    <View style={styles.container1}>
      <Image source={images} style={{width: 50, height: 50}} />
      <Text style={styles.title}>{titles}
      <Text style={styles.subTitle}>{"\n"} {subTitles}</Text></Text>
    </View>
    <View style={styles.container2}>
      <Image source={images} style={{width: 300, height: 205}} />
    </View>
    <View style={styles.container3}>
      <Button
        onPress={onPressMe}
        title="Buy Now!"
        color="#333"
      />
    </View>
   </View>
);
};

const styles = {
   container: {
     flex: 1
   },
   container1: {
     margin: 1,
     flexDirection: 'row',
     justifyContent: 'flex-start',
     flex: 1
   },
   container2: {
     position: 'absolute',
     top: 55,
     right: 0,
     left: 0,
     bottom: 0
   },
   container3: {
     position: 'absolute',
     top: 262,
     right: 0,
     left: 0,
     bottom: 0
   },
   title: {
     fontWeight: 'bold',
     margin: 5,
     flexDirection: 'column',
     justifyContent: 'flex-start'
   },
   subTitle: {
     fontWeight: 'normal'
   }
};

export { CardSection };
