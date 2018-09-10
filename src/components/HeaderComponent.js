import React from 'react';
import { Text, View } from 'react-native';
import { Input, Button, Header, Left, Right, Title, Body, Container } from 'native-base';
import Icons from 'react-native-vector-icons/Entypo';

class HeaderComponent extends React.Component {
    render() {
        return (
            <View style={{ height: 60 }}>
                <Header>
                    <Left>
                        <Title style={{marginLeft: 20, fontSize: 18}}>
                            {this.props.itemLeft}
                        </Title>
                    </Left>
                    {this.props.itemBody ? <Body>{this.props.itemBody}</Body> : null}
                    <Right>
                        <Icons name='dots-three-vertical' size={18} color='white' />
                    </Right>
                </Header>
            </View>
        );
    }
}

export default HeaderComponent;