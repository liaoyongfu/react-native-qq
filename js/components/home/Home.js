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
    UIManager
} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import PublicStyle from '../../css';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import SideMenuScreen from './components/SideMenu';
import SearchBar from '../../public/SearchBar/SearchBar';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ListItem from './components/ListItem';
import Message from "./components/Message";
import Concacts from "./components/Concacts";
import CircleOfFriend from "./components/CircleOfFriend";
import BottomMenu from "./components/BottomMenu";

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
            ],
            messageList: [
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
            ],
            showMsgTopMenu: false
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

    showMsgTopMenu(e){
        //todo 如果能获取位置最好
        e.stopPropagation();
        this.setState({
            showMsgTopMenu: true
        });
    }

    render() {
        let {activeIndex, friendList, messageList, showMsgTopMenu} = this.state;
        let {navigate, openDrawer} = this.props.navigation;

        return (
            <View style={[PublicStyle.flex, styles.body]}>
                <StatusBar translucent={true}/>
                {/* 头部 */}
                <LinearGradient style={[styles.header]} colors={['#508dff', '#3ab8fe']}>
                    <View style={[PublicStyle.vhCenter, styles.headerLeft]}>
                        <TouchableWithoutFeedback onPress={() => openDrawer()}>
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
                        {activeIndex === 0 && (
                            <TouchableWithoutFeedback ref={plus => this.plus = plus} onPress={this.showMsgTopMenu.bind(this)}>
                                <MaterialCommunityIcons name="plus" size={30} color="#fff"/>
                            </TouchableWithoutFeedback>
                        )}
                        {activeIndex === 1 && <Text style={{color: '#fff'}}>添加</Text>}
                        {activeIndex === 2 && <Text style={{color: '#fff'}}>更多</Text>}
                    </View>
                </LinearGradient>
                {/* 消息 */}
                {activeIndex === 0 && (
                    <Message
                        messageList={messageList}
                        navigate={navigate}
                    />
                )}
                {/* 联系人 */}
                {activeIndex === 1 && (
                    <Concacts
                        friendList={friendList}
                        toggleExpand={this.toggleExpand.bind(this)}
                        navigate={navigate}
                    />
                )}
                {/* 空间 */}
                {activeIndex === 2 && (
                    <CircleOfFriend/>
                )}
                {/* 底部菜单栏 */}
                <BottomMenu
                    activeIndex={activeIndex}
                    setActiveIndex={this.setActiveIndex.bind(this)}
                />

                {showMsgTopMenu && (
                    <TouchableWithoutFeedback onPress={e => {
                        this.setState({showMsgTopMenu: false})
                    }}>
                        <View style={styles.msgTopMenuBox}>
                            <TouchableWithoutFeedback onPress={e => {
                                e.stopPropagation();
                            }}>
                                <View style={styles.msgTopMenu}>
                                    <View style={styles.menuItem}>
                                        <FontAwesome style={styles.menuItemIcon} name="twitch"/>
                                        <Text style={styles.menuItemText}>创建群聊</Text>
                                    </View>
                                    <View style={styles.menuItem}>
                                        <FontAwesome style={styles.menuItemIcon} name="group"/>
                                        <Text style={styles.menuItemText}>加好友/群</Text>
                                    </View>
                                    <View style={styles.menuItem}>
                                        <FontAwesome style={styles.menuItemIcon} name="qrcode"/>
                                        <Text style={styles.menuItemText}>扫一扫</Text>
                                    </View>
                                    <View style={styles.menuItem}>
                                        <FontAwesome style={styles.menuItemIcon} name="wifi"/>
                                        <Text style={styles.menuItemText}>面对面快传</Text>
                                    </View>
                                    <View style={styles.menuItem}>
                                        <FontAwesome style={styles.menuItemIcon} name="barcode"/>
                                        <Text style={styles.menuItemText}>付款</Text>
                                    </View>
                                    <View style={styles.menuItem}>
                                        <FontAwesome style={styles.menuItemIcon} name="camera"/>
                                        <Text style={styles.menuItemText}>拍摄</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f7f7f9'
    },
    header: {
        height: 40,
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
    addIcon: {
        color: '#fff',
        fontSize: 20
    },
    msgTopMenuBox: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    msgTopMenu: {
        position: 'absolute',
        top: 50,
        right: 5,
        minWidth: 150,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    menuItemIcon: {
        fontSize: 18,
        color: '#666',
        minWidth: 20,
        marginRight: 15
    },
    menuItemText: {
        color: '#666'
    }
});

const HomePage = createDrawerNavigator({
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