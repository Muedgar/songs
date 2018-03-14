import React from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './Index';

const Card = ({imageToShow, titleToShow, subTitleToShow, urlss}) => (
  <View style={styles.container}>
   <CardSection
    images={imageToShow}
    titles={titleToShow}
    subTitles={subTitleToShow}
    urls={urlss}
   />
  </View>
);

const styles = {
   container: {
     width: 300,
     height: 300,
     marginLeft: 10,
     marginBottom: 10,
     shadowOffset:{ width: 10, height: 10 },
     shadowColor: 'black',
     shadowOpacity: 0.5,
     backgroundColor: 'white',
     flexDirection: 'column',
     justifyContent: 'center',
     elevation: 1
   }
};

export { Card };
