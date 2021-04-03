import React ,{useRef} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get('window').height;

function LogInRetailer({ navigation }) {
    
    return (
        <ScrollView>
            <View style={{ flex: 1, height: height }}>
                <View style={styles.upperView}>
                    <View style={{ flexDirection: 'row', }}>
                        <Icon name='arrow-left' style={{ margin: 40 }} size={25} color='#fff' onPress={() => navigation.navigate('My Profile')} />
                        <View style={{ alignItems: 'flex-end', flex: 1 }}>
                            <Text style={styles.name}>Retailer</Text>

                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{fontSize: 25,color: '#fff',}}>
                            LogIn In Your Existing 
                        </Text>
                        <Text style={{fontSize: 25,color: '#fff',}}>
                            Account
                        </Text>
                    </View>
                    
                    <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                        <Text style={{color:'red'}}>*</Text>Your Contact Number
                        </Text>
                    <View style={styles.input}>

                        <TextInput
                            placeholder='Please Enter Your Mobile Number'
                            placeholderTextColor='#ccc'
                            keyboardType='phone-pad'
                        />

                    </View>
                    <Text style={{ marginHorizontal: 80, marginBottom: 5, fontSize: 15, color: '#fff' }}>
                        <Text style={{color:'red'}}>*</Text>Your Password
                        </Text>
                    <View style={styles.input}>

                        <TextInput
                            placeholder='Please Enter Your Password'
                            placeholderTextColor='#ccc'
                        />

                    </View>
                    
                    
                    
                </View>
                
                <View style={styles.lowerView}>
                <View style={{alignItems:'center'}}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={{fontSize:15,color: '#00af91',textDecorationLine: 'underline' ,marginBottom:17}}>
                             Forgot Password 
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.loginbtn} activeOpacity={0.8} onPress={()=>navigation.navigate('RetailerProfile')}>
                        <Text style={{ fontSize: 20, fontWeight: '300', color: '#fff' }}>
                            LogIn
                </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signinbtn} activeOpacity={0.8} onPress={()=>navigation.navigate('Retailer')}>
                        <Text style={{ fontSize: 20, fontWeight: '300', color: '#00af91' }}>
                            Create New Account
                </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.privacy} activeOpacity={0.8}>
                            <Text style={{ fontSize: 15, fontWeight: '200', color: '#00af91', textDecorationLine: 'underline' }}>
                                Terms and condition
                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.privacy} activeOpacity={0.8}>
                            <Text style={{ fontSize: 15, fontWeight: '200', color: '#00af91', textDecorationLine: 'underline' }}>
                                Privacy policy
                </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </ScrollView>


    )
}

export default LogInRetailer;

const styles = StyleSheet.create({
    upperView: {
        flex: 2,
        backgroundColor: '#00af91',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        flexDirection: 'column',
        elevation: 7
    },
    lowerView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    name: {
        margin: 40,
        fontSize: 25,
        color: '#fff',
    },
    loginbtn: {
        marginHorizontal: 60,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#00af91',
        borderColor:'#fff',
        borderWidth:2,
        padding: 5,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 7
    },
    privacy: {
        margin: 10,
        marginTop: 0,
        marginBottom: 40
    },
    signinbtn: {
        margin: 40,
        fontSize: 25,
        color: '#fff',
    },
    signinbtn: {
        marginHorizontal: 60,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#00af91',
        borderWidth: 2,
        padding: 5,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 7
    },
    input: {
        marginHorizontal: 60,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#00af91',
        borderColor: '#fff',
        borderWidth: 2,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 7
    }

})