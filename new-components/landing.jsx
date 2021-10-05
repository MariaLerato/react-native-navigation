import React,  {useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Modal,Alert,Image, ScrollView} from 'react-native'
import { Button } from 'react-native-elements'
import AddUser from '../components/adduser'

const ModalPractice = () =>{
    const [isVisible,setVisible] = useState(false)

    const displayModal = (show) =>{
        setVisible({isVisible:show})
    }
    return(
        <ScrollView>
        <View style={styles.container}>
            <Modal animationType={'slide'}
                transparent={false}
                visible={isVisible} 
                onRequestClose={()=>Alert.alert('Modal has been closed')}>
                    <Button title={'close Modal'} style={styles.closeButton} onPress={()=>{setVisible(!isVisible);} } />
                <AddUser />
                
                 
            
            </Modal>
            <TouchableOpacity style={styles.button} onPress={()=>setVisible(true)} >
                <Text style={styles.buttonText}>Show Modal</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:25,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:1000
    },
    buttonText:{color:'#FFFFFF',fontSize:25},
    text:{
        fontSize:24,
        marginBottom:30,
        padding:40
    },
    button:{
        display:'flex',
        height:60,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#2AC062',
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
    image:{
        marginTop:150,
        marginBottom:10,
        width:'100%',
        height:350
    }
})
export default ModalPractice