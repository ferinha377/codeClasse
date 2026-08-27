import { View,StyleSheet,Text, TouchableOpacity } from "react-native";

export default function EstilizacaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu aplicativo</Text>
      <Text style={styles.subtitulo}>disciplina</Text>
      <Text style={styles.descricao}>Programação</Text>
      <TouchableOpacity style= {styles.botao}>
        <Text style={styles.textoBotao}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#e11'
  },
  titulo: {
    color: '#000080',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  subtitulo:{
    fontSize:20,
    fontWeight: '400',
    textDecorationLine: 'underline',
    color: '#000000',
  },
  descricao:{
    fontSize: 16
  },
  botao:{
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    width: 180,
    height: 200,
  },
  const styles = StyleSheet.create({
    textoBotao:{
      padding: 20,
      fontSize: 25,
      fontWeight: 'bold',
    },
});
