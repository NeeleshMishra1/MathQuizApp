import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './style';
import Icon from '../../assets';
import strings from '../../utils/string';

type RootStackParamList = {
  bottom: undefined;
  login: undefined;
};

const Splace = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSplace = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'detailscreen' }],
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSplace();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container1}>
      <Image style={styles.splaceImage} source={Icon.splace} />
      <Text style={styles.splaceText}>{strings.learn}</Text>
    </View>
  );
};

export default Splace;

