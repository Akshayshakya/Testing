/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,TouchableOpacity,
  StatusBar,Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './src/Components/Header/Header'
import {
  Colors,
  DebugInstructions,

  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onMessage=(data) =>{
    alert('Clicked Webview Button');
  }
  return (
    <SafeAreaView style={{flex:1}}>

    <Header />
    <ScrollView >
        <View
          style={{
            backgroundColor:'white'
          }}>
<View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
<Image style={{width:45,height:45,borderRadius:22}} source={require('./src/images/Profile.png')} />
<View style={{flexDirection:'column',justifyContent:'flex-start',marginRight:90}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {'안녕 나 응애 '}
        
      </Text>
      <Image style={{width:21,height:21}} source={require('./src/images/Ellipse.png')} />
      <Text
        style={[
          styles.sectionDescription,
          {
            color: '#919EB6'
          },
        ]}>
        {'1일전'}
      </Text>
      </View>

      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: '#919EB6',
           // marginLeft:15
          },
        ]}>
        {'165cm 53kg'}
      </Text>
      </View>
</View>
<TouchableOpacity style={{flexDirection:'column',justifyContent:'center', height:30,width:80,backgroundColor:'#01B99F',borderRadius:15,alignItems:'center'}}>
<Text
        style={[
          styles.sectionDescription,
          {
            color: 'white',
         
          },
        ]}>
        {'팔로우'}
      </Text>
</TouchableOpacity>
</View>

<Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
            marginLeft:15,
            marginTop:15
          },
        ]}>
        {'지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?'}
        
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: '#313B49',
            marginLeft:15,
            marginTop:15
          },
        ]}>
        {`지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
혹시 어떤 상품이 제일 괜찮았어? 

후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 
제일 재밌었다던데 맞아???

올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!`}
      </Text>

      <View style={{marginTop:15,flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
<TouchableOpacity style={{ borderWidth:0.5,borderColor:'#CED3DE',flexDirection:'column',justifyContent:'center', height:30,width:80,backgroundColor:'#F7F8FA',borderRadius:15,alignItems:'center'}}>
<Text
        style={[
          styles.sectionDescription,
          {
            color: '#5A6B87',
         
          },
        ]}>
        {'#2023'}
      </Text>
</TouchableOpacity>
<TouchableOpacity style={{ borderWidth:0.5,borderColor:'#CED3DE',flexDirection:'column',justifyContent:'center', height:30,width:140,backgroundColor:'#F7F8FA',borderRadius:15,alignItems:'center'}}>
<Text
        style={[
          styles.sectionDescription,
          {
            color: '#5A6B87',
         
          },
        ]}>
        {'#TODAYISMONDAY'}
      </Text>
</TouchableOpacity>

<TouchableOpacity style={{ borderWidth:0.5,borderColor:'#CED3DE',flexDirection:'column',justifyContent:'center', height:30,width:80,backgroundColor:'#F7F8FA',borderRadius:15,alignItems:'center'}}>
<Text
        style={[
          styles.sectionDescription,
          {
            color: '#5A6B87',
         
          },
        ]}>
        {'#TOP'}
      </Text>
</TouchableOpacity>
<TouchableOpacity style={{ borderWidth:0.5,borderColor:'#CED3DE',flexDirection:'column',justifyContent:'center', height:30,width:80,backgroundColor:'#F7F8FA',borderRadius:15,alignItems:'center'}}>
<Text
        style={[
          styles.sectionDescription,
          {
            color: '#5A6B87',
         
          },
        ]}>
        {'#POPS!'}
      </Text>
</TouchableOpacity>
</View>
<View style={{marginBottom:15, marginTop:15,flexDirection:'row',paddingHorizontal:10,justifyContent:'flex-start'}}>
<TouchableOpacity style={{ borderWidth:0.5,borderColor:'#CED3DE',flexDirection:'column',justifyContent:'center', height:30,width:80,backgroundColor:'#F7F8FA',borderRadius:15,alignItems:'center'}}>
<Text
        style={[
          styles.sectionDescription,
          {
            color: '#5A6B87',
         
          },
        ]}>
        {'#WOW'}
      </Text>
</TouchableOpacity>

<TouchableOpacity style={{ marginLeft:5,borderWidth:0.5,borderColor:'#CED3DE',flexDirection:'column',justifyContent:'center', height:30,width:80,backgroundColor:'#F7F8FA',borderRadius:15,alignItems:'center'}}>
<Text
        style={[
          styles.sectionDescription,
          {
            color: '#5A6B87',
         
          },
        ]}>
        {'#ROW'}
      </Text>
</TouchableOpacity>
</View>
<View style={{flexDirection:'column', backgroundColor:'#EDEEF3',width:'100%',justifyContent:'center',alignItems:'center',height:300}}>
      <TouchableOpacity onPress={()=>{alert('Clicked Native Button')} } style={{flexDirection:'column',justifyContent:'center', height:30,width:120,backgroundColor:'#01B99F',borderRadius:15,alignItems:'center',alignSelf:'center'}}>
<Text
        style={[
          styles.sectionDescription,
          {
            color: 'white',
          },
        ]}>
        {'Native Alert'}
      </Text>
</TouchableOpacity>
</View>
<View>

</View>

<View style={{marginTop:15,flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between',height:50}}>
  <View style={{flexDirection:'row',marginTop:10}}>
<View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
<Image style={{width:21,height:21}} source={require('./src/images/heart.png')} />
<Text
        style={[
          styles.sectionDescription,
          {
            color: '#AFB9CA',
    marginLeft:5
          },
        ]}>
        {'5'}
      </Text>
</View>
<View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
<Image style={{width:21,height:21}} source={require('./src/images/chat.png')} />
<Text
        style={[
          styles.sectionDescription,
          {
            color: '#AFB9CA',
            marginLeft:5
        // marginTop:
          },
        ]}>
        {'5'}
      </Text>
</View>
<View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
<Image style={{width:21,height:21}} source={require('./src/images/save.png')} />

</View>
<View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
<Image resizeMode='contain' style={{width:21,height:21}} source={require('./src/images/dots.png')} />

</View>
</View>


<WebView
style={{marginLeft:70,marginBottom:10}}
        scalesPageToFit={false}
        mixedContentMode="compatibility"
        onMessage={onMessage}
        source={{
          html: ` 
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body
         
          >
            <button
            onclick="sendDataToReactNativeApp()"
              style="
                //padding: 5;
                width: 110;
                font-size: 20;
                color: white;
                border-radius: 30px;
                background-color: #01B99F;
              "
            >
            WV Alert
            </button>
            <script>
              const sendDataToReactNativeApp = async () => {
                window.ReactNativeWebView.postMessage('Data from WebView / Website');
              };
            </script>
          </body>
        </html>        
`,
        }}
      />


</View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 14,
   // marginLeft:15,
    fontWeight: '600',
  },
  sectionDescription: {
   // marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
