import React from "react";
import {View,
        Text, 
        TextInput, 
        StyleSheet} from "react-native";

import COLORS from '../const/colors';

const Input = ({label})=>{
    
    return(
        <View style={estilos.formContainer}>
            <Text style={estilos.inputLabel}>{label}</Text>
        
            <View style={estilos.inputContainer}>
                <TextInput
                style={estilos.TextInput}
                autoCorrect={false}
                />
            </View>

        </View>

        
    )

}

const estilos = StyleSheet.create({

    formContainer:{
        marginBottom:20,
    },
    inputLabel:{
        marginVertical:5,
        fontSize:16,
        color:COLORS.gray,
    },
    inputContainer:{
        height:55,
        backgroundColor:COLORS.light,
        flexDirection:"row",
        paddingHorizontal:15,
        borderWidth:0.5,
        alignItems:"center",
    },
    TextInput:{
        color:COLORS.darkBlue,
        flex:1,
    },
});

export default Input;