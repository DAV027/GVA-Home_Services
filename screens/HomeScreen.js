import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import banner1 from '../assets/HS2.jpg';
import banner2 from '../assets/cleaning_offer.webp';
import banner3 from '../assets/painting.png';
import banner4 from '../assets/pest-control.png';

import cleaning from '../assets/cleaning.jpg';
import plumbing from '../assets/plumbing.jpg';
import painting from '../assets/painting.jpg';
import electrical from '../assets/electrical-s.jpeg';
import pest from '../assets/pest.jpeg';

const { width } = Dimensions.get('window');

const banners = [
  { source: banner1, title: 'Summer Sale!', subtitle: 'Up to 50% Off' },
  { source: banner2, title: 'Home Cleaning Service', subtitle: 'Flat ₹299' },
  { source: banner3, title: 'Painting Services', subtitle: '20% Discount' },
  { source: banner4, title: 'Pest Control Services', subtitle: 'Pest Free Home' },
];

const services = [
  { name: 'Cleaning Services', image: cleaning },
  { name: 'Plumbing Services', image: plumbing },
  { name: 'Painting', image: painting },
  { name: 'Electrical', image: electrical },
  { name: 'Pest Control', image: pest },
];

const servicesByUs = [
  { name: 'Cleaning', icon: 'broom' },
  { name: 'Painting', icon: 'format-paint' },
  { name: 'Pest Control', icon: 'bug' },
  { name: 'Floor Polishing', icon: 'floor-lamp' },
  { name: 'Home Repair', icon: 'tools' },
  { name: 'Packers & Movers', icon: 'truck-fast' },
  { name: 'Appliance Service', icon: 'fridge-outline' },
  { name: 'Facility Management', icon: 'office-building' },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const bannerScrollRef = useRef(null);
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (bannerIndex + 1) % banners.length;
      bannerScrollRef.current.scrollTo({ x: nextIndex * width, animated: true });
      setBannerIndex(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerIndex]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Top Bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#800000', padding: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="location-sharp" size={20} color="#fff" />
          <Text style={{ color: '#fff', marginLeft: 5 }}>Hyderabad</Text>
        </TouchableOpacity>
        <Ionicons name="notifications-outline" size={22} color="#fff" />
      </View>

      <ScrollView>
        {/* Banner Scroll (Auto-scroll with loop) */}
        <View style={{ backgroundColor: '#E0F7FA', paddingVertical: 20 }}>
          <ScrollView
            ref={bannerScrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
          >
            {banners.map((banner, index) => (
              <View key={index} style={{ width, alignItems: 'center' }}>
                <Image source={banner.source} style={{ width: width * 0.9, height: 180, borderRadius: 15 }} resizeMode="cover" />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#d32f2f', marginTop: 8 }}>{banner.title}</Text>
                <Text style={{ fontSize: 14 }}>{banner.subtitle}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Trending Services */}
        <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 10 }}>Trending Services</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((item, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  marginRight: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  width: 120,
                  marginBottom: 10,
                  elevation: 3,
                }}
              >
                <Text style={{ fontSize: 10, color: 'red' }}>NEW OFFER</Text>
                <Image source={item.image} style={{ width: 50, height: 50, marginVertical: 5, borderRadius: 8 }} />
                <Text style={{ fontSize: 12, textAlign: 'center' }}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Services By Us */}
        <View style={{ marginTop: 25, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 15 }}>Services By Us</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {servicesByUs.map((service, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => navigation.navigate('Booking', { serviceName: service.name })}
                style={{
                  width: '47%',
                  backgroundColor: '#fff',
                  marginBottom: 15,
                  borderRadius: 10,
                  padding: 10,
                  alignItems: 'center',
                  elevation: 2,
                }}
              >
                <MaterialCommunityIcons name={service.icon} size={40} color="#555" />
                <Text style={{ fontSize: 13, marginTop: 8, textAlign: 'center' }}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
