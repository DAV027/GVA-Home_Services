import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useBooking } from '../context/BookingContext'; 

const servicePrices = {
  'Cleaning': 400,
  'Plumbing Services': 500,
  'Painting': 700,
  'Electrical': 450,
  'Pest Control': 600,
  'Floor Polishing': 550,
  'Home Repair': 650,
  'Packers & Movers': 800,
  'Appliance Service': 500,
  'Facility Management': 750,
};

export default function BookingScreen({ route, navigation }) {
  const { serviceName } = route.params || { serviceName: 'Service' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { addBooking } = useBooking();

  const handleConfirmBooking = () => {
    if (!name || !address) {
      Alert.alert('Missing Info', 'Please fill in all fields');
      return;
    }

    const bookingAmount = servicePrices[serviceName] || 500; 

    const bookingData = {
      service: serviceName,
      name,
      address,
      date: selectedDate.toDateString(),
      amount: bookingAmount,
    };

    addBooking(bookingData);
    navigation.navigate('Payment', {
      bookingData,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
        {serviceName} Booking
      </Text>

      <Text style={{ fontWeight: '600' }}>Your Name</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 10,
          marginBottom: 15,
        }}
      />

      <Text style={{ fontWeight: '600' }}>Address</Text>
      <TextInput
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
        multiline
        numberOfLines={3}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 10,
          marginBottom: 15,
        }}
      />

      <Text style={{ fontWeight: '600', marginBottom: 5 }}>Select Date</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 10,
          marginBottom: 15,
        }}
      >
        <Text>{selectedDate.toDateString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) setSelectedDate(date);
          }}
        />
      )}

      <TouchableOpacity
        onPress={handleConfirmBooking}
        style={{
          backgroundColor: '#800000',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          Confirm Booking & Pay
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
