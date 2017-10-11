/**
 *  * Created by liaoyf on 2017/10/11 0011.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PublicStyle from '../../css';

class SearchBar extends React.Component{
    render(){
        let { placeholder } = this.props;

        return (
            <View style={[PublicStyle.vhCenter, styles.searchBar]}>
                <View style={{marginRight: 5}}>
                    <FontAwesome name="search" color='#c7c7cc'/>
                </View>
                <View>
                    <Text style={{color: '#a6a6a6', fontSize: 12}}>{placeholder}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 26,
        backgroundColor: '#eeeff3',
        borderRadius: 3,
        margin: 10
    }
});

SearchBar.defaultProps = {
    placeholder: '搜索'
};

export default SearchBar;