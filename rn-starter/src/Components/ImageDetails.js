import React from 'react';
import { Text,View,StyleSheet,Image } from 'react-native';



const ImageDetails = ({imageSrc,title}) => {
    return (
        <View>
            <Image source={imageSrc}></Image>
            <Text>{title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

});

export default ImageDetails;