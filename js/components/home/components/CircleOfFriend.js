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
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

class CircleOfFriend extends React.Component {
    static get list1() {
        return [
            {
                label: '日迹',
                iconName: 'play-circle',
                color: '#ff6600'
            },
            {
                label: '看点',
                iconName: 'eye',
                color: '#88cf43'
            },
            {
                label: '动漫',
                iconName: 'drupal',
                color: '#5670f5'
            },
            {
                label: '音乐',
                iconName: 'music',
                color: '#89d043'
            },
            {
                label: '热门活动',
                iconName: 'bullhorn',
                color: '#fbd04f'
            }
        ];
    }

    static get list2() {
        return [
            {
                label: '运动',
                iconName: 'child',
                color: '#00b4f7'
            },
            {
                label: '同城服务',
                iconName: 'user-md',
                color: '#f25d5d'
            }
        ]
    }

    renderList({item, index}) {
        return (
            <View style={[styles.dtList]}>
                <View style={[styles.dtListLeft]}>
                    <FontAwesome style={[styles.dtListLeftIcon, {color: item.color}]} name={item.iconName}/>
                </View>
                <View style={[styles.dtListRight]}>
                    <Text>{item.label}</Text>
                    <FontAwesome style={styles.newFriendIcon} name="angle-right"/>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={[PublicStyle.flex, styles.content]}>
                <View style={[PublicStyle.box, styles.dtTop]}>
                    <SearchBar placeholder='大家都在搜：袁泉完胜马伊琍'/>
                    <View style={styles.dtType}>
                        <View style={styles.dtTypeItem}>
                            <FontAwesome style={[styles.dtTypeItemIcon, styles.hydtIcon]} name="star"/>
                            <Text style={styles.dtTypeLabel}>好友动态</Text>
                        </View>
                        <View style={styles.dtTypeItem}>
                            <FontAwesome style={[styles.dtTypeItemIcon, styles.fjIcon]} name="map-marker"/>
                            <Text style={styles.dtTypeLabel}>附近</Text>
                        </View>
                        <View style={styles.dtTypeItem}>
                            <FontAwesome style={[styles.dtTypeItemIcon, styles.xqblIcon]} name="heart"/>
                            <Text style={styles.dtTypeLabel}>兴趣部落</Text>
                        </View>
                    </View>
                </View>
                <View style={[PublicStyle.box, styles.dtListOne]}>
                    <FlatList
                        data={CircleOfFriend.list1}
                        renderItem={this.renderList}
                        keyExtractor={(item, index) => index}
                    />
                </View>
                <View style={[PublicStyle.box, styles.dtListTwo]}>
                    <FlatList
                        data={CircleOfFriend.list2}
                        renderItem={this.renderList}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {},
    newFriendIcon: {
        fontSize: 18,
        color: '#c7c7c7'
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
        borderBottomWidth: 1 / PixelRatio.get(),
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

export default CircleOfFriend;