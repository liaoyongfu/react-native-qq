/**
 *  * Created by liaoyf on 2017/12/1 0001.
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    PixelRatio,
    Button,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import PublicStyle from '../../../css';
import SearchBar from '../../../public/SearchBar/SearchBar';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

class Message extends React.Component{
    renderItem({item}) {
        return (
            <View style={styles.itemBox}>
                <View style={[styles.listIcon]}>
                    <Image source={require('../../../../image/vator.jpg')}
                           style={{width: 40, height: 40, borderRadius: 20}}/>
                </View>
                <View style={[styles.listContent]}>
                    <View style={styles.listContentTop}>
                        <Text style={styles.listContentTopText}>{item.label}</Text>
                        <View style={styles.listContentTopTime}>
                            <Text style={styles.listContentTopTimeText}>{item.time}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.listLastMessage} numberOfLines={1}>{item.lastMessage}</Text>
                    </View>
                </View>
            </View>
        );
    }
    render(){
        let { messageList } = this.props;

        return (
            <View style={[PublicStyle.flex, styles.content, PublicStyle.box]}>
                <SearchBar/>
                <View style={[PublicStyle.flex]}>
                    <FlatList
                        data={messageList}
                        keyExtractor={item => item.label}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
    },
    itemBox: {
        flexDirection: 'row'
    },
    listIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        overflow: 'hidden'
    },
    listContent: {
        flex: 1,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ccc'
    },
    listContentTop: {
        flexDirection: 'row',
        marginBottom: 5
    },
    listContentTopText: {
        flex: 1,
        color: '#000',
        fontSize: 16
    },
    listContentTopTime: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContentTopTimeText: {
        color: '#999',
        fontSize: 12
    },
    listLastMessage: {
        fontSize: 12,
        color: '#666'
    },
});

export default Message;