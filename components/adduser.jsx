import React from 'react';
import { SafeAreaView,View,Text } from 'react-native';
import { Button } from 'react-native-elements';

const AddUser = ({navigation}) =>{
    return(
        <SafeAreaView>
            <View>
                <Text>
                    Adding Users
                </Text>
                <Button title={'goback'} onPress={()=>navigation.goBack()} />
            </View>
        </SafeAreaView>
    )
}
export default  AddUser