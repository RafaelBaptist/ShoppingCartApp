import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  const [products, setProducts] = useState([
    { id: "1", name: "Mouse gamer", price: 289.9 },
    { id: "2", name: "Teclado magnético", price: 320.67 },
    { id: "3", name: "Monitor 27'' Full HD", price: 1299.99 },
    { id: "4", name: "Fone Bluetooth", price: 199.5 },
    { id: "5", name: "Cadeira Gamer", price: 849.0 },
    { id: "6", name: "Notebook i7 16GB RAM", price: 3999.9 },
    { id: "7", name: "HD Externo 1TB", price: 349.75 },
    { id: "8", name: "Hub USB-C 5 em 1", price: 120.0 },
    { id: "9", name: "Webcam Full HD", price: 215.99 },
    { id: "10", name: "Mousepad RGB", price: 89.9 },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContainer}>
        <Text style={styles.title}>Lista de produtos</Text>
        <TouchableOpacity style={styles.cartButton}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>3</Text>
          </View>
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center ",
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: "absolute",
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
  },
});
