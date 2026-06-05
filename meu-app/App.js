import React from 'react';
import { FlatList, View } from 'react-native';
import Jogo from './componentes/Jogo';

export default function App() {

  const jogos = [
    {
      id: '1',
      nome: 'Minecraft',
      categoria: 'Sandbox',
      plataforma: 'PC',
      descricao: 'Jogo de construção em mundo aberto.',
      imagem: 'https://picsum.photos/300',
      data: '01/06/2026'
    },
    {
      id: '2',
      nome: 'EA FC 26',
      categoria: 'Esporte',
      plataforma: 'PS5',
      descricao: 'Simulador de futebol.',
      imagem: 'https://picsum.photos/301',
      data: '02/06/2026'
    },
    {
      id: '3',
      nome: 'GTA V',
      categoria: 'Ação',
      plataforma: 'PC',
      descricao: 'Mundo aberto e missões.',
      imagem: 'https://picsum.photos/302',
      data: '03/06/2026'
    }
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Jogo
            nome={item.nome}
            categoria={item.categoria}
            plataforma={item.plataforma}
            descricao={item.descricao}
            imagem={item.imagem}
            data={item.data}
          />
        )}
      />
    </View>
  );
}