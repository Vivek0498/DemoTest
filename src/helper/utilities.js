// Utility functions
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';

// Fontsize comman function
export const fontSize = val => RFValue(val, 812);

// Device wise width count
export const wp = val => widthPercentageToDP(val);

// Device wise height count
export const hp = val => heightPercentageToDP(val);

// Get stautsbar height
export const statusBar = getStatusBarHeight();
