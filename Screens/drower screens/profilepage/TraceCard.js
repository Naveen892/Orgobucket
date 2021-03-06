
import React from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, Dimensions, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {color} from "/home/naveen/FoodCart/imp.js";
import { ProgressBar } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';
const width = Dimensions.get('window').width;
const labels = ["Cart","Packed","TransPort","Recived"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: color,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: color,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: color,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: color,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: color,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: color
  }
export default function TraceCard(props, { navigation }) {




    return (
        // onpress for card
        // onPress={()=>navigation.navigate('Discription',{price: props.price , rating: props.rating ,grade: props.grade,image: props.image,type: props.type })}
        <View style={{}}>
            <TouchableOpacity style={styles.card} activeOpacity={0.9} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ margin: 10, elevation: 10, width: width / 4, backgroundColor: 'white', height: width / 4, borderRadius: 7, alignItems: 'center' }}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: props.image,
                            }}
                        />
                    </View >
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                            {props.type}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                            Price : {'\u20B9'} {props.price}
                        </Text>

                        <Text style={{ fontSize: 15 }}>
                            Quantiiy : {props.quantity} kg.
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{ marginRight: 15, marginTop: 15 }}>
                        {props.grade}
                    </Text>
                    <Text style={{ marginRight: width / 10, fontSize: 10, fontStyle: 'italic', marginTop: 10, color: '#aaa' }} >
                        Expected Delivery At
                    </Text>
                    <Text style={{ marginRight: 10, borderColor: '#d89216', borderWidth: 1, paddingHorizontal: 7, borderRadius: 5, color: '#d89216' }}>
                        26 / 3 / 21
                    </Text>
                </View>


            </TouchableOpacity>
            <View style={{ height: 70, backgroundColor: '#fff', marginBottom: 6, marginHorizontal: 10, elevation: 2., borderBottomLeftRadius: 7, borderBottomRightRadius: 7, justifyContent: 'center', borderTopColor: '#ccc', borderTopWidth: 1 }}>
            <StepIndicator
                        customStyles={customStyles}
                        labels={labels}
                        currentPosition={2}
                        stepCount={4}
                    />


            </View>

        </View>






        // <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => navigation.navigate('Discription', { price: props.price, rating: props.rating, grade: props.grade, image: props.image, type: props.type })}>
        //     <View style={{ margin: 10, elevation: 10, width: width / 3, backgroundColor: 'white', height: width / 3, borderRadius: 7, alignItems: 'center' }}>
        //         <Image
        //             style={styles.image}
        //             source={{
        //                 uri: props.image,
        //             }}
        //         />
        //     </View>
        //     <View>
        //         <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        //             <View style={{ margin: 15 }}>

        //                 <Text style={styles.text, { marginBottom: 10, fontWeight: 'bold' }}>Price - {'\u20B9'} {props.price}</Text>
        //                 <Text style={styles.text, { marginTop: 10, fontWeight: '100' }}>Grade - {props.grade}</Text>

        //             </View>

        //         </View>
        //         <View style={{ marginLeft: 15 }}>
        //             <Text>
        //                 Discription : adasf ,asdas ...
        // </Text>
        //         </View>
        //     </View>




        // </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginHorizontal: 10,
        margin: 6,
        marginBottom: 0,
        elevation: 2,
        padding: 2,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        height: width / 3,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    image: {
        width: width / 4,
        height: width / 4,
        resizeMode: "cover"
    }

})


