import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

class Botao extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        
        let flexCustom = 1
        if(props.flexCustom) {
            flexCustom = parseInt(props.flexCustom)
        }

        let bg = '#E0E0E0E0'
        if(props.bg) {
            bg = props.bg
        }
        
        this.styles = StyleSheet.create({
            botaoArea : {
                flex : flexCustom,
                justifyContent : 'center',
                alignItems : 'center',
                borderWidth : 1,
                borderColor : '#999999',
                backgroundColor : bg
            },

            textoBotao : {
                fontSize : 30,
                color : 'black'
            }
        })
    }
   
    render() {
        return(
            <TouchableOpacity style={this.styles.botaoArea} onPress={this.props.onPress}>
                <Text style={this.styles.textoBotao}>{this.props.conteudoBotao}</Text>
            </TouchableOpacity>
        );
    }
}

export default Botao