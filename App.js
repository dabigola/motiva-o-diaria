import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function App() {
  const [tela, setTela] = useState('inicio');
  const [frase, setFrase] = useState(
    "Toque no botão e receba sua motivação do dia ✨"
  );

  const frases = [
    "Acredite em você.",
    "Nunca desista dos seus sonhos.",
    "Você é mais forte do que imagina.",
    "Cada dia é uma nova chance.",
    "O esforço de hoje é o sucesso de amanhã.",
    "Tudo começa com um passo.",
    "Você consegue.",
    "Confie no processo.",
    "Não pare agora.",
    "O melhor ainda está por vir."
  ];

  function novaFrase() {
    const numero = Math.floor(Math.random() * frases.length);
    setFrase(frases[numero]);
  }

  // ======================
  // TELA INICIAL
  // ======================
  if (tela === 'inicio') {
    return (
      <View style={styles.inicio}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.logo}>Motivação Diária</Text>
        <Text style={styles.subtitulo}>
          A motivação diária que você precisa 💙 
        </Text>

        <TouchableOpacity
          style={styles.botaoInicio}
          onPress={() => setTela('frases')}
        >
          <Text style={styles.textoBotao}>Começar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ======================
  // TELA DAS FRASES
  // ======================
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.titulo}>Motivação Diária</Text>

      <View style={styles.card}>
        <Text style={styles.frase}>{frase}</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={novaFrase}>
        <Text style={styles.textoBotao}>Nova frase</Text>
      </TouchableOpacity>

      {/* BOTÃO VOLTAR */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => setTela('inicio')}
      >
        <Text style={styles.textoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // TELA INICIAL
  inicio: {
    flex: 1,
    backgroundColor: '#1e40af',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitulo: {
    color: '#c7d2fe',
    fontSize: 18,
    marginBottom: 50,
    textAlign: 'center',
  },

  botaoInicio: {
    backgroundColor: '#22c55e',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
  },

  // TELA FRASES
  container: {
    flex: 1,
    backgroundColor: '#4f46e5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginBottom: 25,
    width: '100%',
  },

  frase: {
    fontSize: 22,
    textAlign: 'center',
    color: '#111827',
  },

  botao: {
    backgroundColor: '#22c55e',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
  },

  botaoVoltar: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textoVoltar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
