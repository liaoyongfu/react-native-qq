/**
 *  * Created by liaoyf on 2017/10/9 0009.
 */
import React from 'react';
import {
    View,
    Text
} from 'react-native';

class SideMenu extends React.Component{
    static navigationOptions = {
        drawerLabel: '侧边栏',
        header: null
    };

    render(){
        return (
            <View>
                <Text>111</Text>
            </View>
        );
    }
}

export default SideMenu;