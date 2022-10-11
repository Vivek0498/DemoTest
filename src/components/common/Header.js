import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {fontSize, hp, wp} from '../../helper/utilities';

const Header = ({title}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    borderWidth: wp(0.5),
    paddingVertical: hp(1),
    borderColor: colors.grayBorder,
  },
  titleText: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: fontSize(20),
  },
});

export default Header;
