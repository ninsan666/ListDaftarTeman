import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Modal, TouchableOpacity } from 'react-native';

export default function Contact({ gambar, judul, telpon, deskripsi }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.telp}>{telpon}</Text>
        <Button title="Lihat" onPress={() => setModalVisible(true)} />
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.backButtonText}>Kembali</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Detail Data</Text>
          </View>
          <Text style={styles.modalTitle}>Detail Informasi</Text>
          <Image source={gambar} style={styles.modalImage} />
          <Text style={styles.modalText}>Nama: {judul}</Text>
          <Text style={styles.modalText}>Telepon: {telpon}</Text>
          <Text style={styles.modalText}>Deskripsi: {deskripsi}</Text>
          <Button title="Home" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    marginBottom: 10,
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center', // Center the header content
  },
  backButton: {
    position: 'absolute', // Absolute positioning to the left
    left: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 24, // Increase the font size for the header title
    fontWeight: 'bold',
    marginLeft: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});
