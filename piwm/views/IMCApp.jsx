import React, { Component } from "react"
import { View, Text, TextInput, Image } from 'react-native'
import IMCCAlc from "./IMCCalc"

export default class IMCApp extends Component {
    constructor(props) {
        super(props)
        this.state = { altura: null, peso: null }
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 10 }}>IMC CALCULATOR</Text>
                
                <Text>Sua altura:</Text>
                
                <TextInput 
                onChangeText={(altura) => this.setState({altura:altura})} 
                placeholder="Altura em M" 
                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }}/>
                
                <Text>Seu peso:</Text>
                
                <TextInput 
                onChangeText={(peso) => this.setState({peso:peso})} 
                placeholder="Peso em Kg" 
                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }}/>
                
                <button style={{ width: 100, marginBottom: 10, alignSelf: 'center' }}>CALCULAR</button>
                
                <IMCCAlc altura={this.state.altura} peso={this.state.peso}/>
            </View>
        )
    }
}