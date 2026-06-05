import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';

import Estatisticas from './Estatisticas';

export default function Jogo(props) {

  const [mostrarDescricao, setMostrarDescricao] =
    useState(false);

  return (
    <View style={styles.card}>

      <Image
        source={{ uri: props.imagem }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        {props.nome}
      </Text>

      <Text>
        Categoria: {props.categoria}
      </Text>

      <Text>
        Plataforma: {props.plataforma}
      </Text>

      <Text>
        Data: {props.data}
      </Text>

      <Button
        title={
          mostrarDescricao
            ? 'Ocultar descrição'
            : 'Mostrar descrição'
        }
        onPress={() =>
          setMostrarDescricao(!mostrarDescricao)
        }
      />

      {mostrarDescricao && (
        <Text>{props.descricao}</Text>
      )}

      <Estatisticas />

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 15,
    margin: 10,
    borderRadius: 10
  },

  imagem: {
    width: 250,
    height: 200,
    alignSelf: 'center'
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  }
});