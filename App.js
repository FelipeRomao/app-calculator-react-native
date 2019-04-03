import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Botao from './Botao';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {resultado : '0'};

    this.btnClick = this.btnClick.bind(this)
  }

  btnClick(b) {
    let s = this.state

    if(b == 'C') {
      s.resultado = '0'
    } else if(b == '=') {
      s.resultado = eval(s.resultado)
    } else {
        if(s.resultado == '0') {
          s.resultado = b
        } else {
          s.resultado += b
        }
    }

    this.setState(s)
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.linha}>
            <Text style={styles.textoResultado}>{this.state.resultado}</Text>
        </View>

        <View style={styles.linha}>
          <Botao flexCustom='3' conteudoBotao='C' onPress={() => this.btnClick('C')} />
          <Botao conteudoBotao = '/' bg='#FD9526' onPress={() => this.btnClick('/')} />
        </View>

        <View style={styles.linha}>
          <Botao conteudoBotao='7' onPress={() => this.btnClick('7')} />
          <Botao conteudoBotao='8' onPress={() => this.btnClick('8')}/>
          <Botao conteudoBotao='9' onPress={() => this.btnClick('9')} />
          <Botao conteudoBotao='*' bg='#FD9526' onPress={() => this.btnClick('*')} />
        </View>

        <View style={styles.linha}>
          <Botao conteudoBotao='4' onPress={() => this.btnClick('4')} />
          <Botao conteudoBotao='5' onPress={() => this.btnClick('5')}/>
          <Botao conteudoBotao='6' onPress={() => this.btnClick('6')}/>
          <Botao conteudoBotao='-' bg='#FD9526' onPress={() => this.btnClick('-')} />
        </View>

        <View style={styles.linha}>
          <Botao conteudoBotao='1' onPress={() => this.btnClick('1')} />
          <Botao conteudoBotao='2' onPress={() => this.btnClick('2')} />
          <Botao conteudoBotao='3' onPress={() => this.btnClick('3')} />
          <Botao conteudoBotao='+' bg='#FD9526' onPress={() => this.btnClick('+')} />
        </View>

        <View style={styles.linha}>
          <Botao flexCustom='2' conteudoBotao='0' onPress={() => this.btnClick('0')} />
          <Botao conteudoBotao='.' onPress={() => this.btnClick('.')} />
          <Botao conteudoBotao='=' bg='#FD9526' onPress={() => this.btnClick('=')} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 23,
    flex : 1
  },

  linha : {
    flex : 1,
    flexDirection : 'row',
    backgroundColor : '#000000'
  },

  textoResultado : {
    fontSize : 70,
    flex : 1,
    color : '#FFFFFF',
    marginTop : -13,
    textAlign : 'right'
  }
});
