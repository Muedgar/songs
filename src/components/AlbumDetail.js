import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from './Index';

const AlbumDetail = () => (
  <ScrollView style={styles.container}>
   <Card
     urlss={'https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU'}
     imageToShow={require('./taylor.jpeg')}
     titleToShow="Taylor Swift"
     subTitleToShow="Red"
   />
   <Card
     urlss={'https://www.amazon.com/DAMN-Kendrick-Lamar/dp/B06Y4DGVZC'}
     imageToShow={require('./damn.jpeg')}
     titleToShow="Kendrick Lamar"
     subTitleToShow="Damn"
   />
   <Card
     urlss={'https://www.amazon.com/Wonder-Hillsong-United/dp/B0714FSNBJ'}
     imageToShow={require('./wonder.jpeg')}
     titleToShow="Hillsong United"
     subTitleToShow="Wonder"
   />
   <Card
     urlss={'https://www.amazon.com/Peace-Project-Hillsong-Worship/dp/B074JS665Z'}
     imageToShow={require('./hillsongs.jpeg')}
     titleToShow="Hillsong Worship"
     subTitleToShow="The Peace Project"
   />
   <Card
     urlss={'https://www.amazon.com/Touching-Heaven-Changing-Hillsong-Australia/dp/B00000DLZK'}
     imageToShow={require('./australia.jpeg')}
     titleToShow="Hillsong Australia"
     subTitleToShow="Touching Heaven Changing Earth"
   />
  </ScrollView>
);

const styles = {
  container: {
      position: 'absolute',
      top: 90,
      right: 0,
      bottom: 0,
      left: 0
  }
};

export { AlbumDetail };
