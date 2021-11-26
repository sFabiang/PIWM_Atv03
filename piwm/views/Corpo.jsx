import React, {Component} from "react"
import {View,Image} from 'react-native'

export default class Corpo extends Component{
    render(){
        let pic = {uri:'https://si3.ufc.br/sigaa/verFoto?idArquivo=1316858&key=223d9d1ff3990846473511c1776e9b50'}
        return(
            <Image source={pic} style={{width:100,height:100}}/>
        )
    }
}