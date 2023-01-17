import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            //value={term}
            // onChangeText={newTerm => onTermChange(newTerm)}
            //  onEndEditing={() => onTermSubmit()}
            // we call also simply pass a reference to thse function with
            // this syntaxe
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />           
        </View>
    );
};

const styles = StyleSheet.create({  
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#E0E0E0',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;