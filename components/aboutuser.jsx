import React, { useEffect, useState } from 'react';
import { SafeAreaView, View , Text, StyleSheet,ScrollView,Image} from 'react-native';
import { Avatar, Button, Header, ListItem } from 'react-native-elements';
import { TextInput } from 'react-native';
import Users from './users';

const AboutUsers = ({ route, navigation }) =>{

    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [age,setAge] = useState('')
    const [ location,setLocation] = useState(' ')
    const [ gender,setGender] = useState('')
    const {itemId} = route.params
    const id = parseInt(itemId)
    const [userInfo,setInfo] = useState([])
    let item = () =>{
        return Users.users.filter(action=>{
            return action.id === id
        })
    }
    useEffect(()=>{
        setInfo(item())
    },[])
    const Update=()=>{
        Users.users.push({
            name:name,
            surname:surname,
            age:age,
            location:location,gender:gender
        })
    }

    return(
        <ScrollView>
            <View style={{alignSelf:'center',margin:4,backgroundColor:'#a0b2b8'}} >
                <Image source={require('../assets/mountain.jpg')} style={{width:120,height:120,alignSelf:'center',borderRadius:50}} ></Image>
                <Text style={{fontSize:35,fontWeight:'800'}}>
                    About Users
                </Text>
                {
                    userInfo.map(data=>
                        <View key={data.id} >
                           
                        <TextInput style={styles.text} onChangeText={(text)=>setName(text)} value={data.name} placeholder={"Name please"} />
                        <TextInput style={styles.text} onChangeText={(text)=>setSurname(text)} value={data.surname} placeholder='Enter Surname' />
                        <TextInput style={styles.text} onChangeText={(text)=>setAge(text)}value={data.age} placeholder='age please' />
                        <TextInput style={styles.text} onChangeText={(text)=>setLocation(text)} value={data.location} placeholder='location' />
                        <TextInput style={styles.text} onChangeText={(text)=>setGender(text)} value={data.gender} placeholder='Gender here' />
                        <Button onPress={Update} title="Update User" style={{color:'#2196F3'}} />
                    </View>
                        )
                }   
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container:{

    },

    text:{
        width:300,
        height:50,
        padding:11,
        margin:8,
        borderRadius:10,
        backgroundColor:'gainsboro'
    }
})
export default AboutUsers