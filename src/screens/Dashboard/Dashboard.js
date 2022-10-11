import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';

import Header from '../../components/common/Header';
import {colors} from '../../helper/colorConstant';
import {stringConst} from '../../helper/constants';
import {icons} from '../../helper/iconConstant';
import {product_list} from '../../helper/localData';
import {fontSize, hp, statusBar, wp} from '../../helper/utilities';

function Dashboard() {
  const renderItem = ({item, index}) => {
    var brands = item?.brands
      ?.map(e => {
        return e.name;
      })
      .join(', ');

    return (
      <View
        style={{
          paddingVertical: hp(2),
          paddingHorizontal: hp(3),
          borderBottomWidth: wp(0.3),
          borderBottomColor: colors.grayBorder,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={icons.accuprint}
            // source={item?.picture ? {uri: item?.picture} : icons.accuprint}
            style={{height: wp(22), width: wp(22), borderRadius: wp(11)}}
          />
          <View style={{flex: 1, marginLeft: wp(4.5)}}>
            <Text style={{fontSize: fontSize(16), color: colors.black}}>
              {item?.productName}
            </Text>
            <Text
              style={{
                marginTop: hp(0.8),
                fontWeight: 'bold',
                color: colors.black,
                fontSize: fontSize(16),
              }}>
              {'Price: '}
              <Text
                style={{
                  fontWeight: '400',
                }}>
                {item?.price}
              </Text>
            </Text>
            <Text
              style={{
                marginTop: hp(0.8),
                fontWeight: 'bold',
                color: colors.black,
                fontSize: fontSize(16),
              }}>
              {'Brands: '}
              <Text
                style={{
                  fontWeight: '400',
                }}>
                {brands}
              </Text>
            </Text>
          </View>
        </View>
        <View style={{marginTop: hp(2)}}>
          <Text
            style={{
              fontSize: fontSize(18),
              fontWeight: 'bold',
              color: colors.black,
            }}>
            {'Colors'}
          </Text>
          <FlatList
            data={['Red', 'Blue', 'Green']}
            style={{flexDirection: 'row'}}
            renderItem={({item: colorItem, idx}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: hp(1),
                  }}>
                  <View
                    style={{
                      height: wp(5),
                      width: wp(5),
                      borderRadius: wp(2.5),
                      borderColor: colors.black,
                      borderWidth: wp(0.5),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {item?.colors?.filter((val, indx) => {
                      return val === colorItem;
                    }).length > 0 && (
                      <View
                        style={{
                          height: wp(2.5),
                          width: wp(2.5),
                          borderRadius: wp(1.25),
                          backgroundColor: colors.black,
                        }}
                      />
                    )}
                  </View>
                  <Text
                    style={{
                      fontSize: fontSize(16),
                      color: colors.black,
                      marginHorizontal: wp(2.5),
                    }}>
                    {colorItem}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={stringConst.products} />

      <FlatList
        data={product_list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={styles.footerStyle} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: statusBar,
  },
  footerStyle: {
    height: hp(4),
  },
});
