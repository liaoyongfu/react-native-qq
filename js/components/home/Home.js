/**
 *  * Created by liaoyf on 2017/9/29 0029.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';
import PublicStyle from '../../css';

class Home extends React.Component{
    static navigationOptions = {
        title: '首页',
        header: null
    };

    render(){
        return (
            <View style={[PublicStyle.flex]}>
                <StatusBar translucent={true}/>
                <View style={[styles.header]}>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <Text style={[styles.headerLeft]}>头像</Text>
                    </View>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <Text style={[styles.title]}>消息</Text>
                    </View>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <Text style={[styles.headerRight]}>+</Text>
                    </View>
                </View>
                <View style={[styles.content]}>
                    <Text>中间部分</Text>
                </View>
                <View style={[styles.footer]}>
                    <Text>消息</Text>
                    <Text>联系人</Text>
                    <Text>动态</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#29c1fe'
    },
    headerLeft: {

    },
    title: {},
    headerRight: {},
    content: {
        flex: 1
    },
    footer: {
        height: 60
    }
});

export default Home;