import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Header } from 'react-native-elements';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView,View,Text, StyleSheet ,ScrollView,  ImageBackground} from 'react-native';

const Contact = () =>{
    return(
        <ScrollView>
            <SafeAreaView>
            <ImageBackground source={require('../assets/mountain.jpg')} style={{width:wp('100%')}}>
                <View style={{padding:15,width:wp('100%'),borderRadius:10,borderColor:'white',borderWidth:20}}>
                    <View >
                        <Header>
                            <Text style={{color:'white',padding:2,fontWeight:'500',fontSize:35,width:wp('100%')}}>
                            Contact
                            </Text>
                        </Header>
                    </View>
                    <View style={styles.container}> 
                        <View>
                            <Text style={styles.textinput}>
                                <MaterialCommunityIcons name={"account"} color={"white"} size={45} /> My Contact Details
                            </Text>
                        </View>
                        <View style={{marginTop:8,alignSelf:'flex-start'}} >
                            <Text style={{fontWeight:'500',fontSize:19,color:'white',alignSelf:'flex-start'}}>
                                <MaterialCommunityIcons name={"phone"}  color={"grey"} size={25} /> Cellphone:
                            </Text>
                            <Text style={{fontSize:19,color:'white'}} >
                            0793879978
                            </Text>
                        </View>
                        <View style={{marginTop:8,alignSelf:'flex-start'}}>
                            <Text style={{fontWeight:'500',fontSize:19,color:'white',alignSelf:'flex-start'}}>
                            <MaterialCommunityIcons name={"mail"}  color={"red"} size={25} />Email:  
                            </Text  >
                            <Text style={{fontSize:19,color:'white'}} >
                            fenyane02@gmail.com
                            </Text>
                        </View>
                        <View style={{marginTop:8,alignSelf:'flex-start'}}>
                            <Text style={{fontWeight:'500',fontSize:19,color:'white'}}>
                                <MaterialCommunityIcons name={"facebook"} color={"blue"} size={25} />FacebookAccount:  
                            </Text>
                            <Text style={{fontSize:19,color:'white'}} >
                            https://www.facebook.com/Maria_Lerato
                            </Text>
                        </View>
                        <View style={{marginTop:8,alignSelf:'flex-start'}}>
                            <Text style={{fontWeight:'500',color:'white',fontSize:19,margin:8}}>
                                <MaterialCommunityIcons name={"linkedin"} color={"lightblue"} size={45} />LinkedIn Account: 
                            </Text>
                            <Text style={{fontSize:19,color:'white'}} >
                            https://www.linkedin.com/Maria_Lerato
                            </Text>
                        </View>
                    </View>
                </View>  
                </ImageBackground>
           
        </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textinput:{
        fontWeight:'500',fontSize:35,color:'white',marginTop:-5
    },
    textInput :{

        height:50,
        padding:11,
        margin:4,
        borderRadius:10,
        backgroundColor:'white',
        width:300
        
    },
    container:{
    alignItems:'center',
    textAlign:'left',
    borderBottomColor:'grey',
    marginTop:15,
    fontSize:25,
    color:'white',
    padding:10,
    height:hp('100')}
})
export default Contact