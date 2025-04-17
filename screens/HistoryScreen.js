import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBooking } from '../context/BookingContext';

export default function HistoryScreen() {
  const { bookings } = useBooking();

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Booking History</Text>

      {bookings.length === 0 ? (
        <Text>No bookings yet.</Text>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: '#f9f9f9',
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: '#ddd',
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>{item.service}</Text>
              <Text>Name: {item.name}</Text>
              <Text>Address: {item.address}</Text>
              <Text>Date: {item.date}</Text>
              <Text>Amount: ₹{item.amount || 'N/A'}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
