import React, { useState  } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' OR '$$' OR '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        //<View style={{flex: 1}}>
        <>
            <SearchBar
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} // we pass directly a reference to the fucntion
            />
            { errorMessage ? <Text>{ errorMessage }</Text> : null }
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('€')} 
                    title="Cost Effective"
                    navigation={navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('€€')} 
                    title="Bit Pricier"
                    navigation={navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('€€€')} 
                    title="Big Spender"
                    navigation={navigation}
                />
            </ScrollView>
    </>


        //</View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;