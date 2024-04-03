import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MyRequests = ({ navigation }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch user's existing requests from the backend
    // Update the requests state with the fetched data
    // Example: fetchRequests().then(data => setRequests(data));
  }, []);

  const handleCancelRequest = (requestId) => {
    // Implement logic to cancel the request with the given ID
    // Example: cancelRequest(requestId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Requests</Text>
      {requests.length === 0 ? (
        <Text>No existing requests for this user.</Text>
      ) : (
        requests.map(request => (
          <View key={request.id}>
            <Text>{request.title}</Text>
            <Text>{request.description}</Text>
            <Button
              title="Cancel"
              onPress={() => handleCancelRequest(request.id)}
            />
          </View>
        ))
      )}
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default MyRequests;