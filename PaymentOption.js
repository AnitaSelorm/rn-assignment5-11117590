import { View, Text, Image } from 'react-native';

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

export default PaymentOption;