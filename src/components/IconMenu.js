import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';

const IconMenu = props => (
    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Icons name='menu' size={28} color='white' />
    </TouchableOpacity>
);

export default IconMenu;