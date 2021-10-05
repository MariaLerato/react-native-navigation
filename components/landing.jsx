import React from 'react';
import { SafeAreaView,View,Text,StyleSheet,ScrollView,Alert,Modal, TouchableOpacity} from 'react-native';
import {Button,Header,Icon,ListItem } from 'react-native-elements'
import {  useState } from 'react';
import Users from './users'
import AddUser from './adduser'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Landing = ({navigation}) =>{
    const [isVisible,setVisible] = useState(false)
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [age,setAge] = useState('')
    const [location,setLocation] = useState('')
    const [gender,setGender] = useState(' ')
    const [ users,setUsers] = useState(Users.users)
    
    const createUser = () =>{
        setUsers([...users,{
            name:name,
            surname:surname,
            age:age,
            location:location,
            gender:gender
        }])
        alert('user created')
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
        <View style={styles.container}>
            <Modal animationType={'slide'}
                transparent={false}
                visible={isVisible} 
                onRequestClose={()=>Alert.alert('Modal has been closed')}>
                    <Button title={'Exit'} style={styles.closeButton} onPress={()=>{setVisible(!isVisible);} } />
                <AddUser createUser={createUser} />
            </Modal>
                <TouchableOpacity style={{backgroundColor:'#965096',borderRadius:50,width:70,borderColor:'white',borderWidth:2}} onPress={()=>setVisible(true)} >
                    <MaterialCommunityIcons name={'account-plus'} size={55} color={'#262526'} />
                </TouchableOpacity>
          
        </View> 
                <Text style={{margin:4,fontSize:25,fontWeight:'600',alignSelf:'center'}} >
                    Registered Users
                </Text>
                <View >
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
   
    textinput :{
        height:50,
        padding:11,
        margin:4,
        borderRadius:10,
        backgroundColor:'white',
        width:400
        
    },
    container:{
        padding:25,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    buttonText:{color:'white',fontSize:26},
    text:{
        fontSize:24,
        marginBottom:30,
        padding:40
    },
    button:{
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        width:20,
        backgroundColor:'green',
        shadowColor:'#2AC062',
        shadowOpacity:0.5,
        shadowOffset:{
            height:10,
            width:0
        },
        shadowRadius:25

    },
    closeButton:{display:'flex'

,height:60,
borderRadius:6,justifyContent:'center',alignItems:'center',backgroundColor:'#FF3974'},
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