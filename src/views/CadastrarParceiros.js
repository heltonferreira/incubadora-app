import React, { Component } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
import HeaderComponent from '../components/HeaderComponent';
import IconMenu from '../components/IconMenu';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import Colors from '../utils/Colors';


const { buttonCadastrarParceiro } = Colors;
const ButtonCadastrar = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 40 }}>
    <Button style={{ backgroundColor: buttonCadastrarParceiro, borderColor: buttonCadastrarParceiro }}>
      <Text>Cadastrar</Text>
    </Button>
  </View>
)

class CadastrarParceiros extends Component {
  render() {
    const Icon = IconMenu(this.props);
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent icon={ Icon } />
        <ScrollView>
          <Form>
              <Item stackedLabel>
                <Label>Usuário</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Nome</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Ramo da atividade</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Telefone</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Descrição</Label>
                <Input />
              </Item>
            </Form>
            <ButtonCadastrar />
          </ScrollView>
      </View>
    )
  }
}

export default CadastrarParceiros;