import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Header = (props) => {
  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View style={styles.Heading}>
        <TouchableOpacity style={{padding:10}}>
          <Entypo name="chevron-small-left" size={35} color={'#313B49'} />
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.Midtext}>{props.HeaderText?props.HeaderText: '자유톡'}</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity style={{padding:10}}>
            <Ionicons name="notifications" size={30} color={'#AFB9CA'} />
            {/* <View style={styles.NoteNumberView}>
              <Text style={styles.Numbertext}>{'1'}</Text>
            </View> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    // flex: 1,
  },
  Heading: {
    // flex:1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 4,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
  },
  Midtext: {
    color: '#1D232B',
    fontSize: 18,
    fontFamily: 'Noto Sans',
  },
  NoteNumberView: {
    backgroundColor: 'red',
    borderRadius: 100,
    // height:15,
    // width:15,
    // borderRadius:7.5,
    alignSelf: 'flex-end',
    paddingHorizontal: 3,
    // marginRight: -6,
    top: -2,
    right: 9,
    position: 'absolute',
  },
  Numbertext: {
    alignSelf: 'center',
    fontSize: 10,
    color: 'white',
  },
});
export default Header;
