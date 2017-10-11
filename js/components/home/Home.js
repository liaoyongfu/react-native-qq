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
    TouchableWithoutFeedback
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

class HomeScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            activeIndex: 0
        };
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

    render() {
        let {activeIndex} = this.state;
        let {navigate} = this.props.navigation;
        return (
            <View style={[PublicStyle.flex]}>
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
                    <View style={[PublicStyle.flex, styles.content]}>
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
                        <SearchBar/>
                        <View>
                            <Text>新朋友</Text>
                            <FontAwesome name="angle-right"/>
                        </View>
                        <ScrollableTabView
                            renderTabBar={() => <ScrollableTabBar/>}
                            tabBarUnderlineStyle={{
                                backgroundColor: "#12b7f5"
                            }}
                            initialPage={0}
                            tabBarActiveTextColor='#12b7f5'
                        >
                            <Text tabLabel='好友'/>
                            <Text tabLabel='群'/>
                            <Text tabLabel='多人聊天'/>
                            <Text tabLabel='设备'/>
                            <Text tabLabel='通讯录'/>
                            <Text tabLabel='公众号'/>
                        </ScrollableTabView>
                    </View>
                )}
                {activeIndex === 2 && (
                    <View style={[PublicStyle.flex, styles.content]}>
                        <SearchBar placeholder='大家都在搜：袁泉完胜马伊琍'/>
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
        backgroundColor: '#fff'
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