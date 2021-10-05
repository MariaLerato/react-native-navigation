import React,{useState} from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView,View,Text ,TextInput, StyleSheet, Image,} from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup'
import Users from './users';

const AddUser = ({createUser,navigation}) =>{
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [age,setAge] = useState('')
    const [location,setLocation] = useState('')
    const [gender,setGender] = useState(' ')
    
    const Validation = Yup.object({
        name:Yup.string().required('Invalid Name'),
        surname:Yup.string().required('Invalid Surname'),
        age:Yup.string().max(3,'Please Enter Valid Age').required('Invalid Age'),
        location:Yup.string().required('Invalid Location'),
        gender:Yup.string().required('Invalid Gender')
    })
   const createNewUser = ()=>{
       Users.users.push({
           id:Users.users.length + 1,
           name:name,
           surname:surname,
           age:age,
           location:location,
           gender:gender
       })
       alert('A new User was added')
       setName('')
       setSurname('')
       setAge(' ')
       setGender('')
       setLocation('')
   }

   
    return(
        <SafeAreaView>
            <ScrollView>
            <View style={{padding:8,margin:4}}>
                <Image source={require('../assets/pexels-alex-green-5699456.jpg')} style={{width:'95%',height:150,alignSelf:'center'}} />
            </View>
            <View style={styles.container}>
                <Text style={{color:'black',fontSize:35,fontWeight:'900'}}>
                    Adding Users
                </Text>
             <Formik initialValues={{
                 name:'',
                 surname:'',
                 age:'',
                 location:'',
                 gender:''

             }}
             validateOnMount={true}
             validationSchema={Validation}
             onSubmit={values=> createUser(values.name,values.surname,values.age,values.gender,values.location)}
             >
               {({
                   errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    values,
                    touched
                    })=>(
                      <View style={{padding:5,fontWeight:'400'}}>
                      <TextInput value={values.name} onChangeText={handleChange('name')} style={styles.text} onBlur={handleBlur('name')} placeholder={'Please Enter Name'} />
                      {errors.name && touched.name ?(
                          <Text style={styles.error}> {errors.name} </Text>
                      ): null}
                      <TextInput value={values.surname} onChangeText={handleChange('surname')} onBlur={handleBlur('surname')} style={styles.text} placeholder={'Please Enter Surname'} />
                      {errors.surname && touched.surname ?(
                          <Text style={styles.error}> {errors.surname} </Text>
                      ): null}
                      <TextInput value={values.age} onChangeText={handleChange('age')} style={styles.text} onBlur={handleBlur('age')} placeholder={'Please Enter Age'} />
                      {errors.age && touched.age ?(
                          <Text style={styles.error}> {errors.age} </Text>
                      ): null}
                      <TextInput value={values.location} onChangeText={handleChange('location')} style={styles.text} onBlur={handleBlur('location')} placeholder={'Please Enter Location '} />
                      {errors.location && touched.location ?(
                          <Text style={styles.error}> {errors.location} </Text>
                      ): null}
                      <TextInput value={values.gender} onChangeText={handleChange('gender')} onBlur={handleBlur('gender')} style={styles.text}  placeholder={'Please Enter Gender'} />
                      {errors.gender && touched.gender ?(
                          <Text style={styles.error}> {errors.gender} </Text>
                      ): null}
                       <Button title={'Create'} onPress={handleSubmit } />
                   </View>
               )}
             </Formik>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fae7c7',
        height:'100%',
        padding:14,
        alignItems:'center',
        margin:9,
        borderRadius:20,
    },
    text:{
        padding:4,
        width:300,
        margin:6,
        borderRadius:10,
        backgroundColor:'gainsboro',
        height:55,

    },
    error:{
        color:'red',
        alignSelf:'center'
    }
})
export default  AddUser