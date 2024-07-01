import React from 'react';
import { View, FlatList, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Contact from './components/kontak';

const friends = [
  {
    id: '1',
    gambar: require('./assets/0.jpg'),
    judul: 'Leonardo DiCaprio',
    telpon: '0765535531',
    deskripsi: 'An American actor and film producer.'
  },
  {
    id: '2',
    gambar: require('./assets/tp.jpg'),
    judul: 'Entin',
    telpon: '0765535531',
    deskripsi: 'Your friend from school.'
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.homeButton} onPress={() => alert('Home Button Pressed')}>
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Daftar Kontak</Text>
      </View>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contact 
            gambar={item.gambar}
            judul={item.judul}
            telpon={item.telpon}
            deskripsi={item.deskripsi}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center', // Center the header content
  },
  homeButton: {
    position: 'absolute', // Absolute positioning to the left
    left: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  homeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 24, // Increase the font size for the header title
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
