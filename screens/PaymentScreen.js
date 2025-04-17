import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function PaymentScreen({ route, navigation }) {
  const { bookingData } = route.params;

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !expiry || !cvv || !name) {
      Alert.alert('Error', 'Please fill in all card details');
      return;
    }

    Alert.alert('Payment Successful', `Your booking for ${bookingData.service} is confirmed!`);

    setTimeout(() => {
      navigation.navigate('MainTabs');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Payment</Text>

      <View style={styles.summary}>
        <Text style={styles.serviceText}>{bookingData.service}</Text>
        <Text>Date: {bookingData.date}</Text>
        <Text>Amount: ₹{bookingData.amount || '499'}</Text>
      </View>

      <Text style={styles.label}>Cardholder Name</Text>
      <TextInput
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Card Number</Text>
      <TextInput
        placeholder="1234 5678 9012 3456"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        maxLength={16}
        style={styles.input}
      />

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Expiry</Text>
          <TextInput
            placeholder="MM/YY"
            value={expiry}
            onChangeText={setExpiry}
            keyboardType="numeric"
            maxLength={4}
            style={styles.input}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.label}>CVV</Text>
          <TextInput
            placeholder="123"
            value={cvv}
            onChangeText={setCvv}
            secureTextEntry
            keyboardType="numeric"
            maxLength={3}
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Ionicons name="lock-closed" size={20} color="white" />
        <Text style={styles.payText}>Pay ₹{bookingData.amount || '499'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summary: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  label: {
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  payButton: {
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  payText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
