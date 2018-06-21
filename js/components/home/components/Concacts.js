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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../../../public/SearchBar/SearchBar';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ListItem from '../components/ListItem';

class Concacts extends React.Component{
    render(){
        let { friendList, toggleExpand, navigate } = this.props;

        return (
            <View style={[PublicStyle.flex, styles.content]}>
                <View style={[PublicStyle.box, {marginBottom: 20}]}>
                    <SearchBar/>
                    <View style={styles.newFriend}>
                        <Text style={styles.newFriendLabel}>新朋友</Text>
                        <FontAwesome style={styles.newFriendIcon} name="angle-right"/>
                    </View>
                </View>
                <ScrollableTabView
                    style={[styles.friendList, PublicStyle.box]}
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarUnderlineStyle={{
                        backgroundColor: "#12b7f5"
                    }}
                    initialPage={0}
                    tabBarActiveTextColor='#12b7f5'
                >
                    <View tabLabel='好友'>
                        <FlatList
                            data={friendList}
                            renderItem={({item}) => (
                                <ListItem toggleExpand={toggleExpand} item={item} navigate = {navigate}/>
                            )}
                            keyExtractor={(item, index) => item.label}
                        />
                    </View>
                    <Text tabLabel='群'>群</Text>
                    <Text tabLabel='多人聊天'>多人聊天</Text>
                    <Text tabLabel='设备'>设备</Text>
                    <Text tabLabel='通讯录'>通讯录</Text>
                    <Text tabLabel='公众号'>公众号</Text>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
    },
    newFriend: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#ddd',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    newFriendLabel: {
        color: '#000'
    },
    newFriendIcon: {
        fontSize: 20,
        color: '#c7c7c7'
    },
    placeholderView: {
        height: 10,
        backgroundColor: '#eee'
    },
    friendList: {
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#ddd',
        padding: 0
    },
    dtTop: {
        marginBottom: 20,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ddd'
    },
    dtListOne: {
        marginBottom: 20,
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#ddd',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ddd'
    },
    dtList: {
        flexDirection: 'row'
    },
    dtListLeft: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dtListLeftIcon: {
        fontSize: 18
    },
    dtListRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1 /PixelRatio.get(),
        borderBottomColor: '#ddd',
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 15
    },
    dtListTwo: {
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#ddd',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ddd'
    },
    dtType: {
        flexDirection: 'row'
    },
    dtTypeItem: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dtTypeItemIcon: {
        fontSize: 24
    },
    hydtIcon: {
        color: '#ffa5a0'
    },
    fjIcon: {
        color: '#fbd04f'
    },
    xqblIcon: {
        color: '#f25d5d'
    },
    dtTypeLabel: {
        color: '#000',
        fontSize: 14
    }
});

export default Concacts;