import React, {Component} from "react"
import {Text} from 'react-native'

const IMCCAlc = (props)=>
<Text style={{fontWeight:'bold', fontSize:20, alignSelf:'center'}}>
    Seu IMC é {props.peso/(props.altura*props.altura)}
</Text>
export default IMCCAlc