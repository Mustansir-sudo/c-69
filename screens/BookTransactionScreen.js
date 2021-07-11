import React from 'react';
import { Text, View ,TouchableOpacity , StyleSheet} from 'react-native';
import * as permissions from  'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      hasCameraPermissions:null,
      scanned : false,
      scannedData : '',
    }
  }
  getCameraPermissions = async() =>{
    const{status} = await permissions . askAsync(Permissions.CAMERA);
    
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Issue or Return</Text>
          <TouchableOpacity>
            <Text>Scan or QR code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center' , 
      alignItems: 'center'
    },
    displayText: {
      fontSize:15,
    textDecorationLine:'underline'

    },

    scanButton : {
      backgroundColor:'blue',
      padding: 10,
      margin : 10
    },
  })