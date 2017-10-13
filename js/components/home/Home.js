/**
 *  * Created by liaoyf on 2017/9/29 0029.
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
import PublicStyle from '../../css';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import SideMenuScreen from './components/SideMenu';
import SearchBar from '../../public/SearchBar/SearchBar';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ListItem from './components/ListItem';

class HomeScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            activeIndex: 0,
            friendList: [
                {
                    label: '特别关心',
                    onlineNum: 0,
                    countNum: 0,
                    list: []
                },
                {
                    label: '亲人',
                    onlineNum: 3,
                    countNum: 4,
                    list: [
                        {
                            label: '葱头',
                            loginType: 'TIM在线',
                            sign: '人生跟年龄没关系，跟经历有关系，一旦经历了，人生便不一样了！'
                        },
                        {
                            label: '浮沉',
                            loginType: 'iPhone在线',
                            sign: '。。。'
                        },
                        {
                            label: '光',
                            loginType: '4G在线',
                            sign: ''
                        }
                    ]
                },
                {
                    label: '我的好友',
                    onlineNum: 12,
                    countNum: 27,
                    list: [
                        {
                            label: '葱头',
                            loginType: 'TIM在线',
                            sign: '人生跟年龄没关系，跟经历有关系，一旦经历了，人生便不一样了！'
                        },
                        {
                            label: '浮沉',
                            loginType: 'iPhone在线',
                            sign: '。。。'
                        },
                        {
                            label: '光',
                            loginType: '4G在线',
                            sign: ''
                        }
                    ]
                },
                {
                    label: '同事',
                    onlineNum: 33,
                    countNum: 44,
                    list: [
                        {
                            label: '葱头',
                            loginType: 'TIM在线',
                            sign: '人生跟年龄没关系，跟经历有关系，一旦经历了，人生便不一样了！'
                        },
                        {
                            label: '浮沉',
                            loginType: 'iPhone在线',
                            sign: '。。。'
                        },
                        {
                            label: '光',
                            loginType: '4G在线',
                            sign: ''
                        }
                    ]
                }
            ]
        };

        this.toggleExpand = this.toggleExpand.bind(this);
    }

    static navigationOptions = {
        drawerLabel: '首页',
        header: null
    };

    setActiveIndex(index){
        this.setState({
            activeIndex: index
        });
    }

    renderItem({item}) {
        return (
            <View style={styles.itemBox}>
                <View style={[styles.listIcon]}>
                    <Image source={require('../../../image/vator.jpg')}
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

    toggleExpand(label){
        let { friendList } = this.state;

        let findIndex = friendList.findIndex(item => item.label === label);

        this.setState({
            friendList: [
                ...friendList.slice(0, findIndex),
                {
                    ...friendList[findIndex],
                    expanded: !friendList[findIndex].expanded
                },
                ...friendList.slice(findIndex + 1)
            ]
        });
    }

    render() {
        let {activeIndex, friendList} = this.state;
        let {navigate} = this.props.navigation;
        return (
            <View style={[PublicStyle.flex, styles.body]}>
                <StatusBar translucent={true}/>
                <LinearGradient style={[styles.header]} colors={['#508dff', '#3ab8fe']} start={{x: 0, y: 0}}
                                end={{x: 0.5, y: 0}}>
                    <View style={[PublicStyle.vhCenter, styles.headerLeft]}>
                        <TouchableWithoutFeedback onPress={() => navigate('DrawerOpen')}>
                            <Image source={require('../../../image/vator.jpg')}
                                   style={{width: 30, height: 30, borderRadius: 15}}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <Text style={[styles.title]}>
                            {activeIndex === 0 && '消息'}
                            {activeIndex === 1 && '联系人'}
                            {activeIndex === 2 && '动态'}
                        </Text>
                    </View>
                    <View style={[PublicStyle.vhCenter, styles.headerRight]}>
                        {activeIndex === 0 && <MaterialCommunityIcons name="plus" size={30} color="#fff"/>}
                        {activeIndex === 1 && <Text style={{color: '#fff'}}>添加</Text>}
                        {activeIndex === 2 && <Text style={{color: '#fff'}}>更多</Text>}
                    </View>
                </LinearGradient>
                {activeIndex === 0 && (
                    <View style={[PublicStyle.flex, styles.content, PublicStyle.box]}>
                        <SearchBar/>
                        <View style={[PublicStyle.flex]}>
                            <FlatList
                                data={[
                                    {
                                        label: 'QQ看点',
                                        lastMessage: '我们用垃圾在太平洋造了一个我们用垃圾在太平洋造了一个',
                                        time: '下午8:43'
                                    },
                                    {
                                        label: 'redux',
                                        lastMessage: 'liaoyf：对于MyListItem组件来说，其onPressItem属性使用箭头函数而非bind的方式进行绑定',
                                        time: '下午2:43'
                                    },
                                    {
                                        label: '服务号',
                                        lastMessage: '腾讯课堂：一份给前端老铁们的好差事，哈哈哈哈哈哈哈哈哈哈哈哈哈',
                                        time: '上午8:23'
                                    },
                                    {
                                        label: 'React Native社区2群',
                                        lastMessage: '畅游网络加入了本群',
                                        time: '下午5:54'
                                    },
                                    {
                                        label: 'React Native社区1群',
                                        lastMessage: '畅游网络2加入了本群',
                                        time: '下午5:53'
                                    },
                                    {
                                        label: 'React交流1群',
                                        lastMessage: '畅游：这是为什么呢？',
                                        time: '下午5:53'
                                    },
                                    {
                                        label: '张三',
                                        lastMessage: '张三：加油加油',
                                        time: '下午5:53'
                                    },
                                    {
                                        label: '张三1',
                                        lastMessage: '张三：加油加油',
                                        time: '下午5:53'
                                    },
                                    {
                                        label: '张三2',
                                        lastMessage: '张三：加油加油',
                                        time: '下午5:53'
                                    },
                                    {
                                        label: '张三3',
                                        lastMessage: '张三：加油加油',
                                        time: '下午5:53'
                                    }
                                ]}
                                keyExtractor={item => item.label}
                                renderItem={this.renderItem}
                            />
                        </View>
                    </View>
                )}
                {activeIndex === 1 && (
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
                                        <ListItem toggleExpand={this.toggleExpand} item={item}/>
                                    )}
                                    keyExtractor={(item, index) => index}
                                />
                            </View>
                            <Text tabLabel='群'>群</Text>
                            <Text tabLabel='多人聊天'>多人聊天</Text>
                            <Text tabLabel='设备'>设备</Text>
                            <Text tabLabel='通讯录'>通讯录</Text>
                            <Text tabLabel='公众号'>公众号</Text>
                        </ScrollableTabView>
                    </View>
                )}
                {activeIndex === 2 && (
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
                                data={[
                                    {
                                        label: '日迹'
                                    },
                                    {
                                        label: '看点'
                                    },
                                    {
                                        label: '动漫'
                                    },
                                    {
                                        label: '音乐'
                                    },
                                    {
                                        label: '热门活动'
                                    }
                                ]}
                                renderItem={({item}) => <Text>{item.label}</Text>}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                        <View style={[PublicStyle.box, styles.dtListTwo]}>
                            <FlatList
                                data={[
                                    {
                                        label: '运动'
                                    },
                                    {
                                        label: '同城服务'
                                    }
                                ]}
                                renderItem={({item}) => <Text>{item.label}</Text>}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                    </View>
                )}
                <View style={[styles.footer]}>
                    <TouchableWithoutFeedback onPress={() => this.setActiveIndex(0)}>
                        <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                            <FontAwesome name="smile-o"
                                         style={[styles.footerIcon, activeIndex === 0 && styles.footerActive]}/>
                            <Text style={[styles.footerText, activeIndex === 0 && styles.footerActive]}>消息</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.setActiveIndex(1)}>
                        <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                            <FontAwesome name="user-o"
                                         style={[styles.footerIcon, activeIndex === 1 && styles.footerActive]}/>
                            <Text style={[styles.footerText, activeIndex === 1 && styles.footerActive]}>联系人</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.setActiveIndex(2)}>
                        <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                            <FontAwesome name="star-o"
                                         style={[styles.footerIcon, activeIndex === 2 && styles.footerActive]}/>
                            <Text style={[styles.footerText, activeIndex === 2 && styles.footerActive]}>动态</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f7f7f9'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    headerLeft: {
        width: 60
    },
    title: {
        color: '#fff',
        fontSize: 18
    },
    headerRight: {
        width: 40
    },
    content: {
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#ccc'
    },
    footerText: {
        fontSize: 10,
        marginTop: 3
    },
    footerIcon: {
        color: '#7f8393',
        fontSize: 24
    },
    footerActive: {
        color: '#4dafff'
    },
    addIcon: {
        color: '#fff',
        fontSize: 20
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

const HomePage = DrawerNavigator({
    Home: {
        screen: HomeScreen
    }
}, {
    contentComponent: SideMenuScreen,
    contentOptions: {
        header: null
    }
});

export default HomePage;