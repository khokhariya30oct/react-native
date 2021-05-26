import React from 'react';
import { Text,View,StyleSheet } from 'react-native';
import ImageDetails from '../Components/ImageDetails'


const ImageScreen = () => {
    return (
        <View>
            <ImageDetails title="Forest" imageSrc={require('../assets/forest.jpg')}></ImageDetails>
            <ImageDetails title="Beach" imageSrc={require('../assets/beach.jpg')}></ImageDetails>
            <ImageDetails title="Mountain" imageSrc={require('../assets/mountain.jpg')}></ImageDetails>
        </View>
    );
};


const styles = StyleSheet.create({

});

export default ImageScreen;