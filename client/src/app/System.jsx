import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../Components/Header';
import { NewRequestButton, LearnMoreButton, MyRequestsButton, OtherInformationButton } from '../Components/Buttons';
import { useRouter } from 'expo-router'

const router = useRouter();
const SystemPage = () => {
const handleLogout = () => router.push("/"); // Define handleLogout before usage

  return (
    <View style={styles.container}>
      <Header username="Convidado" onLogout={handleLogout} />
      <NewRequestButton navigation={navigation} />
      <MyRequestsButton navigation={navigation}/>
      <LearnMoreButton navigation={navigation} />
      <OtherInformationButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SystemPage;
