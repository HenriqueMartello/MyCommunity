import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: '#f0f0f0',
      },
      icon: {
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
      },
      userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
      },
      greeting: {
        fontSize: 16,
      },
      logoutButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#f00', // Cor de fundo do botão 
      },
      logoutButtonText: {
        color: '#fff', // Cor do texto do botão 
        fontWeight: 'bold',
      }
  });

export { styles }