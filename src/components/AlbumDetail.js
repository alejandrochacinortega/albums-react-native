import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { Card, CardSection, Button, styles } from './';

const AlbumDetail = ({ album }) => {
  const {
    albumDetailTextContainer,
    albumDetailThumbnailStyle,
    albumDetailThumbnailContainer,
    albumDetailTextStyle,
    albumDetailImageStyle
  } = styles;
  const { thumbnail_image, title, artist, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={albumDetailThumbnailContainer}>
          <Image
            source={{ uri: thumbnail_image }}
            style={albumDetailThumbnailStyle}
          />
        </View>
        <View style={albumDetailTextContainer}>
          <Text style={albumDetailTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{uri: image}} style={albumDetailImageStyle}/>
      </CardSection>
      <CardSection>
        <Button
          onPress={() => Linking.openURL(url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
