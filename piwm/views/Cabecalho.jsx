import React, {Component} from "react"
import {View,Text} from 'react-native'

export default class Cabecalho extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:22, fontWeight:'bold'}}>{this.props.nome}</Text>
                <Text style={{textAlign:'center'}}>{this.props.curso}</Text>
            </View>
        )
    }
}