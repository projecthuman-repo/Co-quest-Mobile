import React, { useState, useRef, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar, Tab } from 'react-native-elements';
import BottomSheet from '@gorhom/bottom-sheet';

const Search = () => {
    const [searchText, setSearchText] =useState('');
    
    const handleSearch = (text) => {
      setSearchText(text);
      // Access database to do something with text  
    };

    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ['25%', '50%'], []);

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
      }, []);

    return ( 
    <View>
        <SearchBar
            placeholder="Search"
            inputContainerStyle={{ backgroundColor: 'white', borderColor: 'white' }}
            containerStyle={{backgroundColor: 'white'}}
            onchangeText={handleSearch}
            value={searchText}>

        </SearchBar>

        <View style={tabNavigation.container}>
            <TouchableOpacity style={tabs.tab}>
                <Text style={tabs.tabText}>Projects</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tabs.tab}>
                <Text style={tabs.tabText}>Programs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tabs.tab}>
                <Text style={tabs.tabText}>Co-ops</Text>
            </TouchableOpacity>
        </View>


    <BottomSheet 
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
    >
        
    </BottomSheet>
    <Text>
    Hello this is the search page.
    </Text>
    </View>
  );
}

const tabNavigation = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    }
})

const tabs = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tab: {
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  tabText: {
    fontWeight: 'bold',
  },
});

export default Search
