import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  const clearBookings = () => setBookings([]);

  return (
    <BookingContext.Provider value={{ bookings, addBooking, clearBookings }}>
      {children}
    </BookingContext.Provider>
  );
};
