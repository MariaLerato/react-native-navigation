import React from 'react';
import { StyleSheet,View,Text,SafeAreaView,Image,ScrollView,ImageBackground } from 'react-native';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MyProfile = () =>{

    return(
        <SafeAreaView>
            <ScrollView>
                <View  style={{width:wp('100%'),height:hp('100%'),backgroundColor:'#c1d6d1'}} >
                    <View style={{backgroundColor:'white',opacity:0.7,marginLeft:10,marginTop:10,width:wp('95%'),height:hp('100%')}}>
                        <View style={{marginTop:8,marginLeft:10}}>
                        <Image source={require('../assets/mew.jpg')} style={{width:wp('30%'),marginTop:8,height:hp('15'),alignSelf:('flex-start'),borderRadius:10}} ></Image>
                            <Text style={{marginTop:-75,fontWeight:'500',fontSize:30,alignSelf:'flex-end',padding:2}}>
                                Maria Fenyane
                            </Text>
                            <Text style={{marginTop:3,fontSize:15,alignSelf:'flex-end',padding:2}}>
                                Software Developer
                            </Text>
                        </View>
                    <View style={{flexDirection:'row',flexWrap:'wrap',}}>
                        <View style={{flexDirection:'row',marginTop:10}}>
                        <View style={styles.leftColumn}>
                            <Text style={{fontSize:20,fontWeight:'400'}}>
                                <MaterialCommunityIcons name={"account"} color={'black'} size={35} />  Contact Details
                            </Text>
                            <Text style={{fontSize:15}}>
                                <MaterialCommunityIcons name={"mail"} color={'red'}  size={20}/> fenyane02@gmail.com
                            </Text>
                            <Text style={{fontSize:15,paddingLeft:2}}>
                                <MaterialCommunityIcons name={"phone"} color={'black'} size={20} /> 0793879978 
                            </Text>
                            <Text style={{fontSize:15}}>
                                <MaterialCommunityIcons name={"facebook"} color={'blue'} size={20} /> Maria_Lerato
                            </Text>
                            <Text style={{fontSize:15}}>
                                <MaterialCommunityIcons name={"linkedin"} color={'lightblue'} size={20} /> Maria Lerato
                            </Text>
                        </View>
                        <View  style={styles.rightColumn}>
                            <View>
                                <Text style={{fontWeight:'500',fontSize:20}}>
                                    <MaterialCommunityIcons name={"card"} color={'grey'} size={35} /> About Me
                                </Text>
                                <Text style={{padding:2}}>
                                    I am a Software Developer, proficient in HTML5,CSS3 and JavaScript.
                                       
                                     Trained Software Development at  Codetribe academy
                                </Text>
                            </View>
                            <View>
                                <Text style={{fontWeight:'500',fontSize:20}} >
                                    <MaterialCommunityIcons name={"book"} color={'lightblue'} size={35} /> Work Experience
                                </Text>
                                <View style={{flexDirection:'row',}}>
                                <Text style={{padding:2,fontWeight:'500',width:wp('10%')}}>
                                    June 2021 
                                      Nov 2021
                                </Text>
                                <Text style={{padding:4}}>
                                    Software Development Trainee
                                      Codetribe mlab South Africa.
                                      Created web applications using Reactjs.Learnt Scrum and Soft-skills
                                </Text>
                                </View>
                                <Text style={{fontWeight:'500',fontSize:20}}>
                                    <MaterialCommunityIcons name={"book-open"} color={'tomato'} size={35} /> Education
                                </Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontWeight:'200',width:wp('10%')}}>
                                    

                                    2020
                                </Text>
                                <Text style={{padding:4,width:wp('40%')}} >
                                  
                                    Capricorn Tvet college
                                    NC(V) Level 4 in ITC
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontWeight:'500',fontSize:20}}>
                                <MaterialCommunityIcons name={"account"} color={'black'} size={35} /> References
                            </Text>
                            <Text style={{paddingLeft:10,fontSize:15,}}>
                                Tyson Moyahabo Motlhabeng
                            /CodeTribe Facilitator Mlab Limpopo
                                 tyson@mlab.co.za
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'500',fontSize:20}}>
                                <MaterialCommunityIcons name={"circle"} color={'blue'} size={35} /> Skills
                            </Text>
                            <Text>
                            HTML5
                            </Text>
                            <Text>
                            CSS3
                            </Text>
                            <Text>
                            JavaScript
                            </Text>
                            <Text>
                            Ms Word
                            </Text>
                        </View>
                    </View>
                    </View>
                  </View>  
                 </View>   
        </View>
        </ScrollView>
        
        </SafeAreaView>  
    )
}
const styles = StyleSheet.create({
    leftColumn:{
        padding: 10,
        fontSize:18,
        width:wp('40%'),
        
    },
    image:{
        width:150,
        height:300,
        resizeMode:'center',
        borderRadius:50
    },
    rightColumn:{
        width:wp('50%'),
        marginTop:10,
        height:hp('100%')
    
    },
    container:{
        flexWrap:'wrap',
        flexDirection:'row',
        flex:1,

        height:1000,
        margin:0,
        paddingLeft:45,
        width:1500,
    },
})
export default MyProfile