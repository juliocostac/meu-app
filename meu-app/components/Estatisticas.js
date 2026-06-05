import React, { useState } from 'react';

import {
  View,
  Text,
  Button,
  TextInput,
  Alert
} from 'react-native';

export default function Estatisticas() {

  const [curtidas, setCurtidas] = useState(0);
  const [comentarios, setComentarios] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [textoComentario, setTextoComentario] =
    useState('');

  function curtir() {
    setCurtidas(curtidas + 1);
  }

  function descurtir() {
    if (curtidas > 0) {
      setCurtidas(curtidas - 1);
    }
  }

  function comentar() {
    setComentarios(comentarios + 1);
  }

  function enviarComentario() {

    if (textoComentario.trim() === '') {
      return;
    }

    setComentarios(comentarios + 1);

    Alert.alert(
      'Sucesso',
      'Comentário enviado!'
    );

    setTextoComentario('');
  }

  return (
    <View>

      <Text>
        ❤️ Curtidas: {curtidas}
      </Text>

      <Text>
        💬 Comentários: {comentarios}
      </Text>

      <Text>
        {favorito
          ? '⭐ Favoritado'
          : '☆ Não Favoritado'}
      </Text>

      <Button
        title="Curtir"
        onPress={curtir}
      />

      <Button
        title="Descurtir"
        onPress={descurtir}
      />

      <Button
        title="Comentar"
        onPress={comentar}
      />

      <Button
        title="Favoritar"
        onPress={() =>
          setFavorito(!favorito)
        }
      />

      <TextInput
        placeholder="Digite um comentário"
        value={textoComentario}
        onChangeText={setTextoComentario}
      />

      <Button
        title="Enviar"
        onPress={enviarComentario}
      />

    </View>
  );
}