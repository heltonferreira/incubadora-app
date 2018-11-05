import React from 'react';
import { Text, View } from 'react-native';
import { Input, Button, Header, Left, Right, Title, Body, Container } from 'native-base';
import Icons from 'react-native-vector-icons/Entypo';
import Styles from '../utils/Styles';

const Icon = props => {
    return props.icon ? props.icon : null;
}

class HeaderComponent extends React.Component {
    render() {
        return (
            <Header style={ Styles.HeaderHolder }>
                <Left>
                    {Icon(this.props)}
                    <Title style={ Styles.HeaderTitle }>
                        {this.props.itemLeft}
                    </Title>
                </Left>
                {this.props.itemBody ? <Body>{this.props.itemBody}</Body> : null}
                <Right>
                    <Icons name='dots-three-vertical' size={18} color='white' />
                </Right>
            </Header>
        );
    }
}

export default HeaderComponent;