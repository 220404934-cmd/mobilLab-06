import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={stiller.kart}>
      <Image 
        source={require('../assets/profile.jpg')} 
        style={stiller.avatar} 
      />
      <Text style={stiller.isim}>Sara Batal</Text>
      <Text style={stiller.rol}>Bilgisayar Mühendisliği Öğrencisi</Text>
    </View>
  );
}

const stiller = StyleSheet.create({
  kart: {
    backgroundColor: '#fff',     // Kartın arka plan rengi (beyaz)
    padding: 20,                 // İç boşluk
    borderRadius: 15,            // Köşeleri yuvarlat
    alignItems: 'center',        // Ortaya hizala
    marginVertical: 10,          // Üst ve alt boşluk

    // Gölge (Shadow)
    shadowColor: '#000',         // iOS için gölge rengi
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1,          // Gölgenin saydamlığı
    shadowRadius: 4,             // Gölge yayılma yarıçapı
    elevation: 3,                // Android için gölge
  },

  avatar: {
    width: 100,                  // Genişlik
    height: 100,                 // Yükseklik
    borderRadius: 50,            // Daire yapmak için yarı genişlik kadar
    marginBottom: 10,            // Alt boşluk
  },

  isim: {
    fontSize: 20,                // Yazı boyutu
    fontWeight: 'bold',          // Kalın yazı
    color: '#101215',            // Yazı rengi (koyu gri)
  },

  rol: {
    fontSize: 16,                // Yazı boyutu
    color: 'gray',               // Yazı rengi
  },
});