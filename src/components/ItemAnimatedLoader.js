import React from 'react';
import { Dimensions } from 'react-native';
import ContentLoader from 'react-native-content-loader';
import { Rect, Circle } from 'react-native-svg';


const { height, width } = Dimensions.get('window');
const ItemAnimatedLoader = (props) => (
    <ContentLoader height={100} width={width} duration={1000}>
        <Rect x="10%" y="15" rx="4" ry="4" width="60%" height="10"/>
        <Rect x="10%" y="30" rx="4" ry="4" width="60%" height="10"/>
        <Circle cx="80%" cy="27" r="10%"/>
    </ContentLoader>
);

export default ItemAnimatedLoader;