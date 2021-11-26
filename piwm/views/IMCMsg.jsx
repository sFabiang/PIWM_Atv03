import React from "react"
import { Text } from 'react-native'

const message = (props)=>{
    if(props.IMC<17) return <Text style={{fontSize:20}}>Muito baixo do peso!!!</Text>
    if(props.IMC<=18.49) return <Text style={{fontSize:20}}>Abaixo do peso!!!</Text>
    if(props.IMC<=24.99) return <Text style={{fontSize:20}}>Peso normal.</Text>
    if(props.IMC<=29.99) return <Text style={{fontSize:20}}>Acima do peso!!!</Text>
    if(props.IMC<=34.99) return <Text style={{fontSize:20}}>Obesidade I</Text>
    if(props.IMC<=39.99) return <Text style={{fontSize:20}}>Obesidade II (severa)</Text>
    return <Text style={{fontSize:20}}>Obesidade III (mórbida)</Text>
}

export default message