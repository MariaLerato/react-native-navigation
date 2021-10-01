import React from 'react';
import { SafeAreaView,View,Text,StyleSheet,ScrollView,TextInput } from 'react-native';
import {Button,ListItem } from 'react-native-elements'
import {  useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Landing = ({navigation}) =>{
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [age,setAge] = useState('')
    const [location,setLocation] = useState('')
    const [gender,setGender] = useState(' ')

    const [users,setUsers] = useState([
        { id: 1,name: 'Maria', surname:'Fenyane', age:15,location:'Katlegong',gender:'Female'},
        { id: 2,name: 'Lerato', surname:'Khumalo',age:17,location:'Johannesburg',gender:'Female'},
        { id: 3,name: 'Tinti', surname:'Kompi',age:22,location:'KwaZulu Natal',gender:'Female'},
        { id: 4,name: 'Nhlanhla', surname:'Fenyane',age:25,location:'Bolobedu',gender:'Male'},
        { id: 5,name: 'Katlego', surname:'Fenyane',age:24,location:'Jane Furse',gender:'Female'},
        { id: 6,name: 'Thabiso', surname:'Fenyane',age:22,location:'Mphahlele',gender:'Male'},
        { id: 7,name: 'Thandie', surname:'Fenyane',age:17,location:'Bochum',gender:'Female'},
        { id: 8,name: 'Masesi', surname:'Fenyane',age:16,location:'Polokwane',gender:'Female'},
        { id: 9,name: 'Maria', surname:'Kekana',age:18,location:'Lebowakgomo',gender:'Female'},
    ])

    const createUser = ()=>{
        setUsers([...users,{
            id:users.length + 1,
            name:name,
            surname:surname,
            age:age,
            location:location,
            gender:gender
        }])
        setName('')
        setSurname('')
        setAge('')
        setGender('')
        setLocation('')
    }


    const deleteItem=()=>{
        const newUsers = users;
        if(newUsers.length > 0){
            const lastUser = newUsers.length -1;
            setUsers(newUsers.filter((item,index)=> index !==lastUser))
        }
    }
    return(
        <SafeAreaView>     
        <ScrollView >
               <View style={{padding:5,backgroundColor:'#a9cbcc',fontWeight:'400'}}>
                   <TextInput value={name} onChangeText={(text)=>setName(text)} style={{padding:8,alignSelf:'flex-start',backgroundColor:'#f5f0f5',width:200,height:40,margin:4,borderRadius:10}} placeholder={'Please Enter Name'} />
                   <TextInput value={surname} onChangeText={(text)=>setSurname(text)} style={{padding:8,alignSelf:'flex-end',backgroundColor:'#f5f0f5',width:200,height:40,margin:4,borderRadius:10}} placeholder={'Please Enter Surname'} />
                   <TextInput value={age} onChangeText={(text)=>setAge(text)} style={{padding:8,alignSelf:'flex-start',backgroundColor:'#f5f0f5',width:200,height:40,margin:4,borderRadius:10}} placeholder={'Please Enter Age'} />
                   <TextInput value={location} onChangeText={(text)=>setLocation(text)} style={{padding:8,alignSelf:'flex-end',backgroundColor:'#f5f0f5',width:200,height:40,margin:4,borderRadius:10}} placeholder={'Please Enter Location '} />
                   <TextInput value={gender} onChangeText={(text)=>setGender(text)} style={{padding:8,alignSelf:'flex-start',backgroundColor:'#f5f0f5',width:200,height:40,margin:4,borderRadius:10}} placeholder={'Please Enter Gender'} />
                    <Button title={'Create'} onPress={createUser } />
                </View>
                <Text style={{margin:4,fontSize:25,fontWeight:'600',alignSelf:'center'}} >
                    Registered Users
                </Text>
                <View style={styles.container}>
                    <View>
                        <View style={styles.viewCover}>
                            {
                                users.map(action =>
                                    <ListItem key={action.id} style={styles.listView} >
                                        <ListItem.Content >
                                            <ListItem.Title >
                                                {action.name} {action.surname}
                                            </ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Chevron style={{ backgroundColor: 'black' }} onPress={() =>navigation.navigate('aboutuser', {
                                            itemId: action.id
                                        })} />
                                       <MaterialCommunityIcons name={'delete'} size={25} color={'red'} onPress={deleteItem} />
                                    </ListItem>
                                )
                            }

                        </View>
                    </View>
                </View>
            
        
        </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    listView: {
        borderBottomColor: 'gainsboro',
        borderBottomWidth: 0.5,
    },
    viewCover: {
        padding: 2,
        backgroundColor: 'gainsboro'

    },
    container: {
        backgroundColor: 'red'
    },
    textinput :{
        height:50,
        padding:11,
        margin:4,
        borderRadius:10,
        backgroundColor:'white',
        width:400
        
    },
    headCover :{
        textAlign: 'left',
        padding : 10,
        textTransform:'uppercase',
        fontWeight:'800',
        fontSize:20,

        color:'white',
        backgroundColor:'#212133',
        resizeMode:'cover',
        
    },
    form:{
        // backgroundColor:'grey',
        padding:10,
        borderRadius:40,
        
        textAlign:'left',
        marginTop:-35
    },
        coner:{
        
            textAlign:'left'
        },

    header :{
        textAlign: 'left',
        fontSize:30,
        paddingTop:40,
        paddingBottom:40,
        fontWeight:'bold',
        color:'white'
    },
    button :{
        padding :20,
        shadowColor:'grey',
        width:150,
        flex: 1,
        marginTop:-25
    }

})
export default Landing