import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useTheme } from '../ThemeContext';

const transactions = [
  {
    id: '1',
    name: 'Apple Store',
    description: 'Entertainment',
    amount: '- $5.99',
    icon: require('../../assets/apple.png'),
  },
  {
    id: '2',
    name: 'Spotify',
    description: 'Music',
    amount: '- $12.99',
    icon: require('../../assets/spotify.png'),
  },
  {
    id: '3',
    name: 'Money Transfer',
    description: 'Transaction',
    amount: '$300',
    icon: require('../../assets/moneyTransfer.png'),
  },
  {
    id: '4',
    name: 'Grocery',
    description: 'Shopping',
    amount: '- $88',
    icon: require('../../assets/grocery.png'),
  },
];

export default function HomeScreen() {
  const { isDarkTheme } = useTheme();
  const styles = createStyles(isDarkTheme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profImage}
          source={require('../../assets/profile.png')}
        />
        <View>
          <Text style={styles.welcText}>Welcome back,</Text>
          <Text style={styles.name}>Anita Selorm</Text>
        </View>
        <View style={styles.search}>
          <Image
            style={[
              styles.icons,
              { tintColor: isDarkTheme ? 'white' : 'black' },
            ]}
            source={require('../../assets/search.png')}
          />
        </View>
      </View>
      <View style={styles.paymentInfo}>
        <Image
          style={styles.credCard}
          source={require('../../assets/Card.png')}
        />
        <View style={styles.paymentOptionContainer}>
          <PaymentOption
            icon={require('../../assets/send.png')}
            text="Sent"
            isDarkTheme={isDarkTheme}
          />
          <PaymentOption
            icon={require('../../assets/recieve.png')}
            text="Receive"
            isDarkTheme={isDarkTheme}
          />
          <PaymentOption
            icon={require('../../assets/loan.png')}
            text="Loan"
            isDarkTheme={isDarkTheme}
          />
          <PaymentOption
            icon={require('../../assets/topUp.png')}
            text="Topup"
            isDarkTheme={isDarkTheme}
          />
        </View>
      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionText}>Transaction</Text>
        <Text style={{ color: 'blue' }}>See All</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionItem item={item} isDarkTheme={isDarkTheme} />
        )}
      />
    </View>
  );
}

const PaymentOption = ({ icon, text, isDarkTheme }) => {
  const styles = createStyles(isDarkTheme);
  return (
    <View style={styles.paymentOption}>
      <View style={styles.iconsContainer}>
        <Image
          style={[
            styles.icons,
            { tintColor: isDarkTheme ? 'white' : 'black' },
          ]}
          source={icon}
        />
      </View>
      <Text style={styles.optionsText}>{text}</Text>
    </View>
  );
};

const TransactionItem = ({ item, isDarkTheme }) => {
  const styles = createStyles(isDarkTheme);
  return (
    <View style={styles.transaction}>
      <View style={styles.iconsContainer}>
        <Image
          style={
            item.name === 'Spotify'
              ? null
              : { tintColor: isDarkTheme ? 'white' : 'black' }
          }
          source={item.icon}
        />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionDescription}>{item.description}</Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          {
            color: item.amount.includes('$300')
              ? 'blue'
              : isDarkTheme
              ? 'white'
              : 'black',
          },
        ]}
      >
        {item.amount}
      </Text>
    </View>
  );
};

const createStyles = isDarkTheme => {
const styles =  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 20,
      backgroundColor: isDarkTheme ? '#0A0115' : '#ffffff',
    },
    header: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems: 'center',
      marginBottom: 20,
      paddingTop: 20,
    },
    profImage: {
      width: 45,
      height: 45,
      borderRadius: 100,
      backgroundColor: '#FFFFFF',
      marginRight: 20
    },
    welcText: {
      fontSize: 14,
      fontFamily: 'Poppins',
      opacity: 0.5,
      color: isDarkTheme ? 'white' : 'black',
    },
    name: {
      fontSize: 18,
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: isDarkTheme ? 'white' : 'black',
    },
    search: {
      width: 40,
      height: 40,
      backgroundColor: isDarkTheme ? '#1F1E2E' : '#F8F8F8',
      borderRadius: 100,
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginLeft: 120,
      alignItems: 'center'
    },
    credCard: {
      width: '100%',
      height: 250,
      marginTop: 20,
      borderRadius: 10,
    },
    paymentOptionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    paymentOption: {
      alignItems: 'center',
    },
    optionsText: {
      fontSize: 14,
      marginTop: 5,
      color: isDarkTheme ? 'gray' : 'black',
    },
    iconsContainer: {
      width: 50,
      height: 50,
      backgroundColor: isDarkTheme ? '#1F1E2E' : '#F8F8F8',
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icons: {
      width: 24,
      height: 24,
    },
    transactionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    transactionText: {
      fontSize: 18,
      fontWeight: '600',
      color: isDarkTheme ? 'white' : 'black',
    },
    transaction: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    transactionDetails: {
      flex: 1,
      marginLeft: 10,
    },
    transactionName: {
      fontSize: 16,
      fontWeight: '500',
      color: isDarkTheme ? 'white' : 'black',
    },
    transactionDescription: {
      color: isDarkTheme ? 'lightgray' : 'gray',
      fontSize: 12,
    },
    transactionAmount: {
      fontSize: 16,
      fontWeight: '500',
    },
  })
  return styles;
}
  
